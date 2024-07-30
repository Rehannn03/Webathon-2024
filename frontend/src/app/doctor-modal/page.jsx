"use client";

import { useState } from "react";
import DoctorModal from "@/components/appointments/doctorModal";
import { Image, User } from "lucide-react";

// Steal Dummy Data of Doctors
// TODO: Fetch Data from API and remove this dummy data
const doctors = [
  {
    pfp: "https://cdn.pfps.gg/pfps/3178-goofy-garfield.png",
    name: "Dr. Bingus",
    specialization: "Cardiology",
    experience: 10,
    qualification: "MBBS, MD",
    consultationFee: 100,
  },
  {
    pfp: "https://cdn.pfps.gg/pfps/3178-goofy-garfield.png",
    name: "Dr. Jone Doe",
    specialization: "Dermatology",
    experience: 8,
    qualification: "MBBS, MD",
    consultationFee: 80,
  },
  {
    pfp: "https://cdn.pfps.gg/pfps/3178-goofy-garfield.png",
    name: "Dr. Tyler Durden",
    specialization: "Dermatology",
    experience: 8,
    qualification: "MBBS, MD",
    consultationFee: 80,
  },
  {
    pfp: "https://cdn.pfps.gg/pfps/3178-goofy-garfield.png",
    name: "Dr. James Smith",
    specialization: "Cardiology",
    experience: 10,
    qualification: "MBBS, MD",
    consultationFee: 100,
  },
  {
    pfp: "https://cdn.pfps.gg/pfps/3178-goofy-garfield.png",
    name: "Dr. William Butcher",
    specialization: "Dermatology",
    experience: 8,
    qualification: "MBBS, MD",
    consultationFee: 80,
  },
  {
    pfp: "https://cdn.pfps.gg/pfps/3178-goofy-garfield.png",
    name: "Dr. Mark",
    specialization: "Dermatology",
    experience: 8,
    qualification: "MBBS, MD",
    consultationFee: 80,
  },
];

const page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDoctorSelect = (doctor) => {
    setSelectedDoctor(doctor);
    //TODO: REMOVE THIS CONSOLE LOG
    console.log("Selected Doctor:", doctor);
    console.log(User)
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded"
        onClick={openModal}
      >
        Choose a Doctor
      </button>
      {isModalOpen && (
        <DoctorModal
          doctors={doctors}
          onClose={closeModal}
          onSelectDoctor={handleDoctorSelect}
        />
      )}
      {selectedDoctor && (
        <div className="mt-4 p-4 border rounded">
          <h3 className="text-xl font-medium">Selected Doctor:</h3>
          <Image src={selectedDoctor.pfp} alt="Doctor's Profile" />
          <p>Name: {selectedDoctor.name}</p>
          <p>Specialization: {selectedDoctor.specialization}</p>
          <p>Experience: {selectedDoctor.experience} years</p>
          <p>Qualification: {selectedDoctor.qualification}</p>
          <p>Consultation Fee: ${selectedDoctor.consultationFee}</p>
        </div>
      )}
    </div>
  );
};

export default page;
