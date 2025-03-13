'use client'

import React from "react";
import Image from "next/image";
import { FaInfoCircle, FaNewspaper, FaBalanceScale, FaGavel, FaMapMarkerAlt, FaFileAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Card } from "@/components/home/card";


const contentVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};



const Page = () => {
  return (
    <div className="relative w-full min-h-screen pt-5">
      {/* Background Image */}
      <div className="relative w-full h-[500px] overflow-hidden">
        <Image
          src="/images/Innodata Virtual Background 2.jpg"
          alt="Background"
          fill
          className="absolute inset-0 object-cover"
          priority
        />

        {/* Animated Content */}
        <motion.div
          className="absolute inset-0 flex flex-col text-blue-900 p-6"
          initial="hidden"
          animate="visible"
          variants={contentVariants}
        >
          <h1 className="text-4xl md:text-6xl font-bold transition-all duration-500">
            WELCOME TO
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold transition-all duration-500 text-blue-400">
            EMPOWER LAW PH
          </h1>
          <p className="mt-4 text-lg md:text-xl transition-all duration-500 text-white italic">
            Gain access to thousands of laws and cases for your legal research needs.
          </p>
          <motion.button
            className="mt-6 max-w-[200px] text-white px-2 py-3 bg-blue-900 hover:bg-blue-700 transition-all rounded-xl text-lg font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>

      
    
      <div className="flex justify-center gap-6 my-12">
      <Card title="Total Documents" description="3,126" onClick={()=>{
        alert('clicked')
      }}/>
      <Card title="" description="" onClick={()=>{}}/>
      <Card title="" description="" onClick={()=>{}}/>
      </div>
 

      <div className="relative w-full h-[500px] overflow-hidden">
        <Image
          src="/images/bg2.png"
          alt="Background 2"
          fill
          className="absolute inset-0 object-cover"
          priority
        />
      </div>

    </div>
  );
};

export default Page;