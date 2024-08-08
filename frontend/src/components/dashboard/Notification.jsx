import Link from "next/link";
import React, { useState, useEffect } from "react";
import { MdFlight } from "react-icons/md";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { FaStethoscope } from "react-icons/fa";
import App from "next/app";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Notifications({ appointment }) {
  const [value, setValue] = React.useState(0);
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfterTomorrow = new Date();
  dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);

  const todayAppointment = appointment.filter((Appointment) => {
    const AppointmentDate = new Date(Appointment.date);
    return isSameDate(AppointmentDate, today);
  });

  const tomorrowAppointment = appointment.filter((Appointment) => {
    const AppointmentDate = new Date(Appointment.date);
    return isSameDate(AppointmentDate, tomorrow);
  });

  const dayAfterTomorrowAppointment = appointment.filter((Appointment) => {
    const AppointmentDate = new Date(Appointment.date);
    return isSameDate(AppointmentDate, dayAfterTomorrow);
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="p-4 pb-2 rounded-lg border border-gray-100 bg-background text-gray-600 shadow-lg">
      <p className="text-primary text-xl py-1">Recent Appointment Details</p>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            TabIndicatorProps={{style: {background:'#795cfa'}}}
            value={value}
            onChange={handleChange}
            textColor="inherit"
            aria-label="basic tabs example"
          >
            <Tab label="Today" {...a11yProps(0)} />
            <Tab label="Tomorrow" {...a11yProps(1)} />
            <Tab label="+2 Days" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          {todayAppointment.length === 0 && (
            <p className="text-primary text-lg py-1">
              No Appointments found for Today.
            </p>
          )}
          {todayAppointment.map((Appointment) => (
            <NotificationTile key={Appointment._id} {...Appointment} />
          ))}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          {tomorrowAppointment.length === 0 && (
            <p className="text-primary text-lg py-1">
              No Appointments found for Tomorrow.
            </p>
          )}
          {tomorrowAppointment.map((Appointment) => (
            <NotificationTile key={Appointment._id} {...Appointment} />
          ))}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          {dayAfterTomorrowAppointment.length === 0 && (
            <p className="text-primary text-lg py-1">
              No Appointments found for Day after Tomorrow.
            </p>
          )}
          {dayAfterTomorrowAppointment.map((Appointment) => (
            <NotificationTile key={Appointment._id} {...Appointment} />
          ))}
        </CustomTabPanel>
      </Box>
      <div className="flex justify-center pt-2">
        <Link href={"/dashboard/my-appointments"} className="text-primary text-center">
          View All Appointment
        </Link>
      </div>
    </div>
  );
}

function isSameDate(date1, date2) {
  return date1.toDateString() === date2.toDateString();
}

function NotificationTile(
  AppointmentId
) {
  console.log("AppointmentId", AppointmentId)
  const createdAt = AppointmentId.date
  const isAppointmentSuccessful = AppointmentId.status == "completed";
  const date = new Date(createdAt);
  const name = AppointmentId?.patient?.name ? AppointmentId?.patient?.name : AppointmentId?.doctor?.name;
  const time = AppointmentId.time;

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const formattedDate = date.toLocaleString("en-US", options);

  return (
    <div className="flex justify-between items-start w-full border-b-2 border-gray-100 rounded-md py-2">
      <div className="flex gap-4 items-center">
        <FaStethoscope className="text-primary  h-6 w-6" />
        <div>
          <p className="text-primary font-semibold">
            {formattedDate}
          </p>
          <p className="text-sm text-gray-600">
            {isAppointmentSuccessful
              ? "Appointment was successfully done"
              : `Your Appointment with ${name} is scheduled`}
          </p>
        </div>
      </div>
      <p className="bg-primary py-1 px-2 text-xs rounded-md text-white font-semibold">
        {time}
      </p>
    </div>
  );
}