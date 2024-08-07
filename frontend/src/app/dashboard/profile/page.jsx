"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  FaCalendarAlt,
  FaHeartbeat,
  FaAllergies,
  FaCheckCircle,
  FaTimesCircle,
  FaGenderless,
} from "react-icons/fa";
import { MdPhotoCamera, MdEdit } from "react-icons/md";
import { BsGenderMale, BsGenderFemale } from "react-icons/bs";
import { useUserStore } from "@/stores/store";
import { fetchAndSetUserStore } from "@/lib/fetchAndSetUserStore";
import { useToast } from "@/components/ui/use-toast";
import apiClient from "@/api-client/apiClient";
import { InputTags } from "@/components/appointments";
    // specialization:{
    //     type:String,
    //     required:true
    // },
    // experience:{
    //     type:Number,
    //     required:true
    // },
    // qualification:{
    //     type:String,
    //     required:true
    // },
    // consultationFee:{
    //     type:Number,
    //     required:true
    // },
    // rating:{
    //     type:Number,
    //     required:true,
    //     default:0
    // },
    // reviews:{
    //     type:Number,
    //     required:true,
    //     default:0
    // },
const Profile = () => {
  const { user, update } = useUserStore();
  const { toast } = useToast();
  const [newProfilePicture, setNewProfilePicture] = useState(null);
  const fileInputRef = useRef(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [experience, setExperience] = useState("");
  const [qualification, setQualification] = useState("");
  const [consultationFee, setConsultationFee] = useState("");
  const [rating, setRating] = useState("");
  const [reviews, setReviews] = useState("");
  
  
  
  const ref = useRef(null);

  return <div>Profile</div>;
};

export default Profile;
