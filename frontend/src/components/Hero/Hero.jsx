"use client"
import heroImage from '@/../public/heroImage.png';
import Logo from "@/../public/logo.png";
import Image from 'next/image';
import { useState } from 'react';

const  Hero = () => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
  
    return (
      <section className="pt-6 pb-20 bg-gray-50 overflow-hidden" x-data="{ mobileNavOpen: false }">
        <div className="container mx-auto px-4">
          
          <div className="relative mb-8 p-8 bg-white overflow-hidden rounded-3xl">
            <div className="absolute top-1/2 left-3/4 min-w-max transform -translate-x-1/2 -translate-y-1/2">
              <div className="absolute bg-gradient-radial-white w-full h-full"></div>
              <Image src={heroImage} alt="LogoF" width={300} height={300}/>
            </div>
            <div className="relative flex flex-wrap lg:items-center -m-8">
              <div className="w-full md:w-1/2 p-8">
                <div className="md:max-w-lg mx-auto">
                  <span className="inline-block mb-3 text-sm text-blue-500 font-bold uppercase tracking-widest">Easy Med</span>
                  <h1 className="font-heading mb-4 text-5xl text-gray-900 font-black tracking-tight">
                    <span>convenient healthcare </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">anytime, anywhere. </span>
                    <span>than ever.</span>
                  </h1>
                  <p className="mb-6 text-xl font-bold">Streamlined telemedicine, effortless appointment booking, and instant report access—right at your fingertips.</p>
                  <div className="flex flex-wrap -m-2">
                    <div className="w-full md:w-auto p-2"><a className="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full" href="sign-up">Get Started</a></div>
                    <div className="w-full md:w-auto p-2"><a className="block w-full px-4 py-2.5 text-sm text-center text-gray-900 font-bold bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 rounded-full" href="demo-video">Watch Video</a></div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-8">
                <div className="max-w-max mx-auto md:mr-0 bg-white overflow-hidden rounded-3xl">
                  <img className="mx-auto" src="zanrly-assets/images/headers/work.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="px-8 py-11 bg-white rounded-3xl">
            <div className="flex flex-wrap justify-center sm:justify-around -m-2">
              <div className="w-full sm:w-auto p-2">
                <Image className="mx-auto" src="" alt="Add Something" />
              </div>
              <div className="w-full sm:w-auto p-2">
                <Image className="mx-auto" src="" alt="Add Something" />
              </div>
              <div className="w-full sm:w-auto p-2">
                <Image className="mx-auto" src="" alt="Add Something" />
              </div>
              <div className="w-full sm:w-auto p-2">
                <Image className="mx-auto" src="" alt="Add Something" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;