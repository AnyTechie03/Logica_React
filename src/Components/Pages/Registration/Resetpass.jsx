import React, { useEffect, useState } from "react";
import './ResetPass.css'; 
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Resetpass() {
    const navigate = useNavigate()
  const successnotify = (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const [formData, setFormData] = useState({
    email: "",
    token: "",
    newPassword: "",
  });
  const [passwordinput, setpasswordinput] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  const handleClick = async () => {
    await fetch("https://angry-moon-10536.pktriot.net/reset-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        formData,
      }),
    }).then((res)=>{
        successnotify("Make Sure You Remember it Now.🌟😉")
        successnotify("Password Sucessfully Reset.")
        setTimeout(() => {
            navigate('/login')
        }, 1000);

    })
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOTP = () => {
    const email = formData.email;
    fetch("https://angry-moon-10536.pktriot.net/reset-passwordv", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
      }),
    }).then((res) => {
      if (res.status === 201) {
        setpasswordinput(true);
        setOtpSent(true);
      }
    });
  }

  return (
    <div className="resetpass-container">
      <div className="login">
        <div className="row">
          <div className="col-4">
              <div className="login-box form-group">
      <input
        type="text"
        className="input-field"
        placeholder="Enter Your Email Id"
        value={formData.email}
        name="email"
        required
        onChange={handleChange}
      />
      {passwordinput ? (
        <>
          <input
            type="text"
            className="input-field"
            placeholder="Enter New Password"
            name="newPassword"
            value={formData.newPassword}
            required
            onChange={handleChange}
          />
          <input
            type="text"
            className="input-field"
            name="token"
            required
            value={formData.token}
            onChange={handleChange}
          />
          <button className="button" onClick={handleClick}>Verify</button>
        </>
      ) : (
        <button className="button" onClick={handleOTP}>
          {otpSent ? "Verify" : "Send OTP"}
        </button>
      )}
      </div>
    </div>
    </div>
    </div>
    </div>
  );
}
