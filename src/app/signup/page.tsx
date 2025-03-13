"use client";

import React, { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

// ✅ Form Data Type
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  occupation: string;
  otherOccupation?: string;
  company: string;
  discover: string;
  otherDiscover?: string;
  choose: string;
  otherChoose?: string;
  password: string;
  confirmPassword: string;
}

export default function Signup() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    occupation: "",
    otherOccupation: "",
    company: "",
    discover: "",
    otherDiscover: "",
    choose: "",
    otherChoose: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // ✅ Handle Input Change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear errors when user starts typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // ✅ Form Validation
  const validateForm = () => {
    let tempErrors: Record<string, string> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{11}$/;

    // First Name
    if (!formData.firstName) tempErrors.firstName = "First Name is required.";
    // Last Name
    if (!formData.lastName) tempErrors.lastName = "Last Name is required.";
    // Email
    if (!formData.email) {
      tempErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Invalid email format.";
    }
    // Mobile Number
    if (!formData.mobileNumber) {
      tempErrors.mobileNumber = "Mobile Number is required.";
    } else if (!mobileRegex.test(formData.mobileNumber)) {
      tempErrors.mobileNumber = "Mobile Number must be 11 digits.";
    }
    // Occupation
    if (!formData.occupation) {
      tempErrors.occupation = "Please select an occupation.";
    }
    if (formData.occupation === "Others" && !formData.otherOccupation) {
      tempErrors.otherOccupation = "Please specify your occupation.";
    }
    // Discover
    if (!formData.discover) {
      tempErrors.discover = "Please select how you discovered us.";
    }
    if (formData.discover === "Others" && !formData.otherDiscover) {
      tempErrors.otherDiscover = "Please specify how you discovered us.";
    }
    // Choose Us
    if (!formData.choose) {
      tempErrors.choose = "Please select why you chose us.";
    }
    if (formData.choose === "Others" && !formData.otherChoose) {
      tempErrors.otherChoose = "Please specify why you chose us.";
    }
    // Password
    if (!formData.password) tempErrors.password = "Password is required.";
    if (!formData.confirmPassword)
      tempErrors.confirmPassword = "Confirm Password is required.";
    if (formData.password !== formData.confirmPassword) {
      tempErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // ✅ Handle Form Submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      alert("✅ Form submitted successfully!");
      console.log(formData);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#000000] via-[#0070C0] to-[#dc8435] text-xs">
      <form
        onSubmit={handleSubmit}
        className="w-[550px] bg-white border rounded-xl p-8 shadow-xl"
      >
        <h2 className="text-center text-3xl font-bold mb-6 text-gray-800">
          SIGN UP
        </h2>

        <div className="grid grid-cols-2 gap-5">
          {/* First Name */}
          <div>
            <label className="font-semibold">First Name</label>
            <input
              placeholder="Enter First Name"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="border p-2 w-full rounded-md"
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs">{errors.firstName}</p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label className="font-semibold">Last Name</label>
            <input
              placeholder="Enter Last Name"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="border p-2 w-full rounded-md"
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs">{errors.lastName}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="font-semibold">Email Address</label>
            <input
              placeholder="Enter Email Address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border p-2 w-full rounded-md"
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email}</p>
            )}
          </div>

          {/* Mobile Number */}
          <div>
            <label className="font-semibold">Mobile Number</label>
            <input
              placeholder="Enter Mobile Number"
              type="text"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="border p-2 w-full rounded-md"
            />
            {errors.mobileNumber && (
              <p className="text-red-500 text-xs">{errors.mobileNumber}</p>
            )}
          </div>

          {/* Occupation */}
          <div>
            <label className="font-semibold">Occupation</label>
            <select
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              className="border p-2 w-full rounded-md"
            >
              <option value="" disabled>
                Select
              </option>
              <option>Client</option>
              <option>Lawyer</option>
              <option>Paralegal</option>
              <option>Bar Taker</option>
              <option>Undergrad</option>
              <option>Others</option>
            </select>

            {formData.occupation === "Others" && (
              <input
                type="text"
                name="otherOccupation"
                placeholder="Please specify"
                value={formData.otherOccupation}
                onChange={handleChange}
                className="border p-2 w-full rounded-md mt-2"
              />
            )}
          </div>

          <div>
            {/* Firm/School/Company */}
            <label className="font-semibold">Firm/School/Company</label>
            <input
              placeholder="Optional"
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="border p-2 w-full rounded-md"
            />
            {errors.company && (
              <p className="text-red-500 text-xs">{errors.company}</p>
            )}
          </div>

          {/* How did you discover us? */}
          <div>
            <label className="font-semibold">How did you discover us?</label>
            <select
              name="discover"
              value={formData.discover}
              onChange={handleChange}
              className="border p-2 w-full rounded-md"
            >
              <option value="">Select</option>
              <option>Bar Purposes</option>
              <option>Referral</option>
              <option>Our Reputation</option>
              <option>Innovative Approach</option>
              <option>Competitive Pricing</option>
              <option>Online Presence</option>
              <option>Interest/Curiosity</option>
              <option>Others</option>
            </select>
            {formData.discover === "Others" && (
              <input
                type="text"
                name="otherChoose"
                placeholder="Please specify"
                value={formData.otherChoose}
                onChange={handleChange}
                className="border p-2 w-full rounded-md mt-2"
              />
            )}
          </div>

          {/* What made you choose us? */}
          <div>
            <label className="font-semibold">What made you choose us?</label>
            <select
              className="border p-2 w-full rounded-md text-gray-800 focus:outline-blue-600"
              value={formData.discover}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select
              </option>
              <option>Bar Purposes</option>
              <option>Referral</option>
              <option>Our Reputation</option>
              <option>Innovative Approach</option>
              <option>Competitive Pricing</option>
              <option>Online Presence</option>
              <option>Interest/Curiosity</option>
              <option>Others</option>
            </select>

            {formData.discover === "Others" && (
              <input
                type="text"
                name="otherDiscover"
                placeholder="Please specify"
                value={formData.otherDiscover}
                onChange={handleChange}
                className="border p-2 w-full rounded-md mt-2"
              />
            )}
          </div>

          {/* Password */}
          <div>
            <label className="font-semibold">Password</label>
            <input
              placeholder="Enter Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="border p-2 w-full rounded-md"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="font-semibold">Confirm Password</label>
            <input
              placeholder="Confirm Password"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="border p-2 w-full rounded-md"
            />
          </div>
        </div>

        {/* Social Login */}
        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500 text-sm">OR LOGIN WITH</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <div className="flex justify-center gap-4">
          <button className="flex items-center gap-2 border p-2 rounded-md w-40 justify-center hover:bg-blue-100 transition">
            <FaFacebook className="text-blue-600" /> Facebook
          </button>
          <button className="flex items-center gap-2 border p-2 rounded-md w-40 justify-center hover:bg-blue-100 transition">
            <FaGoogle className="text-red-600" /> Google
          </button>
        </div>

        {/* Submit Button */}
        <button className="bg-[#273256] text-white p-3 rounded-md w-full mt-5 hover:bg-[#1f2744] transition font-bold">
          SIGN UP
        </button>

        <p className="text-center text-gray-500 mt-3">
          Already have an account?{" "}
          <span
            className="text-blue-600 cursor-pointer hover:underline"
            onClick={() => (window.location.href = "/login")}
          >
            Log in
          </span>
        </p>
      </form>
    </div>
  );
}
