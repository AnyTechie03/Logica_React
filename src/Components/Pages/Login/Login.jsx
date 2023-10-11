import React, { useContext,  useEffect,  useState } from 'react';
import './Login.css';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import { notifyToast } from '../../Functions/notifyToast';
import { UserContext } from '../../../App'


const Login = ({ isUserVerified,
  setUserVerified ,setVeryPage,VeryPage}) => {
  const {state, dispatch} = useContext(UserContext);
  const navigate =useNavigate()
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
      const response = await fetch("https://logicabackend.onrender.com/login", {
        method: "POST",
        credentials:'include',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formData,
        }),
      });
  
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
      } else {
        setUserVerified(false);
        notify("Invalid Credentials");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  const handleSendVerificationEmail = async () => {
    try {
      const res = await fetch("https://logicabackend.onrender.com/send-verification-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: formData.username }),
      });

      if (res.status === 201) {
        successnotify("Verification email sent");
      }else if(res.status === 200){
        successnotify("Email Is Already Verified");
        navigate('/');
      }else {
        notify("Failed to send verification email", "Error");
      }
    } catch (error) {
      console.error("Error sending verification email:", error);
      notify("Failed to send verification email", "Error");
    }
  };

  const handleVerifyEmail = async () => {
    try {
      const res = await fetch("https://logicabackend.onrender.com/verify-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: formData.username, token: formData.emailVerificationToken }),
      });

      if (res.status === 201) {
        successnotify("Email verified successfully");
        navigate('/');

      } else if(res.status === 200){
        notify("Email Is Already Verified");
        navigate('/');
      }else {
        notify("Failed to verify email", "Error");
      }
    } catch (error) {
      console.error("Error verifying email:", error);
      notify("Failed to verify email", "Error");
    }
  };
 
  useEffect(() => {
    const fetchUserType = async () => {
        const res = await fetch("https://logicabackend.onrender.com/fetchUserType", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          withCredntials: true,
          credentials: 'include',
        });

        if(state){
            notify("User Logged In")
            navigate('/')
            console.error("Unauthorized Access Denied");
            notify("Unauthorized Access Denied", "error");
        }
        else if (res.status===401) {
          console.log("Status 401",res);
        
        }
     
    };

    fetchUserType(); // Call the async function
  }, [navigate]);
  return (
   <>
    <div className='login'>
      <div className='row'>
      <div className=' col-4'>
      <div className={VeryPage ? "d-none" : ""}>
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
            <label>Username</label>
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
          <div className='lgn-btn'>
             
            <button type="submit" onClick={handleSubmit}>
             Login
            </button>
         
            <Link to="/register">
              SignUp
            </Link>
          </div>
        </form>
      </div>
      </div>
      </div>
      </div>
      <div className={VeryPage ? "" : "d-none"}>
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
      >
       Send Verify Email
      </button>
      <button
        className="btn btn-verify half-form"
        onClick={handleVerifyEmail}
      >
        Verify Email
      </button>
      </div>
      </div>
    </div>
              </>
  );
};

export default Login;
