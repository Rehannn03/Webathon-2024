"use client";

import React, { useEffect, useState } from "react";
import { useUserStore } from "@/stores/store";
import { fetchAndSetUserStore } from "@/lib/fetchAndSetUserStore";
import { useToast } from "@/components/ui/use-toast";
import apiClient from "@/api-client/apiClient";
import { useRouter } from "next/navigation";
import Image from "next/image";
import loader from "/public/loader.svg";
import { FaCalendarAlt, FaClock, FaNotesMedical } from "react-icons/fa";

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

const AppointmentsList = () => {
  const { user, update } = useUserStore();
  const { toast } = useToast();
  const [allAppointments, setAllAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nextUpcomingAppointment, setNextUpcomingAppointment] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      fetchAndSetUserStore(update);
    }
  }, [user, update]);

  const getAllAppointments = async () => {
    if (!user) return;
    setLoading(true);

    try {
      const response = await apiClient.get("/patients/viewAppointments");

      if (response.status === 200) {
        const appointments = response.data.data.appointments;

        if (Array.isArray(appointments)) {
          // Sort appointments by date in ascending order
          const sortedAppointments = appointments.sort(
            (a, b) => new Date(a.date) - new Date(b.date)
          );

          // Check if the earliest appointment is approved or active and upcoming
          const now = new Date();
          const nextAppt = sortedAppointments.find(
            (appt) =>
              new Date(appt.date) >= now &&
              (appt.status === "approved" || appt.status === "active")
          );
          if (nextAppt) {
            setNextUpcomingAppointment(nextAppt);
          } else {
            setNextUpcomingAppointment(null);
          }

          setAllAppointments(sortedAppointments);
        } else {
          console.error("Appointments key is not an array or missing");
        }
      } else {
        toast({
          title: "Error",
          description: response.data.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error fetching appointments:", error);
      toast({
        title: "Error",
        description: "Failed to fetch appointments",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      getAllAppointments();
    }
  }, [user]);

  const handleConsultRedirect = (link) => {
    if (link != '') {
      // window.open(link, "_blank");
      console.log("Redirecting to consultation link:", link);
      // router.push(link);
      window.open(link, "_blank");
    } else {
      toast({
        title: "Error",
        description: "No consultation link available",
        variant: "destructive",
      });
    }
  };

  const doctor = nextUpcomingAppointment
    ? nextUpcomingAppointment.doctor
    : null;
  const symptoms = nextUpcomingAppointment
    ? nextUpcomingAppointment.symptoms
    : [];
  const today = new Date();

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Upcoming Appointments
      </h1>
      {loading ? (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image src={loader} alt="Loading" width={50} height={50} />
        </div>
      ) : (
        <>
          {nextUpcomingAppointment && (
            <div className="mb-6 p-6 bg-primary border border-black text-white rounded-lg shadow-lg">
              <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
                <div className="flex-1 mb-4 md:mb-0">
                  <h2 className="text-xl md:text-2xl font-bold mb-2">
                    Your next upcoming appointment with Dr. {doctor.user.name}!
                  </h2>
                  <div className="mb-2">
                    <FaCalendarAlt className="inline mr-2" />
                    <span className="font-semibold">Date:</span>{" "}
                    {formatDate(nextUpcomingAppointment.date)}
                  </div>
                  <div className="mb-2">
                    <FaClock className="inline mr-2" />
                    <span className="font-semibold">Time:</span>{" "}
                    {nextUpcomingAppointment.time || "Not specified"}
                  </div>
                  <div className="mb-2">
                    <FaNotesMedical className="inline mr-2" />
                    <span className="font-semibold">Doctor's Note:</span>{" "}
                    {nextUpcomingAppointment.note ||
                      "No additional notes provided."}
                  </div>
                  <div>
                    <FaNotesMedical className="inline mr-2" />
                    <span className="font-semibold">Symptoms:</span>
                    <ul className="list-disc list-inside ml-6">
                      {symptoms.map((symptom, index) => (
                        <li key={index}>{symptom}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex-1 md:ml-6 flex flex-col items-center md:items-end text-center md:text-right">
                  <Image
                    src={doctor.user.avatar}
                    alt={doctor.user.name}
                    width={96}
                    height={96}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mb-4"
                  />
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold">
                      {doctor.user.name}
                    </h3>
                    <p>Specialization: {doctor.specialization}</p>
                    <p>Qualification: {doctor.qualification}</p>
                    <p>Experience: {doctor.experience} years</p>
                    <p>Fee: ${doctor.consultationFee}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center md:items-end ml-auto md:ml-6">
                {(isSameDay(new Date(nextUpcomingAppointment.date), today) || nextUpcomingAppointment.status === "active") ? (
                  <button
                    onClick={() => handleConsultRedirect(nextUpcomingAppointment.link)}
                    className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                    disabled={nextUpcomingAppointment.link === ""}
                  >
                    {
                      nextUpcomingAppointment.link === "" ? "Consultation link not available" : "Join Consultation"
                    }
                  </button>
                ) : (
                  <p className="text-white">The appointment day has passed.</p>
                )}
              </div>
            </div>
          )}

          <div className="space-y-4">
            {allAppointments
              .filter((appt) => appt._id !== nextUpcomingAppointment?._id)
              .map((appointment) => (
                <div
                  key={appointment._id}
                  className="p-4 bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold mb-2">
                    {formatDate(appointment.date)}
                  </h3>
                  <p className="text-gray-700">
                    <strong>Time:</strong> {appointment.time || "Not specified"}
                  </p>
                  <p className="text-gray-700">
                    <strong>Doctor's Note:</strong>{" "}
                    {appointment.note || "No additional notes provided."}
                  </p>
                  <p className="text-gray-700">
                    <strong>Symptoms:</strong>
                  </p>
                  <ul className="list-disc pl-6 text-gray-700">
                    {appointment.symptoms && appointment.symptoms.length > 0 ? (
                      appointment.symptoms.map((symptom, index) => (
                        <li key={index}>{symptom}</li>
                      ))
                    ) : (
                      <li>No symptoms provided</li>
                    )}
                  </ul>
                  {appointment.status && (
                    <span
                      className={`py-1 px-3 text-xs rounded-full ${
                        appointment.status === "pending"
                          ? "bg-yellow-200 text-yellow-600"
                          : appointment.status === "approved"
                          ? "bg-green-200 text-green-600"
                          : appointment.status === "rejected"
                          ? "bg-red-200 text-red-600"
                          : appointment.status === "active"
                          ? "bg-blue-200 text-blue-600"
                          : appointment.status === "completed"
                          ? "bg-purple-200 text-purple-600"
                          : ""
                      }`}
                    >
                      {appointment.status.charAt(0).toUpperCase() +
                        appointment.status.slice(1)}
                    </span>
                  )}
                  <div className="mt-4 flex items-center">
                    <Image
                      src={appointment.doctor.user.avatar}
                      alt={appointment.doctor.user.name}
                      width={64}
                      height={64}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <p className="text-lg font-medium">
                        {appointment.doctor.user.name}
                      </p>
                      <p className="text-gray-600">
                        Specialization: {appointment.doctor.specialization}
                      </p>
                      <p className="text-gray-600">
                        Qualification: {appointment.doctor.qualification}
                      </p>
                      <p className="text-gray-600">
                        Experience: {appointment.doctor.experience} years
                      </p>
                      <p className="text-gray-600">
                        Fee: ${appointment.doctor.consultationFee}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AppointmentsList;