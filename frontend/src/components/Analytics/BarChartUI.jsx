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
  earnings: {
    label: "Earnings in $",
    color: "#010101",
  },
};
const BarChartUI = () => {
  return (
    <div className="m-5 flex-1 p-8 border-2 w-[650px] h-[400px]">
      <ChartContainer config={chartConfig} className="w-full">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey="earnings" fill="var(--color-earnings)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default BarChartUI;
