import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/userServices";
import { checkEmail, isEmpty } from "../formValidation";

function Login() {
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [emailError, SetEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    login(formData)
      .then((res) => {
        console.log(res);
        setFormData({
          email: "",
          password: "",
        });
        localStorage.setItem("user", JSON.stringify(res.data.user));
        Navigate("/to-do");
      })

      .catch((err) => {
        setError(err.response.data.message);
      })
      .finally(() => {});
  }
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((values) => ({ ...values, [name]: value }));
  }

  return (
    <div
      className="w-full h-screen bg-repeat-x  bg-bottom flex items-center justify-center "
      style={{}}
    >
      <div className="w-full max-w-md  p-8 rounded-lg shadow-inner border">
        <h1 className="text-3xl font-semibold text-center mb-6">Login</h1>
        <form className="space-y-4 " onSubmit={handleSubmit}>
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
              onKeyUp={(e) => setPasswordError(isEmpty(e.target.value))}
              required
              className="appearance-none block w-full bg-gray-50 border rounded py-2 px-4 placeholder-gray-500 focus:outline-none focus:bg-white focus:border-black"
              placeholder="Password"
            />
            {passwordError && (
              <span className="text-red-600 text-sm"> {passwordError}</span>
            )}
          </div>
          <button
            type="submit"
            className="block w-full bg-black text-white font-semibold py-3 px-4 rounded hover:bg-gray-900 focus:outline-none focus:bg-gray-900"
          >
            Log In
          </button>
          {error && <span className="text-red-600 text-sm"> {error}</span>}
          <div className="text-blue-500 flex flex-col"></div>
        </form>
        <Link
          to="/signup"
          className="inline-block align-baseline text-blue-600 text-sm text-custom-green hover:text-custom-olive"
        >
          signup
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

export default Login;
