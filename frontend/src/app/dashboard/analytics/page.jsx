"use client";

import React from 'react'
import apiClient from '@/api-client/apiClient'
import { useToast } from '@/components/ui/use-toast'
import { useUserStore } from '@/stores/store'
import { useEffect, useState } from 'react'
import BarChartUI from '@/components/Analytics/BarChartUI';
import LineChartUI from '@/components/Analytics/LineChartUI';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend } from 'recharts';
import { Component } from '@/components/Analytics/PieChartUI';
import {AgeChart} from '@/components/Analytics/AgeChartUI';
import { GendersUI } from '@/components/Analytics/GendersUI';   

function Analytics() {
    const [loading, setLoading] = useState(false)
    const { user } = useUserStore()
    const {toast} = useToast()
    const [symptoms, setSymptoms] = useState([])    
    const [dailyAppointments, setDailyAppointments] = useState([])
    const [city, setCity] = useState([])    
    const [age, setAge] = useState([])
    const [gender, setGender] = useState([])
    const [missingAdded, setMissingAdded] = useState(false)


    const getSymptoms = async () => {
        try {
            const response = await apiClient.get('/admin/symptoms')
            if(response.status === 200){
                console.log(response.data)
                // set only the top 10 symptoms
                setSymptoms(response.data.data.symptons.slice(0,10))
            }else{
                toast({
                    type:"error",
                    message:"Failed to get symptoms"
                })
            }
        } catch (error) {
            console.error(error)
            toast({
                type:"error",
                message:"Failed to get symptoms"
            })
        }
    }

    const getDailyAppointments = async () => {
        try {
            const response = await apiClient.get('/admin/daily-appointments')
            if(response.status === 200){
                setDailyAppointments(response.data.data.appointments)
            }else{
                toast({
                    type:"error",
                    message:"Failed to get daily appointments"
                })
            }
        } catch (error) {
            console.error(error)
            toast({
                type:"error",
                message:"Failed to get daily appointments"
            })
        }
    }

    const getDemographics = async () => {
        try {
            const response = await apiClient.get('/admin/demographics')
            if(response.status === 200){
                console.log(response.data.data)
                setCity(response.data.data.city)
                setAge(response.data.data.age)
                setGender(response.data.data.gender)
            }else{
                toast({
                    type:"error",
                    message:"Failed to get demographics"
                })
            }
        } catch (error) {
            console.error(error)
            toast({
                type:"error",
                message:"Failed to get demographics"
            })
        }
    }

    // [
    //         {
    //             "_id": "2024-08-06",
    //             "count": 15
    //         },
    //         {
    //             "_id": "2024-08-04",
    //             "count": 7
    //         },
    //         {
    //             "_id": "2024-08-05",
    //             "count": 1
    //         },
    //         {
    //             "_id": "2024-08-07",
    //             "count": 1
    //         }
    //     ]
    

    // add the missing dates 



    useEffect(() => {
        if(user){
            setLoading(true)
            getSymptoms()
            getDailyAppointments()
            getDemographics()
            setLoading(false)
            setTimeout(() => {
                
                console.log("Symptoms:", symptoms)
                console.log("Daily Appointments:", dailyAppointments)
                console.log("City:", city)
                console.log("Age:", age)
                console.log("gender",gender)
            }, 3000);

        }
    }, [user])  

    return (
        <div className='mt-10 px-12 mb-12'> 
            <h1 className='text-2xl font-bold text-center'>Analytics</h1>
            <div className='grid grid-cols-1  gap-4 mt-6'> 
                <div className='bg-white p-4 rounded-lg shadow-lg'>
                    <BarChartUI data={symptoms} title='Symptoms' />
                    
                </div>
                <div className='bg-white p-4 rounded-lg shadow-lg'>
                    <LineChartUI data={dailyAppointments}  /> 
                </div>  
                <div className='bg-white rounded-lg shadow-lg'>
                    <Component data={city} title='City' />
                </div>
                <div className='bg-white  rounded-lg shadow-lg'>
                    <AgeChart data={age} title='Age' />
                </div>  
                <div className='bg-white  rounded-lg shadow-lg'>
                    <GendersUI data={gender} />
                    </div>
            </div>
        </div>
         
    )
}

export default Analytics


//     router.get('/symptoms',verifyJWT,symptoms)
// router.get('/daily-appointments',verifyJWT,dailyAppointments)
// router.get('/demographics',verifyJWT,demographics)
const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
function PieChartUi() {
    return (
            <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={260}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    )
}   