"use client"

import React, { useEffect, useState } from 'react'
import { useUserStore } from '@/stores/store'
import {fetchAndSetUserStore} from '@/lib/fetchAndSetUserStore'
import { useToast } from '@/components/ui/use-toast'
import apiClient from '@/api-client/apiClient';
import loader from '/public/loader.svg'
import Image from 'next/image'
import AppointmentCard from '@/components/my-appointment/AppointmentCardOLD'

function MyAppointments() {
    const { user, update } = useUserStore()
    const { toast } = useToast()
    const [allAppointments, setAllAppointments] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!user)
        fetchAndSetUserStore(update)
    }, [])

    // get all appointments
    const getAllAppointment = async () => {
        console.log("Getting all appointments")
        if (!user) return 
        setLoading(true)
        const response = await apiClient.get('/doctors/getAppointments')
        console.log(response)
        if (response.status === 200) {
            setAllAppointments(response.data.data.appointments)
        } else {
            toast({
                title: 'Error',
                description: response.data.message,
                variant: 'destructive'
            })
        }
        setLoading(false)
    
    }

    useEffect(() => {
        if (user) {
            getAllAppointment()
        }
        console.log(allAppointments)
    }, [user])

  return (
    <>
        <h1>My Appointments</h1>
        <div>

            {
                loading ? (
                 <div className="block h-full m-auto">
                    <Image src='/loader.svg' height={40} width={40} alt="loader" className="block h-full m-auto" />
                    </div>
                ) : (
                    <div className='grid grid-cols-1 p-12'>  
                        {
                            allAppointments.map((appointment) => (
                                <AppointmentCard key={appointment.id} appointment={appointment} getAllAppointment={getAllAppointment}/>
                            ))
                        }       
                    </div>
                )
            }
        </div>  
    </>
  )
}

export default MyAppointments