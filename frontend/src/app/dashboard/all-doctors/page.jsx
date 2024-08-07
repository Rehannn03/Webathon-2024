"use client";
import React from "react";
import axios from "axios";
import apiClient from "@/api-client/apiClient";
import { useEffect, useState } from "react";
import { FaUserDoctor } from "react-icons/fa";
import { useUserStore } from "@/stores/store";
import AllDoctors from "@/components/dashboard/AllDoctors";

const page = () => {
  const user = useUserStore();
  const [allDoctors, setAllDoctors] = useState([]);
  const getAllDoctors = async () => {
    const response = await apiClient.get("/admin/getDoctors");
    const doctorListResponse = response.data.data.doctors;
    setAllDoctors(doctorListResponse);
    console.log(response);
  };
  useEffect(() => {
    if (user) {
      getAllDoctors();
    }
  }, [user]);
  return <AllDoctors allDoctors={allDoctors} />;
};

export default page;
