import React from "react";
import FormInput from "./FormInput";
const RegStep2 = ({ handleChange, values }) => {
  

  return (
    <>
     <div className="row justify-content-center">
     <div className=" col-12">
<h3 className="h5 text-white col-md-12  text-center">Team Member 1</h3>
 </div>

      

          <div className="col-md-4">
            <FormInput
              type="text"
              pattern="[A-Za-z]+"
              id="id_team_leader_name"
              name="firstName"
              placeholder="First Name"
              data-error="Please enter your First name"
              required="true"
              value={values.tfirstName1}
              handleChange={handleChange}
            />
          </div>
          <div className="col-md-4">
            <FormInput
              type="text"
              pattern="[A-Za-z]+"
              id="id_team_leader_name"
              name="lastName"
              placeholder="Last Name"
              data-error="Please enter your Last name"
              required=""
              value={values.tlastName1}
              handleChange={handleChange}
              />
          </div>
             

          <div className=" col-12">
<h3 className="h5 text-white col-md-12  text-center">Team Member 2</h3>
 </div>
          <div className="col-md-4">
            <FormInput
              type="text"
              pattern="[A-Za-z]+"
              id="id_team_leader_name"
              name="firstName"
              placeholder="First Name"
              data-error="Please enter your First name"
              required="true"
              value={values.tfirstName2}
              handleChange={handleChange}
              />
          </div>
          <div className="col-md-4">
            <FormInput
              type="text"
              pattern="[A-Za-z]+"
              id="id_team_leader_name"
              name="lastName"
              placeholder="Last Name"
              data-error="Please enter your Last name"
              required=""
              value={values.tlastName2}
              handleChange={handleChange}
              />
          </div>
             
          <div className=" col-12">
<h3 className="h5 text-white col-md-12  text-center">Team Member 3</h3>
 </div>
          <div className="col-md-4">
            <FormInput
              type="text"
              pattern="[A-Za-z]+"
              id="id_team_leader_name"
              name="firstName"
              placeholder="First Name"
              data-error="Please enter your First name"
              required="true"
              value={values.tfirstName3}
              handleChange={handleChange}
            />
          </div>
          <div className="col-md-4">
            <FormInput
              type="text"
              pattern="[A-Za-z]+"
              id="id_team_leader_name"
              name="lastName"
              placeholder="Last Name"
              data-error="Please enter your Last name"
              required=""
              value={values.tlastName3}
              handleChange={handleChange}
            />
          </div>
        </div>
    </>
  );
};

export default RegStep2;
