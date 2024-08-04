import { FiCalendar } from "react-icons/fi";
import Image from "next/image";
import AppointmentModal from "./AppointmentModal";
import { useState } from "react";

const AppointmentCard = ({appointment, getAllAppointment}) => {
    //  {
    //             "_id": "66aec03c2d9103b892acb744",
    //             "date": "2024-08-12T18:30:00.000Z",
    //             "time": "12-3PM",
    //             "status": "pending",
    //             "day": "2",
    //             "symptoms": [
    //                 "test"
    //             ],
    //             "doctor": {
    //                 "specialization": "Cardiologist",
    //                 "experience": 12,
    //                 "qualification": "M.B.B.S MD DM",
    //                 "consultationFee": 500,
    //                 "user": {
    //                     "name": "Rehan",
    //                     "avatar": "https://res.cloudinary.com/projectbackend/image/upload/v1722080184/mxu2ofc6hfors31aniwz.jpg"
    //                 }
    //             }
    //         },
    const [isModalOpen, setIsModalOpen] = useState(false);
 const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
    const { date, time, status, symptoms, patient } = appointment
    const formattedDate = new Date(date);
    const day = formattedDate.toLocaleDateString(undefined, { weekday: 'long' }) + ','
    const monthDay = formattedDate.toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })
    const avatar = patient.avatar || 'https://res.cloudinary.com/projectbackend/image/upload/v1722080184/mxu2ofc6hfors31aniwz.jpg';
    const name = patient.name;
    const profile = patient.profile;

    const onSubmit = async (data) => {  
      console.log(data);
    }

  return (
    <div className="w-full bg-white shadow-lg rounded-lg p-8   mt-6">
      <div className="flex justify-between items-center mb-2">
        <span className={`py-1 px-3 text-xs rounded-full ${status === "pending" ? "bg-yellow-200 text-yellow-600" : status === "approved" ? "bg-green-200 text-green-600" : "bg-red-200 text-red-600"}`}>   
            {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
        <span className="text-lg font-bold">{time}</span>
      </div>

      <div className="flex items-center mb-2">
        <FiCalendar className="h-6 w-6 text-gray-500 mr-2" />
        <div className="flex flex-row gap-1">
          <h4 className="text-lg text-gray-500">{day}</h4>
          <span className="text-lg font-medium">{monthDay}</span>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="text-lg text-gray-500 pb-1">Symptoms Of The Patient</h4>
        <ul class="space-y-2 text-left text-gray-500">
          {symptoms.map((symptom, index) => (
            <li
              key={index}
              className="flex items-center space-x-2 rtl:space-x-reverse"
            >
              <svg
                class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span >
              {symptom}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-between">
        <div className="flex">
          <h4 className="text-lg text-gray-500">Patient Details</h4>
        </div>

        <div className="flex">
          <div className="text-right mr-2">
            <h3 className="font-medium text-lg">{name}</h3>
            <p className="text-sm text-gray-500">{profile.age} years</p>
            <p className="text-sm text-gray-500">{profile.gender === 'M' ? "Male" : "Female"} </p>

          </div>
          <Image
            src={avatar}
            alt={name}
            width={50}
            height={50}
            className="rounded-full h-12 w-12 object-cover ring-primary ring-1"
          />
        </div>

 
      </div>
      <div className="flex justify-end mt-4">
        <button className="text-primary font-medium"
          onClick={openModal}
        >View Details</button>
      </div>
      {
        isModalOpen && (
          <AppointmentModal appointment={appointment} onClose={closeModal} getAllAppointment={getAllAppointment} />
        )
      }
    </div>
  );
};


export default AppointmentCard;