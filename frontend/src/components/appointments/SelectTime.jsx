import React from "react";
import { BsCloudSunFill, BsFillSunFill, BsSun } from "react-icons/bs";
import { IoCloudyNight } from "react-icons/io5";

function SelectTime({ timeSlots, selectedTime, setSelectedTime }) {
  const timeOptions = [
    {
      icon: BsCloudSunFill,
      time: "9-12PM",
      name: "Morning",
    },
    {
      icon: BsFillSunFill,
      time: "12-3PM",
      name: "Afternoon",
    },
    {
      icon: BsSun,
      time: "3-6PM",
      name: "Evening",
    },
    {
      icon: IoCloudyNight,
      time: "6-9PM",
      name: "Night",
    },
  ];
  return (
    <div className="flex flex-col">
        <p className="text-sm font-semibold"> Select A Time Slot</p>
      <div className="flex justify-between w-full mt-4 mx-4">
        {timeOptions.map((el) => {
          const Icon = el.icon;
          return (
            <div
              className={`flex flex-col items-center cursor-pointer ${
                el.time !== selectedTime ? "opacity-50" : ""
              }`}
              onClick={() => {
                setSelectedTime(el.time);
              }}
            >
              <Icon size="2em" color="#90a9b0" className="mb-1" />
              <p>{el.time}</p>
              <p className="text-sm text-primary font-bold">{el.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SelectTime;
