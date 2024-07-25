"use client"
import React, { useEffect, useState } from 'react'

function Appointment() {
  const [allTypes, setAllTypes] = useState([])
  const [allDoctors, setAllDoctors] = useState([])
  const timeSlots = [
    {id: 1, slot: "Morning"},
    {id: 2, slot: "Afternoon"},
    {id: 3, slot: "Evening"},
    {id: 4, slot: "Night"},
  ]
  
  // Form States
  const [selectedType, setSelectedType] = useState('')
  const [selectedDoctor, setSelectedDoctor] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [selectedSymptoms, setSelectedSymptoms] = useState('')
  // const user = useContext(UserContext)                         TODO : Add User Context

  useEffect(() => {
    // if user is not available (access token // UID is not available) then redirect to login page 
    // if token is available then fetch User Data
    // Fetch and set userdata -> ADD this function to helpers
    // Set User Data in Context

  }, [])

  useEffect(() => {
    // if user is available (access token // UID is available) then only fetch the data
    // Fetch all types
    // Fetch all doctors
    // DEP ARRAY: the type selected and access token
  }, [])



  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <div>Add Appointment</div>
      <div> CTA to add new appointment </div>
      <div> Select Type of Consultancy you need : Genral ( All Doc); Speciality ( Specific Doc)</div>
      <div> Select Doctor // Based on Type of Consultancy -- MUI Modal </div>
      <div> Select Date // React date Picker -- shadcn </div>
      <div> Select Time // Morning, Afternoon, Evening, Night  </div>
      <div>Add Symptoms // Multi select in -- react-select</div>
    </div>
    
  )
}

export default Appointment