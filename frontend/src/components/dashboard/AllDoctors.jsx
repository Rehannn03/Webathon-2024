import React, { useState, useEffect } from "react";
import apiClient from "@/api-client/apiClient";
import { MdVerified } from "react-icons/md";
import {
  FaBriefcase,
  FaUserMd,
  FaGraduationCap,
  FaFileAlt,
  FaDollarSign,
} from "react-icons/fa";

const AllDoctors = ({ allDoctors, refreshDoctors }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [approvingDoctorId, setApprovingDoctorId] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const handleApprove = async (doctorId) => {
    setApprovingDoctorId(doctorId);
    try {
      const response = await apiClient.post("/admin/verify-doctor", {
        doctorId,
      });
      if (response.status === 200) {
      
        setApprovingDoctorId(doctorId);
      }
    } catch (error) {
      console.error("Failed to approve doctor:", error);
    }
  };

  useEffect(() => {
    if (approvingDoctorId) {
      
      refreshDoctors();
      setApprovingDoctorId(null);
    }
  }, [approvingDoctorId, refreshDoctors]);

  return (
    <div className="my-10 mx-10">
      {allDoctors.map((doctor) => (
        <div
          key={doctor._id}
          className="rounded-lg bg-white p-6 shadow-lg mb-6"
        >
          <div className="mb-4 flex items-center">
            <img
              className="mr-4 h-20 w-20 rounded-full border border-gray-200 object-cover"
              src={doctor.profile.avatar}
              alt={doctor.profile.name}
            />
            <div>
              <h3 className="text-xl font-semibold">{doctor.profile.name}</h3>
              <p className="text-sm text-gray-500">{doctor.profile.email}</p>
              <div className="flex items-center">
                <MdVerified
                  className={
                    doctor.verified ? "text-green-500" : "text-red-500"
                  }
                />
                <p
                  className={`text-sm font-bold ${
                    doctor.verified ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {doctor.verified ? "Verified" : "Not Verified"}
                </p>
              </div>
            </div>
          </div>
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center">
              <FaBriefcase className="text-gray-500" />
              <span className="ml-2 text-sm text-gray-500">Experience:</span>
            </div>
            <span className="text-sm">{doctor.experience} years</span>
          </div>
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center">
              <FaUserMd className="text-gray-500" />
              <span className="ml-2 text-sm text-gray-500">
                Specialization:
              </span>
            </div>
            <span className="text-sm">{doctor.specialization}</span>
          </div>
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center">
              <FaGraduationCap className="text-gray-500" />
              <span className="ml-2 text-sm text-gray-500">
                Qualifications:
              </span>
            </div>
            <span className="text-sm">{doctor.qualification}</span>
          </div>
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center">
              <FaFileAlt className="text-gray-500" />
              <span className="ml-2 text-sm text-gray-500">Documents:</span>
            </div>
            <button
              className="text-sm text-blue-500 hover:underline"
              onClick={() => openModal(doctor.degree)}
            >
              View docs
            </button>
          </div>
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center">
              <FaDollarSign className="text-gray-500" />
              <span className="ml-2 text-sm text-gray-500">Consultations:</span>
            </div>
            <span className="text-sm">${doctor.consultationFee}</span>
          </div>

          <div className="flex justify-end space-x-2">
            {!doctor.verified && (
              <button
                className="flex items-center justify-center w-1/3 rounded-lg bg-green-500 py-2 text-white text-sm font-semibold transition duration-200 hover:bg-green-600"
                onClick={() => handleApprove(doctor._id)}
                disabled={approvingDoctorId === doctor._id}
              >
                {approvingDoctorId === doctor._id ? (
                  <span>Approving...</span>
                ) : (
                  <span>Approve</span>
                )}
              </button>
            )}
            <a
              className="flex items-center justify-center w-1/3 rounded-lg bg-red-700 py-2 text-white text-sm font-semibold transition duration-200 hover:bg-red-800"
              href="#"
            >
              <span>Delete</span>
            </a>
          </div>

          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
              <div className="bg-white p-4 rounded-lg shadow-lg max-w-sm mx-auto">
                <img
                  src={selectedImage}
                  alt="Document"
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
  );
};

export default AllDoctors;
