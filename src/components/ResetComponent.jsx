import React, { useState } from "react";
import { changePassword } from "../services/userServices";
import { useNavigate } from "react-router-dom";

function ResetComponent() {
    const Navigate = useNavigate();
    const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  async function submitPassword(e) {
    e.preventDefault();
    changePassword({password, cPassword })
      .then((res) => {
        console.log(res);
        Navigate('/')
      })
      .catch((err) => {
        console.log(err);
      }); 
  }
  return (
    <form className="space-y-4 " onSubmit={submitPassword}>
      <div>
        <label
          className="block float-left text-gray-700 font-semibold mb-2"
          htmlFor="password"
        >
          New Password
        </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          // onKeyUp={(e) => SetEmailError(checkEmail(e.target.value))}
          required
          className="appearance-none block w-full bg-gray-50 border rounded py-2 px-4 placeholder-gray-500 focus:outline-none focus:bg-white focus:border-black"
          placeholder="New Password"
        />
      </div>
      <div>
        <label
          className="block float-left text-gray-700 font-semibold mb-2"
          htmlFor="cPassword"
        >
          Retype New Password
        </label>
        <input
          type="password"
          name="cPassword"
          value={cPassword}
          onChange={(e) => setCPassword(e.target.value)}
          // onKeyUp={(e) => SetEmailError(checkEmail(e.target.value))}
          required
          className="appearance-none block w-full bg-gray-50 border rounded py-2 px-4 placeholder-gray-500 focus:outline-none focus:bg-white focus:border-black"
          placeholder="Retype New Password"
        />
      </div>

      <button
        type="submit"
        className="block w-full bg-black text-white font-semibold py-3 px-4 rounded hover:bg-gray-900 focus:outline-none focus:bg-gray-900"
      >
        send OTP
      </button>
    </form>
  );
}

export default ResetComponent;
