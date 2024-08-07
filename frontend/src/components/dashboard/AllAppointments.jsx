import React from "react";
import { FaCalendarDay, FaClock, FaUserMd, FaUser } from "react-icons/fa";

const Appointments = ({ allAppt }) => {
  return (
    <div className="my-10 mx-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {allAppt.map((appointment) => (
          <div
            key={appointment._id}
            className="flex flex-col bg-white p-4 rounded-lg shadow-lg"
          >
            {/* Doctor Info */}
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0">
                <FaUserMd className="text-blue-500 h-12 w-12" />
              </div>
              <div className="flex items-center ml-4">
                <img
                  className="h-16 w-16 rounded-full border border-gray-200 object-cover"
                  src={appointment.doctorInfo.avatar}
                  alt={appointment.doctorInfo.name}
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">{appointment.doctorInfo.name}</h3>
                  <p className="text-sm text-gray-500">{appointment.doctorInfo.email}</p>
                </div>
              </div>
            </div>
            
            {/* Patient Info */}
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0">
                <FaUser className="text-green-500 h-12 w-12" />
              </div>
              <div className="flex items-center ml-4">
                <img
                  className="h-16 w-16 rounded-full border border-gray-200 object-cover"
                  src={appointment.patient.avatar}
                  alt={appointment.patient.name}
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">{appointment.patient.name}</h3>
                  <p className="text-sm text-gray-500">{appointment.patient.email}</p>
                </div>
              </div>
            </div>
            
            {/* Appointment Details */}
            <div className="flex items-center mb-2">
              <FaCalendarDay className="text-gray-500 h-5 w-5" />
              <span className="ml-2 text-sm text-gray-500">Date:</span>
              <span className="ml-2 text-sm">{new Date(appointment.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center mb-2">
              <FaClock className="text-gray-500 h-5 w-5" />
              <span className="ml-2 text-sm text-gray-500">Time:</span>
              <span className="ml-2 text-sm">{appointment.time}</span>
            </div>
            <div className="flex items-center">
              <span
                className={`px-2 py-1 rounded text-white ${
                  appointment.status === "pending"
                    ? "bg-yellow-500"
                    : appointment.status === "completed"
                    ? "bg-green-500"
                    : "bg-red-500"
                }`}
              >
                {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appointments;
