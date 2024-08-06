"use client";

import React, { useEffect, useState } from "react";
import { useUserStore } from "@/stores/store";
import { fetchAndSetUserStore } from "@/lib/fetchAndSetUserStore";
import { useToast } from "@/components/ui/use-toast";
import apiClient from "@/api-client/apiClient";
import loader from "/public/loader.svg";
import Image from "next/image";
import AppointmentCard from "@/components/my-appointment/AppointmentCardOLD";
import { useRouter } from "next/navigation";
import NextAppointment from "../../../components/my-appointment/NextAppointment";

function MyAppointments() {
  const { user, update } = useUserStore();
  const { toast } = useToast();
  const [allAppointments, setAllAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nextUpcomingAppointment, setNextUpcomingAppointment] = useState(null);

  useEffect(() => {
    if (!user) fetchAndSetUserStore(update);
  }, []);

  // get all appointments
  const getAllAppointment = async () => {
    console.log("Getting all appointments");
    if (!user) return;
    if (allAppointments.length > 0) return;
    setLoading(true);
    const response = await apiClient.get("/doctors/getAppointments");
    console.log(response);
    if (response.status === 200) {
      const appointments = response.data.data.appointments;
      console.log("Appointments:", appointments);
      if (Array.isArray(appointments)) {
        const sortedAppointments = [...appointments].sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        );

        console.log("Sorted Appointments:", sortedAppointments);

        // Find the next upcoming appointment with status 'Accepted'
        let foundAcceptedAppt = null;
        for (const appt of sortedAppointments) {
          if (new Date(appt.date) > new Date() && appt.status === "approved") {
            foundAcceptedAppt = appt;
            break;
          }
        }

        if (foundAcceptedAppt) {
          setNextUpcomingAppointment(foundAcceptedAppt);
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
    setLoading(false);

  };

  useEffect(() => {
    if (user && !allAppointments.length > 0) {
      getAllAppointment();
    }
    console.log(allAppointments);
  }, [user, allAppointments]);

  return (
    <>
  
    <div className="flex flex-col col-span-3 items-center justify-center mt-12">
        <h1 className="text-4xl font-semibold text-gray-700">My Appointments</h1>
      <div>
        {loading ? (
            <div className="flex items-center justify-center h-96">
                <Image src={loader} alt="Loading" width={50} height={50} />
            </div>
        ) : (
          <>
            <div className="grid grid-cols-1 p-6 md:p-12">
              {nextUpcomingAppointment && (
                <NextAppointment
                  nextUpcomingAppointment={nextUpcomingAppointment}
                />
              )}

              {allAppointments.map((appointment) => (
                <AppointmentCard
                  key={appointment.id}
                  appointment={appointment}
                  getAllAppointment={getAllAppointment}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
    </>
  );
}

export default MyAppointments;
