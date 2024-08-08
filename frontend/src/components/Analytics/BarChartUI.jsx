"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", earnings: 186 },
  { month: "February", earnings: 305 },
  { month: "March", earnings: 237 },
  { month: "April", earnings: 73 },
  { month: "May", earnings: 209 },
  { month: "June", earnings: 214 },
  { month: "July", earnings: 150 },
  { month: "August", earnings: 280 },
  { month: "September", earnings: 195 },
  { month: "October", earnings: 320 },
  { month: "November", earnings: 250 },
  { month: "December", earnings: 180 },
];

const chartConfig = {
  count: {
    label: "Frequency",
    color: "#010101",
  },
};
const BarChartUI = ({data}) => {
  return (

      <ChartContainer config={chartConfig} className="w-full">
        <BarChart accessibilityLayer data={data}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="_id"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey="count" fill="#795cfa" radius={4} />
        </BarChart>
      </ChartContainer>

  );
};

export default BarChartUI;
