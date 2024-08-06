import Image from "next/image";
import { useState } from "react";
import {
  MdAttachMoney,
  MdEqualizer,
  MdHistory,
  MdOutlineEqualizer,
  MdOutlineStar,
  MdOutlineStars,
} from "react-icons/md";
import { MdClose } from "react-icons/md";
import { FiCalendar } from "react-icons/fi";
import { MdPregnantWoman } from "react-icons/md";
import { BiInjection } from "react-icons/bi";
import { FaHeartbeat } from "react-icons/fa";
import { cn } from "@/lib/utils";
import apiClient from "@/api-client/apiClient";
import { useToast } from "../ui/use-toast";
import { on } from "events";
const AppointmentModal = ({ appointment, onClose, getAllAppointment }) => {
  //     {
  //     "_id": "66af6783f884762cfa296ebd",
  //     "date": "2024-08-05T18:30:00.000Z",
  //     "time": "3-6PM",
  //     "status": "pending",
  //     "day": "2",
  //     "symptoms": [
  //         "Cough",
  //         "Cold",
  //         "Fever"
  //     ],
  //     "patient": {
  //         "_id": "66a380a720df8be3620b8437",
  //         "name": "Rehan",
  //         "email": "rehan@gmail.com",
  //         "profile": {
  //             "age": "40",
  //             "contact": "9876543219",
  //             "address": "Powai",
  //             "gender": "M",
  //             "city": "Mumbai"
  //         }
  //     }
  // },

  const { date, time, status, day, symptoms, patient } = appointment;
  const formattedDate = new Date(date);
  const dayName =
    formattedDate.toLocaleDateString(undefined, { weekday: "long" }) + ",";
  const monthDay = formattedDate.toLocaleDateString(undefined, {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const avatar =
    patient.avatar ||
    "https://res.cloudinary.com/projectbackend/image/upload/v1722080184/mxu2ofc6hfors31aniwz.jpg";
  const name = patient.name;
  const profile = patient.profile;
  const [note, setNote] = useState(appointment.note || "");
  const [accept, setAccept] = useState(false);
  const [reject, setReject] = useState(false);
  const { toast } = useToast();

  const onAccept = async () => {
    if (note === "") {
      toast({
        title: "Error",
        description: "Note is required for accepting appointments",
        variant: "destructive",
      });
      return;
    }
    const data = {
      appointmentId: appointment._id,
      status: "approved",
      note,
    };
    const response = await apiClient.patch("/doctors/updateAppointment", data);
    if (response.status === 200) {
      toast({
        title: "Success",
        description: "Appointment has been accepted",
        variant: "success",
      });
      setAccept(true);
    } else {
      toast({
        title: "Error",
        description: "Something went wrong",
        variant: "destructive",
      });
    }
    getAllAppointment();
    onClose();
    
  };

  const onReject = async () => {
    if (note === "") {
      toast({
        title: "Error",
        description: "Note is required for rejecting appointments",
        variant: "destructive",
      });
      return;
    }
    const data = {
      appointmentId: appointment._id,
      status: "rejected",
      note,
    };
    const response = await apiClient.patch("/doctors/updateAppointment", data);
    if (response.status === 200) {
      toast({
        title: "Success",
        description: "Appointment has been rejected",
        variant: "success",
      });
      setReject(true);
      getAllAppointment();
    } else {
      toast({
        title: "Error",
        description: "Something went wrong",
        variant: "destructive",
      });
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-xl p-6 w-[90%] md:w-2/3 mx-4 max-h-[90vh] overflow-y-auto shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            {" "}
            {appointment.patient.name}'s Appointment
          </h2>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            <MdClose />
          </button>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span
            className={`py-1 px-3 text-xs rounded-full ${
              status === "pending"
                ? "bg-yellow-200 text-yellow-600"
                : status === "approved"
                ? "bg-green-200 text-green-600"
                : "bg-red-200 text-red-600"
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>

          <span className="text-lg font-bold">{time}</span>
        </div>

        <div className="flex items-center mb-2">
          <FiCalendar className="h-6 w-6 text-gray-500 mr-2" />
          <div className="flex flex-row gap-1">
            <h4 className="text-lg text-gray-500">{dayName}</h4>
            <span className="text-lg font-medium">{monthDay}</span>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-lg text-gray-500 pb-1">
            Symptoms Of The Patient
          </h4>
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
                <span>{symptom}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src={avatar}
            alt={name}
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <h3 className="text-lg font-semibold">{name}</h3>
          <span className="text-sm text-gray-500">
            {profile.gender}
            {", "}
            {profile.age} years
          </span>
        </div>
        {/* // add year gender city */}
        {/* existingDiseases:[],
            allergies:[],
            isDiabetic:bool,
            isPregnant:bool,
            isBP:bool */}
        <div className="flex flex-row justify-between">
          <h3 className="text-lg font-semibold mt-4">Medical History</h3>
          <div className="flex flex-row gap-4">
            <div className="flex flex-col gap-2 text-center items-center">
              <FaHeartbeat
                className={cn(
                  "w-6 h-6 ",
                  profile.isBP === "true" ? "text-green-500" : "text-gray-200"
                )}
              />
              <p className="text-sm text-gray-500">Blood Pressure</p>
            </div>
            <div className="flex flex-col gap-2 text-center items-center">
              <MdPregnantWoman
                className={cn(
                  "w-6 h-6 ",
                  profile.isPregnant === "true"
                    ? "text-green-500"
                    : "text-gray-200"
                )}
              />
              <p className="text-sm text-gray-500">Pregnant</p>
            </div>
            <div className="flex flex-col gap-2 text-center items-center">
              <BiInjection
                className={cn(
                  "w-6 h-6 ",
                  profile.isDiabetic === "true"
                    ? "text-green-500"
                    : "text-gray-200"
                )}
              />
              <p className="text-sm text-gray-500">Diabetic</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-4">
          <div className="flex flex-row justify-between items-center">
            <h3 className="text-lg font-semibold">Existing Diseases</h3>
            <div className="flex gap-2">
              {profile.existingDiseases.map((disease, index) => (
                <span
                  key={index}
                  className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full"
                >
                  {disease}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-row justify-between items-center">
            <h3 className="text-lg font-semibold">Allergies</h3>
            <div className="flex gap-2">
              {profile.allergies.map((allergy, index) => (
                <span
                  key={index}
                  className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full"
                >
                  {allergy}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-4">
              <h3 className="text-lg font-semibold">Notes</h3>
              <textarea
                className="w-full p-2 border border-gray-200 rounded-lg hover:border-accent focus:border-primary focus:outline-none"
                placeholder="Add notes here..."
                value={note}
                rows={5}
                onChange={(e) => setNote(e.target.value)}
                disabled = {status === "pending" ? false : true}
              ></textarea>
            </div>
        {status == "pending" && (
          <>
            
            <div className="flex justify-end mt-4 gap-4">
              <button
                className="py-2 px-4 w-1/2 md:w-1/4 text-white font-medium rounded-md shadow-2xl bg-red-500 hover:bg-red-600 transition ease-in-out duration-200"
                type="button"
                onClick={onReject}
              >
                Reject
              </button>
              <button
                className="py-2 px-4 w-1/2 md:w-1/4 text-white font-medium rounded-md shadow-2xl bg-primary hover:bg-accent transition ease-in-out duration-200"
                type="button"
                onClick={onAccept}
              >
                Accept
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AppointmentModal;
