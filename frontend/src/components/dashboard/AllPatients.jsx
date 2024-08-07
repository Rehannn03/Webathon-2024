import React, { useState } from "react";
import { FaCalendarAlt, FaTransgender } from "react-icons/fa";

const Patients = ({ allPatients }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="my-10 mx-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {allPatients.map((patient) => (
          <div
            key={patient._id}
            className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg h-80 w-80"
          >
            <div className="flex-shrink-0 mb-4">
              <img
                className="h-24 w-24 rounded-full border border-gray-200 object-cover"
                src={patient.avatar} // Ensure you have avatar or remove this line if not needed
                alt={patient.name}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{patient.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{patient.email}</p>
            <div className="flex items-center mb-2">
              <FaCalendarAlt className="text-gray-500" />
              <span className="ml-2 text-sm text-gray-500">Age:</span>
              <span className="ml-2 text-sm">{patient.profile.age}</span>
            </div>
            <div className="flex items-center">
              <FaTransgender className="text-gray-500" />
              <span className="ml-2 text-sm text-gray-500">Gender:</span>
              <span className="ml-2 text-sm">
                {patient.profile.gender === 'M' ? 'Male' : 'Female'}
              </span>
            </div>
            {isModalOpen && (
              <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                <div className="bg-white p-4 rounded-lg shadow-lg max-w-sm mx-auto">
                  <img
                    src={selectedImage}
                    alt="Patient"
                    className="w-full h-auto"
                  />
                  <button
                    className="mt-4 bg-gray-500 text-white py-2 px-4 rounded"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Patients;
