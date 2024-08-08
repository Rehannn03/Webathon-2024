"use client";

import { Line, LineChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";



const chartConfig = {
  count: {
    label: "Number of Appointments",
    color: "#010101",
  },
}

  function addMissingDates(data){
        // get the month in the data
        // fill out the missing dates of the month
        const result = []
        const date = new Date()
        const month = date.getMonth() + 1
        const year = date.getFullYear()
        const daysInMonth = new Date(year, month, 0).getDate()
        const dates = data.map(d => d._id)
        console.log("Dates:", dates)
        for(let i = 1; i <= daysInMonth; i++){
            // check if the date is in the data
            const date = `${year}-${month.toString().padStart(2,'0')}-${i.toString().padStart(2,'0')}`
            console.log("Date:", date)
            const found = dates.find(d => d === date)
            if(!found){
                result.push({
                    _id:date,
                    count:0
                })
            } else {
                console.log("Found:", found)
                result.push(data.find(d => d._id === date))
            }
        }
        console.log("Result:", result)
        return result   
    }   
const LineChartUI = ({data}) => {
  console.log(data)
  const result = addMissingDates(data)
  return (

      <ChartContainer config={chartConfig}>
        <LineChart accessibilityLayer data={result}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="_id"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
          />
          <YAxis
            dataKey="count"
            tickLine={false}
            tickMargin={10}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Line dataKey="count" fill="#795cfa" radius={4} />
        </LineChart>
      </ChartContainer>

  );
};

export default LineChartUI;
