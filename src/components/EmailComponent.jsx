import React, { useState } from "react";
import { sendEmail } from "../services/userServices";

function EmailComponent({ onNext }) {
  const [email, setEmail] = useState("");
  async function submitEmail(e) {
    e.preventDefault();
    sendEmail({ email: email })
      .then((res) => {
        console.log(res);
        onNext();
      }) 
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <form className="space-y-4 " onSubmit={submitEmail}>
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          // onKeyUp={(e) => SetEmailError(checkEmail(e.target.value))}
          required
          className="appearance-none block w-full bg-gray-50 border rounded py-2 px-4 placeholder-gray-500 focus:outline-none focus:bg-white focus:border-black"
          placeholder="Email"
        />
      </div>
      <button
        type="submit"
        className="block  bg-black text-white font-semibold py-3 px-4 rounded hover:bg-gray-900 focus:outline-none focus:bg-gray-900"
      >
        send OTP
      </button>
    </form>
  );
}

export default EmailComponent;
