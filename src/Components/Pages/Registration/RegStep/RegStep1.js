import React from "react";
import '../Registration.css'

const RegStep1 = ({ isTeamMember, setTeamMembers }) => {
  const handleSoloClick = () => {
    setTeamMembers(false);
  };

  const handleTeamClick = () => {
    setTeamMembers(true);
  };

  return (
    <div className="reg1row text-white text-center">
    <h1 ><span style={{ color: "tomato" ,fontFamily:'san-serif'}}> *</span>How Do You Wanna Play ... ? 🤔</h1>
    <div className="row justify-content-center ">
      <div className="col-3">
        <div className={` c1 ${!isTeamMember ? 'selected' : ''}`}>
          <div className=" cb" onClick={handleSoloClick}>
            <h2 className="btn tbutton">Solo 🙌🥳</h2>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className={`c1 ${isTeamMember ? 'selected' : ''}`}>
          <div className="cb" onClick={handleTeamClick}>
            <h2 className="btn tbutton">Team 😎</h2>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default RegStep1;
