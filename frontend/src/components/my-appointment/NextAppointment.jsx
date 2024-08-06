"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { v4 as uuid } from "uuid";
import { useUserStore } from "@/stores/store";
import { fetchAndSetUserStore } from "@/lib/fetchAndSetUserStore";
import apiClient from "@/api-client/apiClient";

function NextAppointment({ nextUpcomingAppointment }) {
  const [timer, setTimer] = useState(null);
  const router = useRouter();
  const today = new Date();
  const { user, update } = useUserStore();
  const formatDate = (date) => {
    return new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
      new Date(date)
    );
  };
  const isSameDay = (date1, date2) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };
  const formatTimeRemaining = (timeRemaining) => {
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return `${days} days ${hours}h ${minutes}m ${seconds}s`;
  };

  useEffect(() => {
    if (nextUpcomingAppointment) {
      const appointmentDate = new Date(nextUpcomingAppointment.date);
      console.log("Appointment Date:", appointmentDate);
      console.log(nextUpcomingAppointment);
      const updateTimer = () => {
        const now = new Date().getTime();
        const timeRemaining = appointmentDate - now;

        if (timeRemaining <= 0) {
          clearInterval(timer);
          setTimer(null);
        } else {
          setTimer(timeRemaining);
        }
      };

      updateTimer(); // Initial call
      const intervalId = setInterval(updateTimer, 1000); // Update every second

      return () => clearInterval(intervalId); // Cleanup on component unmount
    }
    console.log("Next Upcoming Appointment:", nextUpcomingAppointment);
  }, [nextUpcomingAppointment]);
  useEffect(() => {
    if (!user) {
      fetchAndSetUserStore(update);
    }
  }, [user, update]);

  // Generate a unique room ID and link
  const generateRoomID = () => uuid();
  const generateConsultationLink = (roomID) =>
    `${window.location.origin}/room/${roomID}`;

  const handleConsultRedirect = async () => {
    try {
      console.log("Starting video consultation...");

      // Generate a unique room ID and link
      const roomID = generateRoomID();
      const link = `/room/${roomID}`;

      console.log("Generated room ID:", roomID);
      console.log("Generated link:", link);
      const appointmentId = nextUpcomingAppointment._id;
      // Update the appointment with the video consultation link
      const updateResponse = await apiClient.patch(
        "/doctors/activateAppointment",
        {
          appointmentId,
          link,
        }
      );

      if (updateResponse.status === 200) {
        console.log(
          "Appointment updated with link:",
          updateResponse.data.data.appointment
        );

        // Redirect to the video consultation room
        // router.push(link);
        window.open(link, "_blank");
      } else {
        console.error(
          "Failed to update appointment:",
          updateResponse.data.message
        );
      }
    } catch (error) {
      console.error("Error updating appointment:", error);
    }
  };

  const profile = nextUpcomingAppointment.patient.profile;
  const symptoms = nextUpcomingAppointment.symptoms;
  return (
    <div className="mb-6 p-6 bg-primary border border-black rounded-lg shadow-lg flex flex-col md:flex-row">
      <div className="mb-4 md:mb-0 w-full md:w-2/3 flex flex-col">
        <h2 className="text-2xl font-semibold mb-2 text-white">
          Your next upcoming appointment with{" "}
          {nextUpcomingAppointment.patient.name}
        </h2>
        <div className="flex flex-col gap-1 pr-20">
          <p className="text-lg text-white">
            <strong>Date:</strong> {formatDate(nextUpcomingAppointment.date)}
          </p>
          <p className="text-lg text-white">
            <strong>Time:</strong>{" "}
            {nextUpcomingAppointment.time || "Not specified"}
          </p>
          <p className="text-lg text-white">
            <strong>Your Note:</strong>{" "}
            {nextUpcomingAppointment.note || "No additional notes provided."}
          </p>
          <div className="mb-4">
            <h4 className="text-lg text-white pb-1">Symptoms Of The Patient</h4>
            <ul class="space-y-2 text-left text-white">
              {symptoms.map((symptom, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-2 rtl:space-x-reverse"
                >
                  <svg
                    class="flex-shrink-0 w-3.5 h-3.5 text-white dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span>{symptom}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full md:w-1/3 md:flex-row items-center md:items-start">
        <div className="flex flex-col w-full items-end md:items-start mb-4 md:mb-0 md:w-1/3">
          <img
            src={nextUpcomingAppointment.patient.avatar}
            alt={nextUpcomingAppointment.patient.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="text-white text-center md:text-left">
            <p className="text-lg font-medium">
              {nextUpcomingAppointment.patient.name}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-3 items-center sm:items-end ">
        {(isSameDay(new Date(nextUpcomingAppointment.date), today) &&
          nextUpcomingAppointment.status === "approved") ||
        nextUpcomingAppointment.status === "active" ? (
          <button
            onClick={handleConsultRedirect}
            className="mt-4 md:mt-[200px] px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Go to Consult
          </button>
        ) : (
          <p className="text-white">The appointment day has passed.</p>
        )}
        {nextUpcomingAppointment.status === "active" && (
          <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
            End Consultation
          </button>
        )}
      </div>
    </div>
  );
}

export default NextAppointment;
