import React, { useEffect, useState } from "react";
import DoctorModal from "@/components/appointments/doctorModal";
import Image from "next/image";

function SelectDoctor({ selectedDoctor, setSelectedDoctor }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [allDoctors, setAllDoctors] = useState([
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
  ]);

  useEffect(() => {
    //  TODO: Fetch all doctors when modal is opened
    // DEP ARRAY: isModalOpen
    // Add loader while fetching data
  }, []);

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
  };
  return (
    <div className="flex flex-row">
      <button
        className="py-2 px-4 w-1/3 text-white font-medium rounded-md shadow-2xl bg-primary hover:bg-accent transition ease-in-out duration-200"
        type="button"
        onClick={openModal}
      >
        {selectedDoctor ? "Change Doctor" : "Select Doctor"}
      </button>
      {isModalOpen && (
        <DoctorModal
          doctors={allDoctors}
          onClose={closeModal}
          onSelectDoctor={handleDoctorSelect}
        />
      )}

      {selectedDoctor && (
        <div className="flex items-center gap-4 px-6 w-2/3">
          <Image
            src={selectedDoctor?.pfp}
            alt="doctor"
            className="w-10 h-10 rounded-full"
            style={{ objectFit: "cover" }}
            width={40}
            height={40}
          />
          <div className="pl-">
            <h3 className="text-lg font-semibold">{selectedDoctor?.name}</h3>
            <p className="text-sm text-gray-500">
              {selectedDoctor?.specialization}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default SelectDoctor;
