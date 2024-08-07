"use client";
import React from "react";
import apiClient from "@/api-client/apiClient";
import { useEffect, useState } from "react";
import { useUserStore } from "@/stores/store";
import AllAppointments from "@/components/dashboard/AllAppointments";

const page = () => {
  const user = useUserStore();
  const [allAppt, setAllAppt] = useState([]);
  const getAllAppt = async () => {
    const response = await apiClient.get("/admin/getAppointments");
    const apptList = response.data.data.appointments;
    setAllAppt(apptList);
    console.log(response);
  };
  useEffect(() => {
    if (user) {
      getAllAppt();
    }
  }, [user]);
  return <AllAppointments allAppt={allAppt} />;
};

export default page;
