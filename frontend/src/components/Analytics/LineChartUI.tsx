"use client";

import { Line, LineChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  {
    month: "January",
    HepA: 4000,
    HepB: 2400,
    get infected() {
      return this.HepA + this.HepB;
    },
  },
  {
    month: "February",
    HepA: 3000,
    HepB: 1398,
    get infected() {
      return this.HepA + this.HepB;
    },
  },
  {
    month: "March",
    HepA: 2000,
    HepB: 9800,
    get infected() {
      return this.HepA + this.HepB;
    },
  },
  // Add data for the remaining months here
  {
    month: "April",
    HepA: 1500,
    HepB: 5000,
    get infected() {
      return this.HepA + this.HepB;
    },
  },
  {
    month: "May",
    HepA: 2500,
    HepB: 3000,
    get infected() {
      return this.HepA + this.HepB;
    },
  },
  {
    month: "June",
    HepA: 1800,
    HepB: 4000,
    get infected() {
      return this.HepA + this.HepB;
    },
  },
  {
    month: "July",
    HepA: 3200,
    HepB: 2800,
    get infected() {
      return this.HepA + this.HepB;
    },
  },
  {
    month: "August",
    HepA: 4000,
    HepB: 2000,
    get infected() {
      return this.HepA + this.HepB;
    },
  },
  {
    month: "September",
    HepA: 5000,
    HepB: 1500,
    get infected() {
      return this.HepA + this.HepB;
    },
  },
  {
    month: "October",
    HepA: 6000,
    HepB: 1000,
    get infected() {
      return this.HepA + this.HepB;
    },
  },
  {
    month: "November",
    HepA: 7000,
    HepB: 500,
    get infected() {
      return this.HepA + this.HepB;
    },
  },
  {
    month: "December",
    HepA: 8000,
    HepB: 200,
    get infected() {
      return this.HepA + this.HepB;
    },
  },
];

const chartConfig = {
  HepA: {
    label: "Earnings in $",
    color: "#010101",
  },
  HepB:{
    label: "Earnings in $",
    color: "#030141",
  },
} satisfies ChartConfig;
const LineChartUI = () => {
  return (
    <div className="m-5 flex-1 p-8 border-2 w-[650px] h-[400px]">
      <ChartContainer config={chartConfig}>
        <LineChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis
            dataKey="infected"
            tickLine={false}
            tickMargin={10}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Line dataKey="HepA" fill="var(--color-HepA)" radius={4} />
          <Line dataKey="HepB" fill="var(--color-HepB)" radius={4} />
        </LineChart>
      </ChartContainer>
    </div>
  );
};

export default LineChartUI;
