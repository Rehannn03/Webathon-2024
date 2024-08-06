"use client";
import React from "react";
import PieChartUI from "@/components/Analytics/PieChartUI";
import LineChartUI from "@/components/Analytics/LineChartUI";
import BarChartUI from "@/components/Analytics/BarChartUI";
import WeekChartUI from "@/components/Analytics/WeekChartUI";
const Page = () => {
  return (
    <div className="flex items-center justify-center">
     <div className="flex-1">
     <PieChartUI />
     <LineChartUI />
     </div>
      <div className="flex-1">
        <BarChartUI />
        <WeekChartUI />
      </div>
    </div>
  );
};

export default Page;
