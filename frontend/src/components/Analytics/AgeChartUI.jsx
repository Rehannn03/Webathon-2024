"use client"

import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"

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

// "age": [
//             {
//                 "_id": "Under 18",
//                 "count": 5
//             },
//             {
//                 "_id": "60 and above",
//                 "count": 3
//             },
//             {
//                 "_id": "30-39",
//                 "count": 3
//             },
//             {
//                 "_id": "50-59",
//                 "count": 2
//             },
//             {
//                 "_id": "18-29",
//                 "count": 2
//             },
//             {
//                 "_id": "40-49",
//                 "count": 2
//             }
//         ],


const chartConfig = {
    count: {
        label: "All ",
    },
    "Under 18": {
        label: "Under 18",
        color: "hsl(var(--chart-1))",
    },
    "60 and above": {
        label: "60 and above",
        color: "hsl(var(--chart-2))",
    },
    "30-39": {
        label: "30-39",
        color: "hsl(var(--chart-3))",
    },
    "50-59": {
        label: "50-59",
        color: "hsl(var(--chart-4))",
    },
    "18-29": {
        label: "18-29",
        color: "hsl(var(--chart-5))",
    },
    "40-49": {
        label: "40-49",
        color: "hsl(var(--chart-6))",
    },
} 

export function AgeChart({data}) {
    const pastelColors = [
        "hsl(var(--chart-1))",
        "hsl(var(--chart-2))",
        "hsl(var(--chart-3))",
        "hsl(var(--chart-4))",
        "hsl(var(--chart-5))",
        "hsl(var(--chart-6))",
    ]   
    // add color to each data point
    data.forEach((d, i) => {
        d.fill = pastelColors[i % pastelColors.length]       
    })  


  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle> Age Distribution</CardTitle>    
        <CardDescription>January - Now 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={data} dataKey="count" label nameKey="_id" />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          18+ up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing Age distribution of all patients
        </div>
      </CardFooter>
    </Card>
  )
}
