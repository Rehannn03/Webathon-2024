import { BsCloudSunFill, BsFillSunFill } from 'react-icons/bs';
import { IoCloudyNight } from 'react-icons/io5';
import { FaPlus } from 'react-icons/fa';
import { useEffect } from 'react';
import { FaMinus } from "react-icons/fa";

function Prescription({ prescriptions, setPrescriptions }) {
    const timeOptions = [
        {
            icon: BsCloudSunFill,
            name: "Morning",
            value: "morning"
        },
        {
            icon: BsFillSunFill,
            name: "Afternoon",
            value: "afternoon"
        },
        {
            icon: IoCloudyNight,
            name: "Night",
            value: "night"
        },
    ];

    const addOneMoreEmptyPrescription = () => {
        setPrescriptions([...prescriptions, { medicine: "", morning: 0, afternoon: 0, night: 0, notes: "" }]);
    };

    useEffect(() => {
        console.log("Prescriptions:", prescriptions);
    }, [prescriptions]);

    return (
        <div className='bg-accent/50 p-4 rounded-lg'>
            <div className="flex flex-col gap-4">
                <h4 className="text-lg text-gray-500">Prescription</h4>
                {prescriptions.map((prescription, prescriptionIndex) => (
                    <div key={prescriptionIndex} className="flex flex-col lg:flex-row lg:items-center gap-4 justify-between">
                        <div className=" align-top  flex flex-col md:flex-row gap-2 w-full md:w-3/4">
                            <div className="flex flex-col md:flex-row gap-2 items-center w-full">
                                <label className="text-gray-500">Medicine Name</label>
                                <input
                                    type="text"
                                    className="border border-gray-200 rounded-lg p-2 w-full"
                                    value={prescription.medicine}
                                    onChange={(e) => {
                                        const newPrescriptions = [...prescriptions];
                                        newPrescriptions[prescriptionIndex].medicine = e.target.value;
                                        setPrescriptions(newPrescriptions);
                                    }}
                                />
                            </div>
                            <div className="flex flex-col md:flex-row gap-2 items-center w-full">
                                <label className="text-gray-500">Notes</label>
                                <input
                                    type="text"
                                    className="border border-gray-200 rounded-lg p-2 w-full"
                                    value={prescription.notes}
                                    onChange={(e) => {
                                        const newPrescriptions = [...prescriptions];
                                        newPrescriptions[prescriptionIndex].notes = e.target.value;
                                        setPrescriptions(newPrescriptions);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="flex flex-row md:flex-col w-full md:w-1/4 gap-2 items-center md:items-end justify-end">
                            <div className="flex gap-2 items-center">
                                {timeOptions.map((timeOption, timeIndex) => (
                                    <div
                                        key={timeIndex}
                                        className={`flex flex-col items-center cursor-pointer ${prescription[timeOption.value] === 1 ? "" : "opacity-30"}`}
                                        onClick={() => {
                                            const newPrescriptions = [...prescriptions];
                                            newPrescriptions[prescriptionIndex][timeOption.value] = newPrescriptions[prescriptionIndex][timeOption.value] === 0 ? 1 : 0;
                                            setPrescriptions(newPrescriptions);
                                        }}
                                    >
                                        <timeOption.icon size="2em" color="#90a9b0" className="mb-1" />
                                        <p>{timeOption.name}</p>
                                    </div>
                                ))}
                            </div>
                            {prescriptionIndex !== prescriptions.length - 1 && (
                                <button className='bg-red-500 text-white py-2 px-2 rounded-full' onClick={() => {
                                    const newPrescriptions = prescriptions.filter((_, index) => index !== prescriptionIndex);
                                    setPrescriptions(newPrescriptions);
                                }}>
                                    <FaMinus />
                                </button>
                            )}
                            {prescriptionIndex === prescriptions.length - 1 && (
                                <button className="bg-primary text-white py-2 px-2 rounded-full" onClick={addOneMoreEmptyPrescription}>
                                    <FaPlus />
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Prescription;
