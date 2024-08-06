import React from 'react'
import Link from 'next/link'
import { IoStatsChart } from 'react-icons/io5'
import { CiCalendarDate } from "react-icons/ci";
import { FaUserDoctor } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

function Sidebar() {
    const [stateContext, setStateContext] = React.useState(0)
    const active = "bg-white/30"
    const menuItems = [
    {
      name: "Dashboard",
      icon: <IoStatsChart className="w-5 h-5" />,
      link: "/dashboard",
    },
    {
        name: 'My Appointments',
        icon: <CiCalendarDate className="w-5 h-5" />,
        link: '/dashboard/my-appointments'
    },
    {
        name: 'Consultations',
        icon: <FaUserDoctor className="w-5 h-5" />,
        link: '/dashboard/consultations'
    },
    {
        name: 'Profile',
        icon: <FaUser className="w-5 h-5" />,
        link: '/dashboard/profile'
    }
    ]
  return (
     <ul className="mb-4 flex flex-col gap-2 overflow-auto pb-6">
        {
            menuItems.map((item, index) => (
                <li key={index}>
                <Link href={item.link}>
                    <button
                    className={`font-bold transition-all text-xs py-3 rounded-lg text-base-100 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize ${
                        stateContext === index ? active : "hover:bg-white/10"
                    }`}
                    type="button"
                    onClick={() => setStateContext(index)}
                    >
                    {item.icon}
                    <p className="block antialiased font-sans text-lg leading-relaxed text-inherit font-medium capitalize">
                        {item.name}
                    </p>
                    </button>
                </Link>
                </li>
            ))

        }
    
     </ul>
  )
}

export default Sidebar