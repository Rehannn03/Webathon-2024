"use client";
import React from "react";
import PieChartUI from "@/components/Analytics/PieChartUI";
import LineChartUI from "@/components/Analytics/LineChartUI";
const Page = () => {
  return (
    <div className="h-screen">
      <PieChartUI />
      <LineChartUI />
    </div>
  );
};

export default Page;
