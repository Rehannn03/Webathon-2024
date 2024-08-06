import React from 'react'
import { MdAttachMoney } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import { FaUserDoctor } from "react-icons/fa";


function Stats({earning, appointments, allAppointments}) {
  return (
    <ul className="grid grid-cols-12 gap-x-2 gap-y-12 lg:gap-y-4">
        <li className="col-span-12 flex w-full md:col-span-4 ">
          <div className="flex w-full max-w-full flex-col break-words rounded-lg border border-gray-100 bg-white text-gray-600 shadow-lg">
            <div className="p-3">
              <div className="absolute -mt-10 h-16 w-16 rounded-xl bg-gradient-to-tr from-secondary to-secondary-foreground  text-center text-white shadow-lg">
                <MdAttachMoney  className="mt-4 h-7 w-16" />
              </div>
              <div className="pt-1 text-right">
                <p className="text-sm font-light capitalize">Earning</p>
                <h4 className="text-2xl font-semibold tracking-tighter xl:text-2xl">
                  {earning? `$${earning}` : "$0"}
                </h4>
              </div>
            </div>
            <hr className="opacity-50" />
            <div className="flex items-center justify-start px-4 py-2 xl:py-4">
              <p className="text-left text-lg">Total Earnings from Consultation</p>
            </div>
          </div>
        </li>
        <li className="col-span-12 flex w-full md:col-span-4 ">
          <div className="flex w-full max-w-full flex-col break-words rounded-lg border border-gray-100 bg-white text-gray-600 shadow-lg">
            <div className="p-3">
              <div className="absolute -mt-10 h-16 w-16 rounded-xl bg-gradient-to-tr from-secondary to-secondary-foreground text-center text-white shadow-lg">
                <CiCalendarDate className="mt-4 h-7 w-16" />
              </div>
              <div className="pt-1 text-right">
                <p className="text-sm font-light capitalize">Consultations </p>
                <h4 className="text-2xl font-semibold tracking-tighter xl:text-2xl">
                  {appointments ? appointments : 0}
                </h4>
              </div>
            </div>
            <hr className="opacity-50" />
            <div className="flex items-center justify-start px-4 py-2 xl:py-4">
              <p className="text-left text-lg">Total Consultations Completed </p>
            </div>
          </div>
        </li>
        <li className="col-span-12 flex w-full md:col-span-4 ">
          <div className="flex w-full max-w-full flex-col break-words rounded-lg border border-gray-100 bg-white text-gray-600 shadow-lg">
            <div className="p-3">
              <div className="absolute -mt-10 h-16 w-16 rounded-xl bg-gradient-to-tr from-secondary to-secondary-foreground text-center text-white shadow-lg">
                <FaUserDoctor className="mt-4 h-7 w-16" />
              </div>
              <div className="pt-1 text-right">
                <p className="text-sm font-light capitalize">Appointments</p>
                <h4 className="text-2xl font-semibold tracking-tighter xl:text-2xl">
                  {allAppointments ? allAppointments : 0}
                </h4>
              </div>
            </div>
            <hr className="opacity-50" />
            <div className="flex items-center justify-start px-4 py-2 xl:py-4">
              <p className="text-left text-lg">Total Appointments Booked</p>
            </div>
          </div>  
        </li>
      </ul>
  )
}


export default Stats
