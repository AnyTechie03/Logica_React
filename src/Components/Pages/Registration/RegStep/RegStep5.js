import React from "react";
// import FormInput from "./FormInput";
import { notifyToast } from "../../../Functions/notifyToast";
import { useNavigate } from "react-router-dom";


const RegStep5 = ({ handleChange, values }) => {
  const navigate = useNavigate();
  const handleSendVerificationEmail = async () => {
    try {
      const res = await fetch("https://logicabackend.onrender.com/send-verification-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: values.email }),
      });

      if (res.status === 201) {
        notifyToast("Verification email sent", "success");
      } else if (res.status === 200) {
        notifyToast("Email Is Already Verified", "success");
        navigate('/login');
      } else {
        notifyToast("Failed to send verification email", "Error");
      }
    } catch (error) {
      console.error("Error sending verification email:", error);
      notifyToast("Failed to send verification email", "Error");
    }
  };

  const handleVerifyEmail = async () => {
    try {
      const res = await fetch("https://logicabackend.onrender.com/verify-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: values.email, token: values.emailVerificationToken }),
      });

      if (res.status === 201) {
        notifyToast("Email verified successfully", "success");
        navigate('/login');

      } else if (res.status === 200) {
        notifyToast("Email Is Already Verified", "success");
        navigate('/login');
      } else {
        notifyToast("Failed to verify email", "Error");
      }
    } catch (error) {
      console.error("Error verifying email:", error);
      notifyToast("Failed to verify email", "Error");
    }
  };

  return (
    <>
      <div className="verification-container row">
        <h3>Verify Your Email</h3>
        <p>Enter the verification token sent to your email:</p>
        <input
          type="text"
          className="form-control col-12"
          name="emailVerificationToken"
          placeholder="Enter Token"
          value={values.emailVerificationToken}
          onChange={handleChange}
        />
        <div className="col-12 vbtn">

<div className="row">

<input 
type="button"
        className="btn btn-verify half-form col-12"
        onClick={handleSendVerificationEmail}
        value="Send Verify Email"
        />
     
</div>
<div className="row">
  
<input 
type="button"
        className="btn btn-verify half-form col-12"
        onClick={handleVerifyEmail}
        value="Verify Email"
      />
        
      
  </div>
 
     
        </div>
       
        
      </div>
    </>
  );
};

export default RegStep5;
