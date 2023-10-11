import React from "react";
import FormInput from "./FormInput";
import PasswordChecker from "./PasswordChecker"

const RegStep4 = ({ handleChange, values }) => {
  
  return (
    <>
     <div className=" text-center">

<h2 className="st">Password Creation</h2>
<FormInput
id="YourPassword"
  labeltext="Password"
  type="password"
  name="password"
  inputIcon="lock"
  value={values.password}
  handleChange={handleChange}
  placeholder="Set a Password"
/>

<FormInput
  labeltext="Confirm Password"
  type="password"
  name="cpassword"
  inputIcon="lock"
  value={values.cpassword}
  handleChange={handleChange}
  placeholder="Enter the password again"
/>

  <div className="centered">
  <div class="strengthMeter"></div>
  <span className="material-symbols-outlined rmargin-10">
info
</span>
{'   '}Set a Strong Password.
</div>
<hr/>
<ul className="text-center" style={{listStyle:'none'}}>
<li>I] Minimum 8 characters <span style={{ color: "tomato"}}> *</span></li>
<li>II] Minimum 1 uppercase letter<span style={{ color: "tomato" }}> *</span></li>
<li>III] Minimum 1 lowercase letter<span style={{ color: "tomato" }}> *</span></li>
<li>IV] Minimum 1 special character<span style={{ color: "tomato" }}> *</span></li>




</ul>

{/* <PasswordChecker values={values}/> */}
  </div>
  </>
  );
};
export default RegStep4;
