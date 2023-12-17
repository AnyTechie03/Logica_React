import React, { useEffect, useState } from "react";
import { notifyToast } from "../../Functions/notifyToast";
import "./EditProfile.css";

export default function EditProfile({
  isEditProfile,
  UserData,
  setEditProfile,
  setUserdata,
  success,
  error,
  avatar_female,
  avatar_male,
  error_general,
  setProfileClicked,
  isProfileClicked,
  setTeamInfoPage,
  setMenuClicked,
  isMenuClicked,
}) {
  const [userData, setUserData] = useState({
    _id: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    collegeName: "",
    gender: "",
    degree: "",
  });

  // Set initial user data when the component mounts
  useEffect(() => {
    setUserData({
      _id: UserData._id,
      firstName: UserData.firstName,
      lastName: UserData.lastName,
      phoneNumber: UserData.phoneNumber,
      collegeName: UserData.collegeName,
      gender: UserData.gender,
      degree: UserData.degree,
    });
  }, [UserData]);

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };
  // const Server_Host = 'http://localhost:6010';
  const Server_Host = 'https://logica-server.onrender.com'

  const HandleEditProfile = async (e) => {
    e.preventDefault();

    try {
      const { _id, firstName, lastName, phoneNumber, collegeName, gender, degree } = userData;

      const res = await fetch(Server_Host+"/UpUserData", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  credentials: "include",
  body: JSON.stringify({
    _id,
    firstName,
    lastName,
    phoneNumber,
    collegeName,
    gender,
    degree,
  }),
});


      if (res.status === 201) {
        notifyToast("Profile Updated", "success");
        setEditProfile(false);
                  setProfileClicked(true);
      } else if (res.status === 422) {
        notifyToast("Invalid Update, Data is Not Filled Properly", "error");
        const errorData = await res.json();
        if (errorData.message) {
          error(errorData.message);
        } else {
          error_general();
        }
      }
    } catch (err) {
      console.error(err);
      
    }
  };

  return (
    <div className={isProfileClicked ? "editprofile editprofile-active row" : "editprofile"}>
      <h2>Edit Profile</h2>
      <form >
        <label>Full Name</label>
        <br></br>
      
         <input
          type="text"
          name="firstName"
          id="firstName"
          value={userData.firstName}
          onChange={handleInputs} 
          required
        />
         <input
          type="text"
          name="lastName"
          id="lastName"
          value={userData.lastName}
          onChange={handleInputs} 
          required
        />
        <br></br>
        <label>Email</label>
        <br></br>
        <input
          type="email"
          name="email"
          id="email"
          value={UserData.email}
          disabled
        />
        <br></br>
        <label>Gender</label>
        <br></br>
        <select
          name="gender"
          id="gender"
          value={userData.gender}
          onChange={handleInputs} 
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">Others</option>
        </select>
        <br></br>
        <label>College/School Name</label>
        <br></br>
        <input
          type="text"
          name="collegeName"
          id="collegeName"
          value={userData.collegeName}
          onChange={handleInputs} 
          required
        />
        <br></br>
        <label>Degree</label>
        <br />
        <select
          name="degree"
          id="degree"
          value={userData.degree}
          onChange={handleInputs} 
        >
          <option value="" disabled hidden>
            --Select Degree--
          </option>
          <option value="B.E">Bachelor of Engineering</option>
          <option value="B.Tech">Bachelor of Technology</option>
          <option value="B.Sc">Bachelor of Science</option>
          <option value="BCA">Bachelor of Computer Application</option>
          <option value="MCA">Master of Computer Application</option>
          <option value="MSC">Master of Computer Science</option>
          <option value="M.Tech">Master of Technology</option>
          <option value="PhD">PhD or equivalent</option>
          <option value="Other">Other...</option>
        </select>
        <br></br>
        <label>Contact Number</label>
        <br></br>
        <input
          type="tel"
          maxLength="10"
          pattern="^[6-9]\d{9}$"
          className="tel-input"
          id="id_team_leader_tel_number"
          name="phoneNumber"
          placeholder="Phone Number"
          data-error="Please enter your Phone Number"
          value={userData.phoneNumber}
          onChange={handleInputs} 
          required
        />
        <br></br>
        <input type="button" onClick={HandleEditProfile} value="Update" />

      </form>
      <button
        type="cancel"
        className="edit-cancel"
        onClick={() => {
          setEditProfile(false);
          setProfileClicked(true);
        }}
      >
        Cancel
      </button>
    </div>
  );
}
