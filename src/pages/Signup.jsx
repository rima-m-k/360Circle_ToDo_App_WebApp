import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { signup } from "../services/userServices";
import {
  checkConfirmPswd,
  checkEmail,
  checkName,
  checkPassword,
} from "../formValidation";

function Signup() {
  const Navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [emailError, SetEmailError] = useState("");
  const [nameError, SetNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [cpasswordError, SetCPasswordError] = useState("");
  const [error, SetError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    signup(formData)
      .then((res) => {
        console.log(res);
        setFormData({
          fullName: "",
          email: "",
          password: "",
          cpassword: "",
        });
        localStorage.setItem("user", JSON.stringify(res.data.user));

        Navigate("/to-do");
      })
      .catch((err) => {
        console.log(err);
        SetError(err.response.data.message);
      })
      .finally(() => {});
  }
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((values) => ({ ...values, [name]: value }));
  }
  return (
    <div className="w-full h-screen bg-repeat-x  bg-bottom flex place-items-center justify-center ">
      <div className="w-full max-w-md  p-8 rounded-lg shadow-inner border">
        <h1 className="text-3xl font-semibold text-center mb-6">Signup</h1>
        <form className="space-y-4 " onSubmit={handleSubmit}>
          <div>
            <label
              className="block float-left text-gray-700 font-semibold mb-2"
              htmlFor="fullName"
            >
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              onKeyUp={(e) => SetNameError(checkName(e.target.value))}
              required
              className="appearance-none block w-full bg-gray-50 border rounded py-2 px-4 placeholder-gray-500 focus:outline-none focus:bg-white focus:border-black"
              placeholder="Full Name"
            />
            {nameError && (
              <span className="text-red-600 text-sm"> {nameError}</span>
            )}
          </div>

          <div>
            <label
              className="block float-left text-gray-700 font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onKeyUp={(e) => SetEmailError(checkEmail(e.target.value))}
              required
              className="appearance-none block w-full bg-gray-50 border rounded py-2 px-4 placeholder-gray-500 focus:outline-none focus:bg-white focus:border-black"
              placeholder="Email"
            />
            {emailError && (
              <span className="text-red-600 text-sm"> {emailError}</span>
            )}
          </div>
          <div>
            <label
              className="block float-left text-gray-700 font-semibold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              onKeyUp={(e) => setPasswordError(checkPassword(e.target.value))}
              required
              className="appearance-none block w-full bg-gray-50 border rounded py-2 px-4 placeholder-gray-500 focus:outline-none focus:bg-white focus:border-black"
              placeholder="Password"
            />
            {passwordError && (
              <span className="text-red-600 text-sm"> {passwordError}</span>
            )}
          </div>
          <div>
            <label
              className="block float-left text-gray-700 font-semibold mb-2"
              htmlFor="cpassword"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="cpassword"
              value={formData.cpassword}
              onChange={handleChange}
              onKeyUp={(e) =>
                SetCPasswordError(
                  checkConfirmPswd(e.target.value, formData.password)
                )
              }
              required
              className="appearance-none block w-full bg-gray-50 border rounded py-2 px-4 placeholder-gray-500 focus:outline-none focus:bg-white focus:border-black"
              placeholder="Confirm Password"
            />
            {cpasswordError && (
              <span className="text-red-600 text-sm"> {cpasswordError}</span>
            )}
          </div>
          <button
            type="submit"
            className="block w-full bg-black text-white font-semibold py-3 px-4 rounded hover:bg-gray-900 focus:outline-none focus:bg-gray-900"
          >
            Register
          </button>
          {error && <span className="text-red-600 text-sm"> {error}</span>}
          <div className="text-blue-500 flex flex-col"></div>
        </form>
        <Link
          to="/"
          className="inline-block align-baseline text-blue-600 text-sm text-custom-green hover:text-custom-olive"
        >
          login
        </Link>
        {" | "}
        <Link
          to="/forgot-password"
          className="inline-block align-baseline text-blue-600 text-sm text-custom-green hover:text-custom-olive"
        >
          forgot password
        </Link>
      </div>
    </div>
  );
}

export default Signup;
