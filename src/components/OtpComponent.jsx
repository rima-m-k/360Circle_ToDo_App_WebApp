import React, { useState } from "react";
import { checkOTP } from "../services/userServices";

function OtpComponent({onNext}) {
  const [otp, setOTP] = useState("");

  async function submitOTP(e) {
    e.preventDefault(); 
    checkOTP({otp:otp})
      .then((res) => {
        console.log(res);
        onNext()
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <form className="space-y-4 " onSubmit={submitOTP}>
      <div>
        <label
          className="block float-left text-gray-700 font-semibold mb-2"
          htmlFor="otp"
        >
          Enter OTP
        </label>
        <input
          type="text"
          name="otp"
          value={otp}
          onChange={(e) => setOTP(e.target.value)}
          // onKeyUp={(e) => SetEmailError(checkEmail(e.target.value))}
          required
          className="appearance-none block w-full bg-gray-50 border rounded py-2 px-4 placeholder-gray-500 focus:outline-none focus:bg-white focus:border-black"
          placeholder="OTP"
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

export default OtpComponent;
