'use client'

import React, { useEffect, useState } from 'react'
import { useUserStore } from '@/stores/store'
import { fetchAndSetUserStore } from '@/lib/fetchAndSetUserStore'
import { useToast } from '@/components/ui/use-toast'
import apiClient from '@/api-client/apiClient'
import { useRouter } from 'next/navigation'; // Import the useRouter hook
import Image from 'next/image'
import loader from "/public/loader.svg";

const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(new Date(date));
};

const formatTimeRemaining = (timeRemaining) => {
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
  return `${days} days ${hours}h ${minutes}m ${seconds}s`;
};

const AppointmentsList = () => {
  const { user, update } = useUserStore();
  const { toast } = useToast();
  const [allAppointments, setAllAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nextUpcomingAppointment, setNextUpcomingAppointment] = useState(null);
  const [timer, setTimer] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      fetchAndSetUserStore(update);
    }
  }, [user, update]);

  useEffect(() => {
    if (nextUpcomingAppointment) {
      const appointmentDate = new Date(nextUpcomingAppointment.date);
      console.log('Appointment Date:', appointmentDate);
      console.log(nextUpcomingAppointment)
      const updateTimer = () => {
        const now = new Date().getTime();
        const timeRemaining = appointmentDate - now;

        if (timeRemaining <= 0) {
          clearInterval(timer);
          setTimer(null);
        } else {
          setTimer(timeRemaining);
        }
      };

      updateTimer(); // Initial call
      const intervalId = setInterval(updateTimer, 1000); // Update every second

      return () => clearInterval(intervalId); // Cleanup on component unmount
    }
  }, [nextUpcomingAppointment]);

  const getAllAppointment = async () => {
    console.log('Getting all appointments');
    if (!user) return;
    setLoading(true);

    try {
      const response = await apiClient.get('/patients/viewAppointments');
      console.log('API Response:', response);

      if (response.status === 200) {
        const appointments = response.data.data.appointments;
        console.log('Appointments:', appointments);
        if (Array.isArray(appointments)) {
          const sortedAppointments = [...appointments].sort((a, b) => new Date(a.date) - new Date(b.date));

          console.log('Sorted Appointments:', sortedAppointments);
          
          // Find the next upcoming appointment with status 'Accepted'
          let foundAcceptedAppt = null;
          for (const appt of sortedAppointments) {
            if (new Date(appt.date) > new Date() && appt.status === 'approved') {
              foundAcceptedAppt = appt;
              break;
            }
          }

          if (foundAcceptedAppt) {
            setNextUpcomingAppointment(foundAcceptedAppt);
          }

          setAllAppointments(sortedAppointments);
        } else {
          console.error('Appointments key is not an array or missing');
        }
      } else {
        toast({
          title: 'Error',
          description: response.data.message,
          variant: 'destructive',
        });
      }
    } catch (error) {
      console.error('Error fetching appointments:', error);
      toast({
        title: 'Error',
        description: 'Failed to fetch appointments',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      getAllAppointment();
    }
  }, [user]);

  const handleConsultRedirect = () => {
    router.push('/consult'); // Redirect to the consult page
  };

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Upcoming Appointments</h1>
{

      loading ? (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image src={loader} alt="Loading" width={50} height={50} />
        </div>
      ) :
       <>
        {nextUpcomingAppointment && (
        <div className="mb-6 p-6 bg-primary border border-black rounded-lg shadow-lg flex flex-col md:flex-row">
          <div className="mb-4 md:mb-0 w-full md:w-2/3 flex flex-col">
            <h2 className="text-2xl font-semibold mb-2 text-white">
              Your next upcoming appointment with {nextUpcomingAppointment.doctor.user.name}!
            </h2>
            <p className="text-lg text-white"><strong>Date:</strong> {formatDate(nextUpcomingAppointment.date)}</p>
            <p className="text-lg text-white"><strong>Time:</strong> {nextUpcomingAppointment.time || 'Not specified'}</p>
            <p className="text-lg text-white"><strong>Doctor's Note:</strong> {nextUpcomingAppointment.details || 'No additional notes provided.'}</p>
            <p className="text-lg text-white"><strong>Symptoms:</strong></p>
            <ul className="list-disc pl-6 text-white">
              {nextUpcomingAppointment.symptoms && nextUpcomingAppointment.symptoms.length > 0 ? (
                nextUpcomingAppointment.symptoms.map((symptom, index) => (
                  <li key={index}>{symptom}</li>
                ))
              ) : (
                <li>No symptoms provided</li>
              )}
            </ul>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="flex flex-col items-center md:items-start mb-4 md:mb-0 md:w-1/3">
              <Image
                src={nextUpcomingAppointment.doctor.user.avatar}
                alt={nextUpcomingAppointment.doctor.user.name}
                className="w-16 h-16 rounded-full object-cover"
                width={64}
                height={64}
              />
              <div className="text-white text-center md:text-left">
                <p className="text-lg font-medium">{nextUpcomingAppointment.doctor.user.name}</p>
                <p>Specialization: {nextUpcomingAppointment.doctor.specialization}</p>
                <p>Qualification: {nextUpcomingAppointment.doctor.qualification}</p>
                <p>Experience: {nextUpcomingAppointment.doctor.experience} years</p>
                <p>Fee: ${nextUpcomingAppointment.doctor.consultationFee}</p>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end ml-auto md:ml-6">
              {timer !== null ? (
                <div className="text-white text-center md:text-right mb-4">
                  <p>Time remaining: {formatTimeRemaining(timer)}</p>
                  {timer <= 0 && (
                    <button
                      onClick={handleConsultRedirect}
                      className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                    >
                      Go to Consult
                    </button>
                  )}
                </div>
              ) : (
                <p className="text-white">The appointment time has passed.</p>
              )}
            </div>
          </div>
        </div>
      )
      }

      <div className="space-y-4">
        {allAppointments.filter((appt) => appt !== nextUpcomingAppointment).map((appointment) => (
          <div key={appointment.id} className="p-4 bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2">{formatDate(appointment.date)}</h3>
            <p className="text-gray-700"><strong>Time:</strong> {appointment.time || 'Not specified'}</p>
            <p className="text-gray-700"><strong>Doctor's Note:</strong> {appointment.details || 'No additional notes provided.'}</p>
            <p className="text-gray-700"><strong>Symptoms:</strong></p>
            <ul className="list-disc pl-6 text-gray-700">
              {appointment.symptoms && appointment.symptoms.length > 0 ? (
                appointment.symptoms.map((symptom, index) => (
                  <li key={index}>{symptom}</li>
                ))
              ) : (
                <li>No symptoms provided</li>
              )}
            </ul>
            {appointment.status && (
              <span
                className={`py-1 px-3 text-xs rounded-full ${
                  appointment.status === 'pending'
                    ? 'bg-yellow-200 text-yellow-600'
                    : appointment.status === 'approved'
                    ? 'bg-green-200 text-green-600'
                    : appointment.status === 'rejected'
                    ? 'bg-red-200 text-red-600'
                    : appointment.status === 'active'
                    ? 'bg-blue-200 text-blue-600'
                    : appointment.status === 'completed'
                    ? 'bg-purple-200 text-purple-600'
                    : ''
                }`}
              >
                {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
              </span>
            )}
            <div className="mt-4 flex items-center">
              <Image
                src={appointment.doctor.user.avatar}
                alt={appointment.doctor.user.name}
                width={64}
                height={64}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <p className="text-lg font-medium">{appointment.doctor.user.name}</p>
                <p className="text-gray-600">Specialization: {appointment.doctor.specialization}</p>
                <p className="text-gray-600">Qualification: {appointment.doctor.qualification}</p>
                <p className="text-gray-600">Experience: {appointment.doctor.experience} years</p>
                <p className="text-gray-600">Fee: ${appointment.doctor.consultationFee}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </>
    }
    </div>
  );
};

export default AppointmentsList;
