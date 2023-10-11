import React from "react";
import FormInput from "./FormInput";

const RegStep3 = ({ handleChange, values }) => {
  
  return (
    <>
   <div className="text-center ">

<h2 className="st text-white">Email</h2>
<FormInput
  type="text"
  name="email"
  labeltext="Email:"
  inputIcon="mail"
  placeholder="Enter your email"
  handleChange={handleChange}
  value={values.email}
  />

<FormInput
  type="text"
  name="cEmail"
  labeltext=" Confirm Email:"
  inputIcon="mail"
  placeholder="Enter your email again"
  handleChange={handleChange}
  value={values.cEmail}
  />
  </div>
  </>
  );
};
export default RegStep3;
