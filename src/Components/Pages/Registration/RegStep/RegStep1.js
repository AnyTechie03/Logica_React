import React from "react";
import '../Registration.css'

const RegStep1 = ({ isTeamMember, setIsTeamMember }) => {
  const handleSoloClick = () => {
    setIsTeamMember(false);
  };

  const handleTeamClick = () => {
    setIsTeamMember(true);
  };

  return (
    <div className="row justify-content-center">
      <div className="col-6">
        <div className={`card c1 ${!isTeamMember ? 'selected' : ''}`}>
          <div className="card-body cb" onClick={handleSoloClick}>
            <h2 className="tbutton">Solo 🙌🥳</h2>
          </div>
        </div>
      </div>
      <div className="col-6">
        <div className={`card c1 ${isTeamMember ? 'selected' : ''}`}>
          <div className="card-body cb" onClick={handleTeamClick}>
            <h2 className="tbutton">Team 😎</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegStep1;
