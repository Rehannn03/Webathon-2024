"use client"
import { CTA, SelectDoctor,SelectOption, DatePicker, SelectTime, InputTags } from '@/components/appointments'
import React, { useEffect, useState } from 'react'
import { useUserStore } from '@/stores/store'
import {fetchAndSetUserStore} from '@/lib/fetchAndSetUserStore'

function Appointment() {
  const { user, update } = useUserStore() 
  const [allTypes, setAllTypes] = useState([
      {id: 1, name: 'General Consultation'},
      {id: 2, name: 'Speciality Consultation'},
      {id: 3, name: 'Dental'},
      {id: 4, name: 'Orthopedic'},
      {id: 5, name: 'Neurology'},
    ])
  const [allDoctors, setAllDoctors] = useState([])
  const timeSlots = [
    {id: 1, slot: "Morning"},
    {id: 2, slot: "Afternoon"},
    {id: 3, slot: "Evening"},
    {id: 4, slot: "Night"},
  ]
  
  // Form States
  const [selectedType, setSelectedType] = useState(allTypes[0].id)
  const [selectedDoctor, setSelectedDoctor] = useState(null)
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedTime, setSelectedTime] = useState('')
  const [selectedSymptoms, setSelectedSymptoms] = useState([])
  // const user = useContext(UserContext)                         TODO : Add User Context

  useEffect(() => {
    if (!user)
    fetchAndSetUserStore(update)
  }, [])

  useEffect(() => {
    // if user is available (access token // UID is available) then only fetch the data 
    // Fetch all types
    // Fetch all doctors
    // DEP ARRAY: the type selected and access token

    //User store
    console.log("This Data is from the global store");
    console.log(user)
  }, [user])

  const validateForm = () => {
    console.log(
      selectedType,
      selectedDoctor.name,
      selectedDate,
      selectedTime,
      selectedSymptoms
    )
    // validate the form
    // if doctor is not selected
    // if date is not selected
    // if time is not selected
    // if symptoms are not selected
    // if all are selected then return true
    // else return false
  }

  const bookAppointment = () => {

    if (validateForm()) {
      // if form is validated then
      // make API req
      // if 200 then show the success message
      // else show the error message
      // clear the form
    }

  }



  return (
    <div className='w-full flex flex-col items-center justify-center md:py-8'>
      <CTA />
      <div className='w-[90%] md:w-1/2 my-16 shadow-md rounded-3xl'> 
        <div className='flex flex-col px-12 py-8 gap-y-5'>
          <h1 className='text-3xl font-bold my-4'>Schedule Your Appointment</h1>
          <SelectOption  selectedType={selectedType} setSelectedType={setSelectedType} allTypes={allTypes} />
          <SelectDoctor selectedDoctor={selectedDoctor} setSelectedDoctor={setSelectedDoctor}/>
          <DatePicker date={selectedDate} setDate={setSelectedDate} />
          <SelectTime timeSlots={timeSlots} selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
          <InputTags value={selectedSymptoms} onChange={setSelectedSymptoms} />
          <div className='flex justify-end'>
            <button
              className='py-2 px-4 w-1/2 md:w-1/3 text-white font-medium rounded-md shadow-2xl bg-primary hover:bg-accent transition ease-in-out duration-200'
              type='button'
              onClick={bookAppointment}
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    
    </div>
    
  )
}

export default Appointment