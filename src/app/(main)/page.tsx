"use client";

import React from "react";
import { League_Spartan } from "next/font/google";
import Image from "next/image";
import {
  FaNewspaper,
  FaSearch,
  FaLaptop,
  FaBalanceScale,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Card } from "@/components/home/card";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const contentVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Page = () => {
  return (
    <div
      className={`${leagueSpartan.className} relative w-full min-h-screen pt-5`}
    >
      {/* Background Image */}
      <div className="relative w-full h-[500px] overflow-hidden">
        <Image
          src="/images/Innodata Virtual Background 2.jpg"
          alt="Background"
          fill
          className="absolute inset-0 object-cover"
          priority
        />

        {/* Hero Section */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-center text-blue-900 p-6"
          initial="hidden"
          animate="visible"
          variants={contentVariants}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-2">WELCOME TO</h1>
          <h1 className="text-4xl md:text-6xl font-bold text-blue-400">
            EMPOWER LAW PH
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white italic mb-2">
            Gain access to thousands of laws and cases for your legal research
            needs.
          </p>
          <motion.button
            className="mt-6 max-w-[200px] text-white px-2 py-3 bg-blue-900 hover:bg-[#0070C0] transition-all rounded-full text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>

      {/* Cards Section */}
      <div className="flex justify-center gap-6 my-12">
        <Card
          title="Total Documents"
          description="3,126"
          onClick={() => alert("clicked")}
        />
        <Card title="" description="" onClick={() => {}} />
        <Card title="" description="" onClick={() => {}} />
      </div>

      {/* Second Background Section */}
      <div className="relative w-full h-[500px] overflow-hidden">
        <Image
          src="/images/background2.png"
          alt="Background 2"
          fill
          className="absolute inset-0 object-cover"
          priority
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-start justify-center px-10 md:px-20 text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            What's in Empower Law PH?
          </h2>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <FaNewspaper className="text-2xl md:text-3xl" />
              <div>
                <h3 className="text-lg md:text-xl font-bold">
                  Free & accessible digests.
                </h3>
                <p className="text-sm md:text-base">
                  Read cases from 2020–present—all in one platform.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaSearch className="text-2xl md:text-3xl" />
              <div>
                <h3 className="text-lg md:text-xl font-bold">
                  Advanced search engines.
                </h3>
                <p className="text-sm md:text-base">
                  Offers powerful search engines that enable precise and
                  efficient case law research.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaLaptop className="text-2xl md:text-3xl" />
              <div>
                <h3 className="text-lg md:text-xl font-bold">
                  User-friendly Interface.
                </h3>
                <p className="text-sm md:text-base">
                  Designed for ease of use, provides a seamless and intuitive
                  interface for quick legal research.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaBalanceScale className="text-2xl md:text-3xl" />
              <div>
                <h3 className="text-lg md:text-xl font-bold">
                  Up-to-date Legal Information
                </h3>
                <p className="text-sm md:text-base">
                  Convenient and quick access to relevant Philippine Supreme
                  Court cases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
