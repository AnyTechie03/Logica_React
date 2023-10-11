import React from "react";
import FormInput from "./FormInput";
const RegStep2 = ({ handleChange, values ,setTeamMembers,isTeamMember}) => {
  const handleCheckboxChange = (event) => {
    setTeamMembers(event.target.checked);
  };

  return (
    <>
     <div className="row justify-content-center">
     <div className=" col-12">
<h3 className="h5 text-white col-md-12  text-center">Team Member 1</h3>


      <label>
      <h1>Do You Want To Add Team Member ... ?</h1>
        <input
          type="checkbox"
          checked={isTeamMember}
          onChange={handleCheckboxChange}
        />
      </label>

      {isTeamMember ? <>
        <div className="col-md-4">
            <FormInput
              type="text"
              pattern="[A-Za-z]+"
              id="id_team_leader_name"
              name="firstName1"
              placeholder="First Name"
              data-error="Please enter your First name"
              required="true"
              value={values.firstName1}
              handleChange={handleChange}
            />
          </div>
          <div className="col-md-4">
            <FormInput
              type="text"
              pattern="[A-Za-z]+"
              id="id_team_leader_name"
              name="lastName1"
              placeholder="Last Name"
              data-error="Please enter your Last name"
              required=""
              value={values.lastName1}
              handleChange={handleChange}
              />
          </div>
      </> : <p>You are not a team member.</p>}
  
 </div> 
        </div>
    </>
  );
};

export default RegStep2;
