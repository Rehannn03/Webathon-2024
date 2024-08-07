"use client";
import React from "react";
import apiClient from "@/api-client/apiClient";
import { useEffect, useState } from "react";
import { FaUserDoctor } from "react-icons/fa";
import { useUserStore } from "@/stores/store";
import AllPatients from "@/components/dashboard/AllPatients";

const page = () => {
  const user = useUserStore();
  const [allPatients, setAllPatients] = useState([]);
  const getAllPatients = async () => {
    const response = await apiClient.get("/admin/getPatients");
    const patientListResponse = response.data.data.patients;
    setAllPatients(patientListResponse);
    console.log(response);
  };
  useEffect(() => {
    if (user) {
      getAllPatients();
    }
  }, [user]);
  return <AllPatients allPatients={allPatients} />;
};

export default page;
