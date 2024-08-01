"use client";

import useConsult from "@/stores/useConsult";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { SquareActivity } from "lucide-react";

export default function Home() {
  const { fullName, setFullName } = useConsult();
  const [roomID, setRoomID] = useState("");
  const router = useRouter();

  useEffect(() => {
    setFullName("");
  }, []);
  return (
    <div className="w-full min-h-screen bg-gray-800 text-white flex flex-col items-center justify-center">
      <div className="max-w-screen-lg px-6 py-12 md:py-16 flex flex-col items-center">
        {/* SquareActivity component */}
        <SquareActivity width={400} height={400} />

        {/* Title and Subtitle */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mt-8">
          Enjoy Smooth Consultation
        </h1>
        <h2 className="text-xl md:text-2xl text-center mb-4">
          with your Doctor from Anywhere
        </h2>

        {/* Description */}
        <p className="text-base md:text-lg text-center text-gray-300 mb-8">
          Connect seamlessly with your healthcare provider using telemedicine.
        </p>

        {/* Form Inputs and Button */}
        <div className="flex flex-col md:flex-row items-center gap-4 w-full max-w-md mx-auto">
          <input
            type="text"
            id="name"
            onChange={(e) => setFullName(e.target.value.toString())}
            className="border rounded-md focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 px-4 py-2 w-full text-gray-800 placeholder-gray-500"
            placeholder="Enter your name"
          />

          <input
            type="text"
            id="roomid"
            value={roomID}
            onChange={(e) => setRoomID(e.target.value)}
            className="border rounded-md focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 px-4 py-2 w-full text-gray-800 placeholder-gray-500 mt-4 md:mt-0"
            placeholder="Enter room ID to join a meeting"
          />
          <button
            className="rounded-md bg-blue-600 px-6 py-3 text-sm md:text-base font-medium text-white focus:outline-none hover:bg-blue-700 mt-4 md:mt-0"
            onClick={() => router.push(`/room/${roomID}`)}
            disabled={!roomID}
          >
            Join
          </button>
        </div>

        {/* Create New Meeting Button */}
        <div className="mt-4 flex items-center justify-center">
          <button
            className="text-base md:text-lg font-medium text-blue-500 hover:text-blue-400 hover:underline focus:outline-none"
            onClick={() => router.push(`/room/${uuid()}`)}
          >
            Or create a new meeting
          </button>
        </div>
      </div>
    </div>
  );
}
