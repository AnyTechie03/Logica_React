import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notifyToast } from "../../Functions/notifyToast";
import RegStep1 from "./RegStep/RegStep1";
import RegStep2 from "./RegStep/RegStep2";
import RegStep3 from "./RegStep/RegStep3";
import RegStep4 from "./RegStep/RegStep4";
import RegStep5 from "./RegStep/RegStep5";

function SignUp2({ isTeamMember, setTeamMembers }) {
  const [step, setStep] = useState(1);

  const [values, setValues] = useState({
    teamName: "",
    firstName: "",
    lastName: "",
    email: "",
    cEmail: "",
    phoneNumber: "",
    gender: "",
    collegeName: "",
    degree: "",
    year: "",
    department: "",
    pinCode: "",
    city: "",
    state: "",
    password: "",
    cpassword: "",
    firstName1: "",
    lastName1: "",
    emailVerificationToken: "",
  });

  const validate = () => {
    switch (step) {
      case 1: {
        if (isTeamMember === null) {
          notifyToast("Select How Are You Playing Solo or In Team", "error");
          return false;
        }
        return true;
      }
      case 2: {
        if (isTeamMember === true && values.teamName.length < 1) {
          notifyToast("Team Name cannot be empty", "error");
          return false;
        } else if (values.firstName.length < 1 || values.lastName.length < 3) {
          notifyToast("Leader Name is invalid", "error");
          return false;
        } else if (values.phoneNumber.length !== 10) {
          notifyToast("Phone number is invalid", "error");
          return false;
        } else if (values.gender !== "male" && values.gender !== "female") {
          notifyToast("Gender is required", "error");
          return false;
        } else if (values.collegeName.length < 1) {
          notifyToast("College Name cannot be empty", "error");
          return false;
        } else if (values.degree.length < 1) {
          notifyToast("Degree Name cannot be empty", "error");
          return false;
        } else if (values.year.length < 1) {
          notifyToast("Current Educational Year cannot be empty", "error");
          return false;
        } else if (values.department.length < 1) {
          notifyToast("Department Name cannot be empty", "error");
          return false;
        } else if (values.pinCode.length !== 6) {
          notifyToast("Pin Code is invalid", "error");
          return false;
        } else if (values.city.length < 3) {
          notifyToast("City/Town is too short", "error");
          return false;
        } else if (values.state.length < 3) {
          notifyToast("State is too short", "error");
          return false;
        } else if (isTeamMember === true) {
          if (values.firstName1.length < 1 || values.lastName1.length < 3) {
            notifyToast("Team Member Name is invalid", "error");
            return false;
          }
        }
        return true;
      }
      case 3: {
        if (!values.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
          notifyToast("Please enter a valid Email", "error");
          return false;
        } else if (values.email !== values.cEmail) {
          notifyToast("Emails do not match", "error");
          return false;
        }
        return true;
      }
      case 4: {
        if (
          !values.password.match(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
          )
        ) {
          notifyToast("Please set a strong password", "error");
          return false;
        } else if (values.password !== values.cpassword) {
          notifyToast("Passwords do not match", "error");
          return false;
        }
        return true;
      }
      case 5: {
        if (!values.emailVerificationToken) {
          notifyToast("Email verification token is required", "error");
          return false;
        }
        return true;
      }
      default:
        return false;
    }
  };

  const handleNext = async () => {
    if (step === 1) {
      if (validate()) {
        // disablePrevButton()
        setStep(2);
      }
    }
    if (step === 2) {
      if (validate()) {
        setStep(3);
      }
    }
    if (step === 3) {
      if (validate()) {
        setStep(4);
      }
    }
    if (step === 4) {
      if (validate()) {
        handleSubmit(); // Implement submitUserData function

        setStep(5);
        //disableNextButton()
      }
    }
    if (step === 5) {
      if (validate()) {
      }
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async () => {
    const formDataToSend = {
      teamName: values.teamName,
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phoneNumber: values.phoneNumber,
      gender: values.gender,
      collegeName: values.collegeName,
      degree: values.degree,
      year: values.year,
      department: values.department,
      pinCode: values.pinCode,
      city: values.city,
      state: values.state,
      password: values.password,
      cpassword: values.cpassword,
      firstName1: values.firstName1,
      lastName1: values.lastName1,
    };

    try {
      const res = await fetch("https://angry-moon-10536.pktriot.net/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formData: formDataToSend,
        }),
      });

      if (res.status === 201) {
        // User data submitted successfully
        notifyToast("Registered Successfully", "success");
        notifyToast("Payment Gatway will start from 25 Oct 2023", "success");
        setStep(5); // Move to RegStep5
      } else {
        // Handle other response statuses (e.g., validation errors)
        notifyToast("Failed to submit user data", "Error");
      }
      if (res.ok) {
        // Handle a successful response here
        console.log("GET request succeeded");
      } else {
        console.error("GET request failed");
      }
      return res; 
    } catch (error) {
      console.error("Error submitting registration:", error);
      notifyToast("Failed to register", "Error");
    }
  };

  const StepRender = () => {
    switch (step) {
      case 1:
        return (
          <RegStep1
            values={values}
            handleChange={handleChange}
            isTeamMember={isTeamMember}
            setTeamMembers={setTeamMembers}
          />
        );

      case 2:
        return (
          <RegStep2
            values={values}
            handleChange={handleChange}
            isTeamMember={isTeamMember}
            setTeamMembers={setTeamMembers}
          />
        );

      case 3:
        return <RegStep3 values={values} handleChange={handleChange} />;

      case 4:
        return <RegStep4 values={values} handleChange={handleChange} />;

      case 5:
        return <RegStep5 values={values} handleChange={handleChange} />;

      default:
        return <RegStep1 values={values} handleChange={handleChange} />;
    }
  };

  return (
    <div className="auth-background fWhite">
      <div className="signup-container">
        <div className="regform">
          <form className="reg-form" onSubmit={handleSubmit}>
            <div className="RegStep">
              <h3 className="st">Registration</h3>
              {StepRender()}

              <div className="stepButtons ">
                <div className="row justify-content-around reg1in">
                  <input
                    value={"<< Back"}
                    type="button"
                    className="btn button-left col-5"
                    disabled={step === 1}
                    onClick={handlePrev}
                  />

                  <input
                    value={step === 5 ? "Sign Up >>" : "Next >>"}
                    type="button"
                    className="btn button-right col-5"
                    disabled={step === 5}
                    onClick={handleNext}
                  />
                </div>
              </div>
            </div>
          </form>
          
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default SignUp2;
