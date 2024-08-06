"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { day: "Monday", earnings: 186 },
  { day: "Tuesday", earnings: 305 },
  { day: "Wednesday", earnings: 237 },
  { day: "Thursday", earnings: 73 },
  { day: "Friday", earnings: 209 },
  { day: "Saturday", earnings: 214 },
  { day: "Sunday", earnings: 150 },
];

const chartConfig = {
  earnings: {
    label: "Earnings in $",
    color: "#010101",
  },
} satisfies ChartConfig;
const WeekChartUI = () => {
  return (
    <div className="m-5 flex-1 p-8 border-2 w-[650px] h-[400px]">
      <ChartContainer config={chartConfig} className="w-full">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="day"
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

export default WeekChartUI;
