"use client"
import React, { useEffect } from 'react'
import { useUserStore } from '@/stores/store'
import { useToast } from '@/components/ui/use-toast'
import apiClient from '@/api-client/apiClient'
import { useState } from 'react'
import loader from '/public/loader.svg'
import Image from 'next/image'

function Consult() {
    const { user } = useUserStore();
    const { toast } = useToast();
    const [allConsulation, setAllConsulation] = useState([]);
    const [loading, setLoading] = useState(false);

    const getConsultation = async () => {
      try {
        setLoading(true);
        const response = await apiClient.get("/patients/viewConsultations");
        if (response.status === 200) {
          setAllConsulation(response.data.data.consultation);
        } else {
          toast({
            title: "Error",
            description: response.data.message,
            variant: "destructive",
          });
        }
        setLoading(false);
      } catch (error) {
        console.error(error);
        toast(
          {
            title: "Error",
            description: "Failed to fetch consultation",
            variant: "destructive",
          }
        )
        
      }
    }

    useEffect(() => {
      if (user && allConsulation.length === 0) {
        getConsultation();
        console.log("All Consultation:", allConsulation);
      }
    }, [user, allConsulation]); 


    
  return (
        <div className="flex flex-col col-span-3 items-center justify-center mt-12">
      <h1 className="text-4xl font-semibold text-gray-700">My Consultaions </h1>
      <div className="w-full shadow-lg mt-6">
        {loading ? (
          <div className="flex items-center justify-center h-96">
            <Image src={loader} alt="Loading" width={50} height={50} />
          </div>
        ) : (
          <div className=" p-6 md:p-12">
            {allConsulation.map((consultation) => (
              <PatientConsultationCard
                key={consultation.id}
                consultationData={consultation}
              />
            ))}
           
          
          </div>
        )}
      </div>
      
    </div>
      
  )
}

export default Consult


import { BsCloudSunFill, BsFillSunFill } from 'react-icons/bs';
import { IoCloudyNight } from 'react-icons/io5';
import { format } from 'date-fns';

function PatientConsultationCard({ consultationData }) {
    const timeOptions = [
        {
            icon: BsCloudSunFill,
            name: "Morning",
            value: "morning"
        },
        {
            icon: BsFillSunFill,
            name: "Afternoon",
            value: "afternoon"
        },
        {
            icon: IoCloudyNight,
            name: "Night",
            value: "night"
        },
    ];

    return (
        <div className="bg-primary p-4 rounded-lg mb-4">
            <h4 className="text-xl font-semibold mb-4">Consultation Details</h4>
            {/* <div className="mb-2 flex justify-end items-end">
              <button className='bg-primary text-white px-2 py-1 rounded-lg'> Print </button>
            </div> */}
            <div className="bg-white/70 p-4 rounded-lg shadow mb-4">
                <div className="mb-2">
                    <strong>Symptoms:</strong> {consultationData.symptoms.join(', ')}
                </div>
                <div className="mb-2">
                    <strong>Diagnosis:</strong> {consultationData.consultation.diagnosis}
                </div>
                <div className="mb-2">
                    <strong>Follow-up:</strong> {consultationData.consultation.followUp}
                </div>
                <div className="mb-2">
                    <strong>Date:</strong> {format(new Date(consultationData.consultation.createdAt), 'dd MMM yyyy')}
                </div>
            </div>
            <h5 className="text-lg font-semibold mb-4">Prescription</h5>
            {consultationData.consultation.prescription.map((prescription, index) => (
                <div key={index} className="bg-white/70 p-4 rounded-lg shadow mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex flex-col">
                            <label className="text-gray-500">Medicine Name</label>
                            <input
                                type="text"
                                className="border border-gray-200 rounded-lg p-2 mt-1"
                                value={prescription.medicine}
                                readOnly
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-gray-500">Notes</label>
                            <input
                                type="text"
                                className="border border-gray-200 rounded-lg p-2 mt-1"
                                value={prescription.notes}
                                readOnly
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-gray-500">Time</label>
                            <div className="flex justify-around mt-1">
                                {timeOptions.map((timeOption, timeIndex) => (
                                    <div
                                        key={timeIndex}
                                        className={`flex flex-col items-center ${prescription[timeOption.value] === 1 ? "" : "opacity-30"}`}
                                    >
                                        <timeOption.icon size="1.5em" color="#90a9b0" className="mb-1" />
                                        <p>{timeOption.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div className="flex justify-end items-center mt-4">
                <div className="flex items-center">
                    <div className='text-right mr-4'>
                        <p className="text-lg font-semibold">{consultationData.doctor.user.name}</p>
                        <p className="text-sm text-gray-700">{consultationData.doctor.specialization}</p>
                        <p className="text-sm text-gray-700">Fee: ${consultationData.doctor.consultationFee}</p>
                    </div>
                    <Image
                        src={consultationData.doctor.user.avatar}
                        alt="Doctor Avatar"
                        height={50}
                        width={50}
                        className="w-12 h-12 rounded-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}


