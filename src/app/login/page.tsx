"use client";

import React, { useState } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { AiOutlineMail, AiOutlineEye } from "react-icons/ai";

interface FormData {
  email: string;
  password: string;
}

export default function Login() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // ✅ Handle Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // ✅ Validate Form
  const validateForm = () => {
    let tempErrors: Record<string, string> = {};

    if (!formData.email) tempErrors.email = "Email is required.";
    if (!formData.password) tempErrors.password = "Password is required.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // ✅ Handle Submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      alert("✅ Login Successful");
      console.log(formData);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 text-xs">
      <form
        onSubmit={handleSubmit}
        className="w-[400px] bg-white border rounded-xl p-8 shadow-xl"
      >
        <h2 className="text-center text-3xl font-bold mb-6 text-[#273256]">
          LOG IN
        </h2>

        {/* Email */}
        <div className="mb-4">
          <label className="text-sm font-semibold">Email Address</label>
          <div className="flex items-center border rounded-md p-2 bg-gray-50">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="outline-none w-full bg-transparent"
              placeholder="Enter Email Address"
            />
            <AiOutlineMail className="text-gray-400 mr-2" />
          </div>
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="text-sm font-semibold">Password</label>
          <div className="flex items-center border rounded-md p-2 bg-gray-50">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="outline-none w-full bg-transparent"
              placeholder="Enter Password"
            />
            <AiOutlineEye className="text-gray-400 mr-2" />
          </div>
          {errors.password && (
            <p className="text-red-500 text-xs">{errors.password}</p>
          )}
        </div>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500 text-sm">OR LOGIN WITH</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Social Login */}
        <div className="flex justify-center gap-4">
          <button className="flex items-center gap-2 border p-2 rounded-md w-40 justify-center hover:bg-blue-100 transition">
            <FaFacebook className="text-blue-600" /> Facebook
          </button>
          <button className="flex items-center gap-2 border p-2 rounded-md w-40 justify-center hover:bg-red-100 transition">
            <FaGoogle className="text-red-600" /> Google
          </button>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="bg-[#273256] text-white p-3 rounded-md w-full mt-5 hover:bg-[#1f2744] transition font-bold"
        >
          LOG IN
        </button>

        {/* Sign Up Link */}
        <p className="text-center text-gray-500 mt-3">
          Don't have an account?{" "}
          <span
            className="text-blue-600 cursor-pointer hover:underline"
            onClick={() => (window.location.href = "/signup")}
          >
            Sign up
          </span>
        </p>
      </form>
    </div>
  );
}
