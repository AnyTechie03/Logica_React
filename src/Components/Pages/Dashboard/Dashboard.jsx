import React from "react";
import Home from "../Home/Home";
import About from "../About/About";
import Events from "../Events/Events";
import Contact from "../Contact/Contact";
import Schedule from "../Schedule/Schedule";

import Guidance from "../Guidance/Guidance";
import EditProfile from "../EditProfile/EditProfile";
import Profile from "../Profile/Profile";
import Sponsors from "../Sponsors/Sponsors";

const Dashboard = ({
  isProfileClicked,
  isEditProfile,
  setProfileClicked,
  setEditProfile,
  setTeamInfoPage,
  setMenuClicked,
  isMenuClicked,
  UserData,
  setUserData,
}) => {
  return (
    <>
      <Home />
      <About />
      <Events />
      {/* <Sponsors/> */}
      <Schedule />
      <Guidance />
      <Contact />

      <div className={isEditProfile ? "show" : "d-none"}>
        <EditProfile
          isProfileClicked={isProfileClicked}
          isEditProfile={isEditProfile}
          setProfileClicked={setProfileClicked}
          setEditProfile={setEditProfile}
          setTeamInfoPage={setTeamInfoPage}
          setMenuClicked={setMenuClicked}
          isMenuClicked={isMenuClicked}
          UserData={UserData}
        />
      </div>
      <div className={isProfileClicked ? "show" : "d-none"}>
        <Profile
          isProfileClicked={isProfileClicked}
          isEditProfile={isEditProfile}
          setProfileClicked={setProfileClicked}
          setEditProfile={setEditProfile}
          setTeamInfoPage={setTeamInfoPage}
          UserData={UserData}
          setUserData={setUserData}
        />
      </div>
    </>
  );
};

export default Dashboard;
