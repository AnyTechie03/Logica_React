import React, { Component, useEffect, useState } from "react";
import pBorder from '../../../assets/img/profile_name_border.png'
import uProfileref from '../../../assets/img/uProfileref.webp'

import "./Profile.css";
import { Link ,useNavigate} from "react-router-dom";






export default function Profile({isProfileClicked,setProfileClicked,setEditProfile,isEditProfile,setTeamInfoPage,UserData,setUserData}) {
   



  const getProfile = async () => {

    try {
      const res = await fetch("https://angry-moon-10536.pktriot.net/getdata", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: 'include',
      });

      const data = await res.json();
      setUserData(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }else{
        // setloading(false);
      }


    } catch (err) {
      console.log(err);
      navigate("/Login");
    }
  }
  useEffect(()=>{
    getProfile()
  },[isEditProfile]);
  const navigate = useNavigate();
  return (
    <>
    
    {/* <div className={isProfileClicked ? "profile profile-active container" : "profile"}>
    <div className="row">
    <div className="Pxmark row">
    <i className="fa-solid fa-xmark" style={{ color: "#fff"}} onClick={() => setProfileClicked(!isProfileClicked)}></i>
    </div>
<div className="profile-left col-5">
  <div className="row">

<img
          src={
            uProfileref
          }
          alt="avatar"
          className="profile-image"
          ></img>
          </div>

          <div className="row puserName">
  <img src={pBorder} alt="" className="name-border" />
  <p className="name m-0  p-0">
    {UserData.firstName}
  </p>
</div>
       
        
        <p className="">College Name: {UserData.collegeName}</p>
        <p className="">Email: {UserData.email}</p>
        <p className="">Mobile Num.: {UserData.phoneNumber}</p>
        
</div>
<div className="profile-right col-5">

</div>
    
      
    </div>
    </div> */}


<div className={isProfileClicked ? "profile profile-active" : "profile"}>
  
      <div className="profile-left">
    <i className="fa-solid fa-xmark pl-2 pt-1 mt-0 " style={{ color: "tomato",fontSize:'25px',top:'0'}} onClick={() => setProfileClicked(!isProfileClicked)}></i>
      <div className="Pxmark row">
    </div>
        <img
          src={uProfileref}
          alt="avatar"
          className="profile-image"
        ></img>
        {/* src={UserData.imgurl.substr(UserData.imgurl.length-5, UserData.imgurl.length-1)==="null"? "img/user_placeholder.png" : UserData.imgurl)} */}
        <img src={pBorder} alt="" className="name-border"></img>
<div className="text-center">

        <p className="name">{UserData.firstName}</p>
        <p className="">College Name: {UserData.collegeName}</p>
        <p className="">Email: <br/>{UserData.email}</p>
        <p className="">Mobile Num.:{UserData.phoneNumber}</p>
        {UserData.Level_1_Score || UserData.Level_2_Score || UserData.Level_3_Score ? (
 <p className="score">Score : <span> {UserData.Level_1_Score + UserData.Level_2_Score + UserData.Level_3_Score}</span> - 500 </p>
   ) : (
    <></>
  )}
  </div>
      </div>
      <div className="profile-right">
      <div className="participated-events">
          <h2>Participated Level</h2>
       
<div className="text-left pl-3 pt-3">
{UserData.Level_1 ? (
  <p className="score">Level 1: <span className="text-success">Passed</span> (Level 1 Clear! You're now eligible for Level 2. Happy Hunting! 🔎🙌🥳)</p>
) : (
  <></>
)}

{UserData.Level_2 ? (
  <p className="score">Level 2: <span className="text-success">Passed</span> (Level 2 Clear! You're now eligible for Level 3. Happy Coding! 💻⌨🖱🙌🥳)</p>
) : (
  <></>
)}

{UserData.Level_3 ? (
  <p className="score">Level 3: <span className="text-success">Passed</span> (Level 3 Clear! Yo Boy You Win The Game 🙌🥳)</p>
) : (
  <></>
)}
{UserData.Level_1_Score || UserData.Level_2_Score || UserData.Level_3_Score ? (
 <p className="score">Score : <span> {UserData.Level_1_Score + UserData.Level_2_Score + UserData.Level_3_Score}</span> - 500 </p>
   ) : (
    <></>
  )}
</div>
<hr/>
<div className="text-left pl-3">
{UserData.teamMembers  ? (
  <>

            <ol>
              {UserData.teamMembers.map((item, i) => {
                if(item.firstName==null){
return ''
                }else{

                  return <>
<p className="score"> Name Of The Team Mates</p>
                <li className="score">{item.firstName1}{item.lastName1}</li>
                </>
                }
              })}
            </ol>
            </>
          ) : (
            <p></p>
          )}
          </div>
        </div>
        <div className="profile-buttons">
          <div>
            <div className="buttons">
              <a
                className="edit"
                onClick={() => {
                  setEditProfile(true);
                  setProfileClicked(false);
                }}
              >
                Edit Profile
              </a>
        
             
              {/* <Link className="log-out login-signup-btn docs-creator" onClick={() => { Logout(); navigate("/login ") }}>
          <div className="d-flex">
            Logout
          </div> */}
        {/* </Link> */}
              
            </div>
          </div>
        </div>
        </div>
    </div>
    </>
  );
}

// import React, { Component,useEffect,useState } from 'react'
// import { GoogleLogin, GoogleLogout } from 'react-google-login';
// import "./Profile.css"
// import { gapi } from 'gapi-script';

// export default function Profile({isProfileClicked,auth_reset,auth_continue,UserData}) {

//     const clientId = '433800136317-usopqpji8k1tu6u1pq1r2t689j091p65.apps.googleusercontent.com';

//     return (
//         <div className={isProfileClicked ? "profile profile-active" : "profile"}>
//             <img src="" alt=""></img>
//             <div className="profile-left">
//                 <img src="img/avatar1.png" alt="avatar" className="profile-image"></img>
//                 <img src="img/profile_name_border.png" alt="" className="name-border"></img>

//                 <p className="name">{UserData.firstName}</p>
//                 <p>{UserData.college}</p>
//                 <p>{UserData.email}</p>
//                 <p>{UserData.mobile}</p>
//                 {/* <p className="score"> <span> Score </span> - 500 </p> */}

//             </div>
//             <div className="profile-right">
//                 <div className="participated-events">
//                     <h2>Participated Events</h2>
//                     <ol>
//                        <li>Treasure Hunt</li>
//                        <li>Beat The Street</li>
//                        <li>Hack Overflow</li>
//                        <li>Bridge Builder</li>
//                        <li>Front End Challange</li>
//                        <li>Play With Microbit</li>
//                     </ol>
//                 </div>
//                 <div className="profile-buttons">

//                     <div>

//                         <div >
//                         <a className="edit">Edit Profile</a>
//                         <GoogleLogout
//                         render={renderProps => (
//                             <a className="log-out" onClick={renderProps.onClick} disabled={renderProps.disabled}>Log Out</a>
//                         )}
//                             clientId={clientId}
//                             buttonText="Logout"
//                             onLogoutSuccess={() => {console.log('loggedout successfully');auth_reset()}}
//                             onLogoutFailure={(err) => {console.log(err);auth_continue()}}
//                         />

//                         </div>
//                         </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
