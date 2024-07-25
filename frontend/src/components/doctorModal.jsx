"use client";
import Image from "next/image";
// TODO: CONVERGE THIS FILE INTO COMPONENTS
// AS THIS FILE IS SUPPOSED TO BE A COMPONENT, ONLY HERE JUST FOR TESTING AND VIEWING
import { useState } from "react";

const doctorModal = ({ doctors, onClose, onSelectDoctor }) => {
  // First argument is the state variable, second is the function to update the state
  // Need to pass the doctor object to the parent component ???

  const handleDoctorSelect = (doctor) => {
    onSelectDoctor(doctor);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-[#E9ECF8] rounded-xl p-6 w-full max-w-lg mx-4 max-h-[80vh] overflow-y-auto shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">Select a Doctor</h2>
          <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
            &times;
          </button>
        </div>
        <ul>
          {doctors.map((doctor, index) => (
            <li
              key={index}
              className="flex items-center p-4 mb-2 border rounded-lg cursor-pointer hover:bg-[#7A5CFA] transition"
              onClick={() => handleDoctorSelect(doctor)}
            >
              <Image
                src={doctor.pfp}
                alt={doctor.name}
                width={48}
                height={48}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-800">{doctor.name}</h3>
                <p className="text-sm text-gray-700 font-medium">Specialization: {doctor.specialization}</p>
                <p className="text-sm text-gray-700 font-medium">Experience: {doctor.experience} years</p>
                <p className="text-sm text-gray-700 font-medium">Qualification: {doctor.qualification}</p>
                <p className="text-sm text-gray-700 font-medium">Consultation Fee: ${doctor.consultationFee}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default doctorModal;
