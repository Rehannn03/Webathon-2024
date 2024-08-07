import React from "react";
import Image from "next/image";
import { Input } from "../ui/input";
import { BsCloudSunFill, BsFillSunFill, BsSun } from "react-icons/bs";
import { IoCloudyNight } from "react-icons/io5"
import { FaPrescriptionBottle } from "react-icons/fa";
import { useState } from "react";
import Prescription from "./Prescription";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";
import apiClient from "@/api-client/apiClient";


function ConsultationModal(
    {isOpen, toggleModal, doctor, appointment, getAllAppointments}
) {
    const [diagnosis, setDiagnosis] = useState(""); 
    const [followUp, setFollowUp] = useState("");
    const [symptoms, setSymptoms] = useState(appointment.symptoms);
    const {toast} = useToast();
    const [prescriptions, setPrescriptions] = useState([{
        medicine:'',
        morning:0,
        afternoon:0,
        night:0,
        notes:''
    }]);

    const clearForm = () => {
        setDiagnosis("");
        setFollowUp("");
        
        setPrescriptions([{
            medicine:'',
            morning:0,
            afternoon:0,
            night:0,
            notes:''
        }]);
    };

    const validateForm = () => {
        if (!diagnosis) {
            toast({
                title: "Error",
                description: "Please enter a diagnosis",
                variant: "destructive"
            });
            return false;
        } else if (prescriptions[0].medicine === "") {
            toast({
                title: "Error",
                description: "Please enter a prescription",
                variant: "destructive"
            });
            return false;
        } else if (!followUp) {
            toast({
                title: "Error",
                description: "Please enter a follow up",
                variant: "destructive"
            });
            return false;
        }
        return true;
    };



    const submitConsultation = async () => {

        if (!validateForm()) return;    
        const body = {
            appointmentId: appointment._id,
            diagnosis,
            followUp,
            symptoms,
            prescription: prescriptions
        };
        const response = await apiClient.post("/doctors/fillConsultation", body);
        if (response.status === 201) {
            toast({
                title: "Success",
                description: response.data.message,
                variant: "success"
            });
            
            clearForm();
            await getAllAppointments();
        } else {
            toast({
                title: "Error",
                description: response.data.message,
                variant: "destructive"
            });
        }
        toggleModal();
    };


    console.log("Doctor:", doctor);
    console.log("Appointment:", appointment);
    return (
        <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ${isOpen ? "" : "hidden"}`}>
            <div className="bg-white rounded-xl p-6 w-[90%] md:w-2/3 mx-4 max-h-[90vh] overflow-y-auto shadow-lg">
                <div className="flex flex-row justify-between">
                    <h2 className="text-xl font-semibold">Fill A Consultaion Form </h2> 
                    <button
                        onClick={toggleModal}
                        className="text-2xl font-semibold text-gray-500"
                    >
                        &times;
                    </button>
                </div>
                <div className="flex flex-col pt-6">
                    <div className="flex">
                    <h4 className="text-lg text-gray-500">Patient Details</h4>
                    </div>

                    <div className="flex gap-4">
                    <Image
                        src={appointment.patient.avatar}
                        alt={appointment.patient.name}  
                        width={50}
                        height={50}
                        className="rounded-full h-12 w-12 object-cover ring-primary ring-1"
                    />
                    <div className="flex flex-col mr-2">
                        <h3 className="font-medium text-lg">{appointment.patient.name}</h3> 
                        <div className="flex gap-1">
                        <p className="text-sm text-gray-500">{appointment.patient.profile.age}</p>
                        <p className="text-sm text-gray-500">
                        {appointment.patient.profile.gender === "M" ? "Male" : "Female"}
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                 <div className="mb-4 mt-2">
                <h4 className="text-lg text-gray-500 pb-1">Symptoms Of The Patient</h4>
                <ul className="space-y-2 text-left text-gray-500">
                {appointment.symptoms.map((symptom, index) => (
                    <li
                    key={index}
                    className="flex items-center space-x-2 rtl:space-x-reverse"
                    >
                    <svg
                        className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 16 12"
                    >
                        <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5.917 5.724 10.5 15 1.5"
                        />
                    </svg>
                    <span>{symptom}</span>
                    </li>
                ))}
                </ul>
                <h2 className="text-lg font-semibold mt-2 text-gray-800">Write A Diagnosis Report </h2>
                <textarea
                    name="diagnosis"
                    rows = {4}  
                    value={diagnosis}
                    onChange={(e) => setDiagnosis(e.target.value)}
                    placeholder="E.G Patient is suffering from fever"
                    className="w-full p-2 border border-gray-200 rounded-lg hover:border-accent focus:border-primary focus:outline-none"
                />
            </div>
            <div className="mb-4 flex flex-row gap-3">
            <FaPrescriptionBottle className="w-6 h-6 text-gray-500" />
            <h2 className="text-lg font-semibold text-gray-800">Prescriptions</h2>
            </div>
            <div className="flex flex-col gap-4">
            <Prescription prescriptions={prescriptions} setPrescriptions={setPrescriptions} />
            </div>
            <div className="my-4">
            <h4 className="text-lg text-gray-500 pb-1">Follow Up</h4>
            <Input 
                type="text"
                placeholder="E.G Next appointment after 3 days"
                value={followUp}
                onChange={(e) => setFollowUp(e.target.value)}
            />            
            </div>
            <div className="flex justify-end mt-2">
                <Button onClick={submitConsultation}
                        variant="default"
                        size="lg"
                        className="text-white"
                >Submit Consultation</Button>
            </div>
            </div>
        </div>
    );  
}

export default ConsultationModal;
