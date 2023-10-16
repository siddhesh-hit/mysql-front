import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getApi, postApi } from "../hooks/apiFunction";
import "../App.css";
import { API } from "../config";

const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await postApi(`${API.localHost}/user/register`, values);
    console.log(res);

    if (res && res.data) {
      console.log("Login successful! Redirecting...");
      navigate("/payment");
    } else {
      alert("Login failed. Please try again.");
    }
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleNavigate = () => {
    navigate("/login");
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden background-login">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-[26rem] p-16">
        <h1 className="text-3xl font-semibold text-center ">Register</h1>
        <form className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-800"
            >
              Name
            </label>
            <input
              name="username"
              onChange={(e) => handleChange(e)}
              type="name"
              className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              name="email"
              onChange={(e) => handleChange(e)}
              type="email"
              className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              name="password"
              onChange={(e) => handleChange(e)}
              type="password"
              className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-6">
            <input
              type="submit"
              onClick={(e) => handleSubmit(e)}
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            />
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Already have an account?{" "}
          <a
            onClick={() => handleNavigate()}
            className="font-medium text-blue-600 hover:underline"
          >
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
