"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
        // "gender": [
        //     {
        //         "_id": "M",
        //         "count": 9
        //     },
        //     {
        //         "_id": "",
        //         "count": 7
        //     },
        //     {
        //         "_id": "Male",
        //         "count": 1
        //     }

const chartConfig = {
  gender : {
    label: "All ",
  },
    M: {
        label: "M",
        color: "hsl(var(--chart-1))",
    },  
    "": {
        label: "Other",
        color: "hsl(var(--chart-2))",   
    },
    "F": {
        label: "F",
        color: "hsl(var(--chart-3))",       
    },
    "Female": {
        label: "Female",
        color: "hsl(var(--chart-4))",
    },

  }


export function GendersUI({data}) {
    console.log(data)
    const pastelColors = [
        "hsl(var(--chart-1))",
        "hsl(var(--chart-2))",
        "hsl(var(--chart-3))",
        "hsl(var(--chart-4))",
        "hsl(var(--chart-5))",
      ]
      // add color to each data point
      data.forEach((d, i) => {
        d.fill = pastelColors[i % pastelColors.length]
      })            
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bar Chart - Gender</CardTitle>
        <CardDescription>January - Now 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={data}
            layout="vertical"
            margin={{
              left: 0,
            }}
          >
            <YAxis
              dataKey="count"
              type="_id"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <XAxis dataKey="count" type="number"  />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="count" layout="vertical" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
