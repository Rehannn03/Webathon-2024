import React, { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

function NextAppointment({nextUpcomingAppointment}) {
  const [timer, setTimer] = useState(null);
  const router = useRouter();

  const formatDate = (date) => {
    return new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
      new Date(date)
    );
  };

  const formatTimeRemaining = (timeRemaining) => {
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return `${days} days ${hours}h ${minutes}m ${seconds}s`;
  };

  useEffect(() => {
    if (nextUpcomingAppointment) {
      const appointmentDate = new Date(nextUpcomingAppointment.date);
      console.log("Appointment Date:", appointmentDate);
      console.log(nextUpcomingAppointment);
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
    console.log("Next Upcoming Appointment:", nextUpcomingAppointment);
  }, [nextUpcomingAppointment]);
    const handleConsultRedirect = () => {
    router.push('/consult'); // Redirect to the consult page
  };
//   {
//     "nextUpcomingAppointment": {
//         "_id": "66afc1fe496f75e119c144be",
//         "date": "2024-08-19T18:30:00.000Z",
//         "time": "12-3PM",
//         "status": "approved",
//         "day": "2",
//         "symptoms": [
//             "peshab",
//             "peep"
//         ],
//         "note": "Please join at 2PM",
//         "patient": {
//             "_id": "66aeacc0e60577b5867fa541",
//             "name": "MUbashir_02",
//             "email": "tan@gmail.com",
//             "profile": {
//                 "age": "21",
//                 "contact": "8828351676",
//                 "address": "Mira Road",
//                 "gender": "M",
//                 "city": "Mumbai",
//                 "existingDiseases": [
//                     "Astha",
//                     "LOL"
//                 ],
//                 "allergies": [
//                     "isfhdkhsd",
//                     "YES"
//                 ],
//                 "isDiabetic": "false",
//                 "isPregnant": "false",
//                 "isBP": "true"
//             },
//             "avatar": "https://res.cloudinary.com/projectbackend/image/upload/v1722794406/cpqpmt6fuuwuhgsmkgas.jpg"
//         }
//     }
// }
const profile = nextUpcomingAppointment.patient.profile;
const symptoms = nextUpcomingAppointment.symptoms;
  return (
    <div className="mb-6 p-6 bg-primary border border-black rounded-lg shadow-lg flex flex-col md:flex-row">
      <div className="mb-4 md:mb-0 w-full md:w-2/3 flex flex-col">
        <h2 className="text-2xl font-semibold mb-2 text-white">
          Your next upcoming appointment with{" "}
          {nextUpcomingAppointment.patient.name}
        </h2>
        <div className="flex flex-col gap-1 pr-20">
        <p className="text-lg text-white">
          <strong>Date:</strong> {formatDate(nextUpcomingAppointment.date)}
        </p>
        <p className="text-lg text-white">
          <strong>Time:</strong>{" "}
          {nextUpcomingAppointment.time || "Not specified"}
        </p>
        <p className="text-lg text-white">
          <strong>Your Note:</strong>{" "}
          {nextUpcomingAppointment.note || "No additional notes provided."}
        </p>
        <div className="mb-4">
          <h4 className="text-lg text-white pb-1">
            Symptoms Of The Patient
          </h4>
          <ul class="space-y-2 text-left text-white">
            {symptoms.map((symptom, index) => (
              <li
                key={index}
                className="flex items-center space-x-2 rtl:space-x-reverse"
              >
                <svg
                  class="flex-shrink-0 w-3.5 h-3.5 text-white dark:text-green-400"
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
        </div>
      </div>
      <div className="flex flex-col w-full md:w-1/3 md:flex-row items-center md:items-start">
        <div className="flex flex-col w-full items-end md:items-start mb-4 md:mb-0 md:w-1/3">
          <img
            src={nextUpcomingAppointment.patient.avatar}    
            alt={nextUpcomingAppointment.patient.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="text-white text-center md:text-left">
            <p className="text-lg font-medium">
              {nextUpcomingAppointment.patient.name}
            </p>
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
  );
}

export default NextAppointment;
