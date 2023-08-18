import React, { useState } from "react";
import EmailComponent from "../components/EmailComponent";
import OtpComponent from "../components/OtpComponent";
import ResetComponent from "../components/ResetComponent";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [currentStep, setCurrentStep] = useState(1);

  function next(){
    setCurrentStep(prev=> prev+1)
  }

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <EmailComponent onNext={next} />;
      case 2:
        return <OtpComponent onNext={next}  />;
      case 3:
        return <ResetComponent  />;
      default:
        return <EmailComponent onNext={next}  />;
    }
  };

 

  return (
    <>
      <div
        className="w-full h-screen bg-repeat-x  bg-bottom flex items-center justify-center "
        style={{}}
      > 
        <div className="w-full max-w-md  p-8 rounded-lg shadow-inner border">
          <h1 className="text-3xl font-semibold text-center mb-6">
            Forgot Password
          </h1>
          {displayStep(currentStep)}
        <Link
          to="/signup"
          className="inline-block align-baseline mt-4 text-blue-600 text-sm text-custom-green hover:text-custom-olive"
        >
          signup
        </Link>
        {" | "}
        <Link
          to="/"
          className="inline-block align-baseline text-blue-600 text-sm text-custom-green hover:text-custom-olive"
        >
          login
        </Link>
        </div>

      </div>
    </>
  );
}

export default ForgotPassword;
