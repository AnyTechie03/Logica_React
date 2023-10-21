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
      <div className="col-12 col-sm-6 col-md-6 col-lg-3 ">
        <div className= 'c1'>
          <div className=" cb" onClick={handleSoloClick}>
            <h2 className={` btn tbutton ${!isTeamMember ? 'selected' : ''}`}>Solo 🙌🥳</h2>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-6 col-lg-3">
        <div className='c1'>
          <div className="cb" onClick={handleTeamClick}>
            <h2 className={` btn tbutton ${!isTeamMember ? '' : 'selected'}`}>Team 😎🙌</h2>
          </div>
        </div>
      </div>
      </div>
      <p className="event-guidelines-instruction">
          Before proceeding with your registration, please read the event guidelines carefully. They are available on the homepage of the website.
        </p>
    </div>
  );
};

export default RegStep1;
