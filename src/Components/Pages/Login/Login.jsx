import React, { useContext, useEffect, useState } from 'react';
import './Login.css';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import { notifyToast } from '../../Functions/notifyToast';
import { UserContext } from '../../../App'


const Login = ({ isUserVerified,
  setUserVerified, setVeryPage, VeryPage }) => {
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate()
  const notify = (message) => {
    toast.error(message, {
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
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://angry-moon-10536.pktriot.net/login", {
        method: "POST",
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": '*',
        },
        body: JSON.stringify({
          formData,
        }),
      });
      // console.log("Login Called");
      if (response.status === 400) {
        notifyToast("Invalid Credentials", "error");
      } else if (response.status === 200) {
        const data = await response.json();

        if (data.userVerified) {
          setUserVerified(true);
          dispatch({ type: "USER", payload: true });
          successnotify("User Logged In Successfully");
          localStorage.setItem("user", "Logged");
          navigate('/');
          window.location.reload(false);
        } else {
          setUserVerified(false);
          setVeryPage(true)
          notify("User is not verified.");
        }
      } else if (response.status === 201) {
        dispatch({ type: "USER", payload: true });
        successnotify("Admin Logged In Successfully");
        localStorage.setItem("user", "Logged");
        navigate('/');
      } else if(response.status === 203){
        setUserVerified(true);
        dispatch({ type: "USER", payload: true });
        successnotify("User Logged In Successfully");
        successnotify("Coders, fuel your spacecraft up 🚀");
        localStorage.setItem("user", "Logged");
        navigate('/payment');
      }
      else {
        setUserVerified(false);
        notify("Invalid Credentials");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const [verificationButtonDisabled, setVerificationButtonDisabled] = useState(false);
  const [verificationButtonTimer, setVerificationButtonTimer] = useState(0);

  const startVerificationButtonTimer = () => {
    setVerificationButtonTimer(30); // Set the timer to 30 seconds
    setVerificationButtonDisabled(true);

    // Start the countdown
    const timerInterval = setInterval(() => {
      setVerificationButtonTimer((prevTimer) => prevTimer - 1);
      if (verificationButtonTimer <= 0) {
        clearInterval(timerInterval); // Stop the timer
        setVerificationButtonDisabled(false); // Enable the button
      }
    }, 1000);
  };

  useEffect(() => {
    // Hide the timer and enable the button after 30 seconds
    if (verificationButtonDisabled) {
      const timer = setTimeout(() => {
        setVerificationButtonDisabled(false);
        setVerificationButtonTimer(0);
      }, 30000);

      return () => clearTimeout(timer);
    }
  }, [verificationButtonDisabled]);


  const handleSendVerificationEmail = async () => {
    if (!verificationButtonDisabled) {
      try {
        const res = await fetch('https://angry-moon-10536.pktriot.net/send-verification-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: formData.username }),
        });

        if (res.status === 201) {
          setVerificationButtonDisabled(true);
          successnotify('Verification email sent');
          startVerificationButtonTimer()

        } else if (res.status === 200) {
          successnotify('Email Is Already Verified');
          navigate('/');
        } else {
          notify('Failed to send verification email', 'Error');
        }
      } catch (error) {
        console.error('Error sending verification email:', error);
        notify('Failed to send verification email', 'Error');
      }
    } else {
      notify('Please wait for the timer to complete.');
    }
  };

  const handleVerifyEmail = async () => {
    try {
      const res = await fetch('https://angry-moon-10536.pktriot.net/verify-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: formData.username, token: formData.emailVerificationToken }),
      });

      if (res.status === 201) {
        successnotify('Email verified successfully');
        navigate('/');
      } else if (res.status === 200) {
        notify('Email Is Already Verified');
        navigate('/');
      } else {
        notify('Failed to verify email', 'Error');
      }
    } catch (error) {
      console.error('Error verifying email:', error);
      notify('Failed to verify email', 'Error');
    }
  };

  useEffect(() => {
    const fetchUserType = async () => {
      const res = await fetch('https://angry-moon-10536.pktriot.net/fetchUserType', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        withCredntials: true,
        credentials: 'include',
      });

      if (state) {
        notify('User Logged In');
        navigate('/');
        console.error('Unauthorized Access Denied');
        notify('Unauthorized Access Denied', 'error');
      } else if (res.status === 401) {
        console.log('Status 401', res);
      }
    };

    fetchUserType();
  }, [navigate]);

  return (
    <>
      <div className="login">
        <div className="row">
          <div className="col-4">
            <div className={VeryPage ? 'd-none' : ''}>
              <div className="login-box form-group">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                  <div className="user-box">
                    <input
                      type="text"
                      name="username"
                      className="form-control"
                      required
                      value={formData.username}
                      onChange={handleChange}
                      autoComplete="username"
                    />
                    <label>Email</label>
                  </div>
                  <div className="user-box">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      required
                      value={formData.password}
                      onChange={handleChange}
                      autoComplete="current-password"
                    />
                    <label>Password</label>
                  </div>
                  <div className="lgn-btn">
                    <Link to="/register">SignUp</Link>
                    <button type="submit" onClick={handleSubmit}>
                      Login
                    </button>
                  </div>
                  <div className="text-white text-center mt-4 m-0 p-0">
                    <p>
                      Forget Password...?
                      <Link
                        className="h5"
                        style={{ fontSize: '16px', textDecoration: 'none' }}
                        to="/register"
                      >
                        resetPassword
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className={VeryPage ? '' : 'd-none'}>
          <div className="verification-container">
            <h3>Verify Your Email</h3>
            <p>Enter the verification token sent to your email:</p>
            <input
              type="text"
              className="form-control"
              name="emailVerificationToken"
              placeholder="Enter Token"
              value={formData.emailVerificationToken}
              onChange={handleChange}
            />
            <button
              className="btn btn-verify half-form"
              onClick={handleSendVerificationEmail}
              disabled={verificationButtonDisabled}
            >
              {verificationButtonDisabled
                ? `Resend in ${verificationButtonTimer}s`
                : 'Send Verify Email'}
            </button>
            <p>
              {verificationButtonDisabled ? `Resend in ${verificationButtonTimer}s` : ''}
            </p>
            <button className="btn btn-verify half-form" onClick={handleVerifyEmail}>
              Verify Email
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;