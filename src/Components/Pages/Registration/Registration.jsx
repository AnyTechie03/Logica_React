// import React, { useState } from "react";
// import "./Registration.css";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";

// const Registration = () => {
//   const navigate = useNavigate();

//   const notify = (message, type) => {
//     switch (type) {
//       case "Success":
//         toast.success(message, {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "dark",
//         });
//         break;
//       case "Error":
//         toast.error(message, {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "dark",
//         });
//         break;
//       default:
//         break;
//     }
//   };

//   const [formData, setFormData] = useState({
//     teamName: "",
//     firstName: "",
//     lastName: "",
//     email: "",
//     phoneNumber: "",
//     gender: "",
//     collegeName: "",
//     degree: "",
//     year: "",
//     department: "",
//     pinCode: "",
//     city: "",
//     state: "",
//     password: "",
//     teamMembers: [],
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleTeamMemberChange = (e, index) => {
//     const { name, value } = e.target;
//     const updatedTeamMembers = [...formData.teamMembers];
//     updatedTeamMembers[index] = { ...updatedTeamMembers[index], [name]: value };
//     setFormData({ ...formData, teamMembers: updatedTeamMembers });
//   };

//   const [isVisible, setIsVisible] = useState(false);

//   const toggleVisibility = () => {
//     setIsVisible(!isVisible);
//   };

//   const addTeamMember = () => {
//     if (formData.teamMembers.length < 3) {
//       setFormData({
//         ...formData,
//         teamMembers: [...formData.teamMembers, { firstName: "", lastName: "" }],
//       });
//     }
//   };

//   const removeTeamMember = (index) => {
//     if (formData.teamMembers.length > 0) {
//       const updatedTeamMembers = formData.teamMembers.filter((_, i) => i !== index);
//       setFormData({ ...formData, teamMembers: updatedTeamMembers });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch("/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           formData,
//         }),
//       });

//       switch (res.status) {
//         case 422:
//           notify("Email Already Registered", "Error");
//           break;
//         case 500:
//           notify("Internal Server Error", "Error");
//           break;
//         case null:
//           notify("Invalid Credentials", "Error");
//           break;
//         case 201:
//           notify("Let's Go Coding....", "Success");
//           navigate('/login');
//           break;
//         default:
//           break;
//       }
//     } catch (error) {
//       console.error("Error submitting registration:", error);
//       notify("Failed to register", "Error");
//     }
//   };


//   return (
//     <>
//       <form className="form-main-container marginal " onSubmit={handleSubmit}>
//         <h3 className="form-h3">Team Details</h3>
//         <div className="row justify-content-around">
//           <div className="team-leader-container col-4">
//             <div className="details-container form-grid ">
//               <label className="form-heading" htmlFor="id_team_name">
//                 Team Name<span style={{ color: "tomato" }}> *</span>
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="id_team_name"
//                 name="teamName"
//                 placeholder="Team Name"
//                 data-error="Please enter your name"
//                 required="true"
//                 value={formData.teamName}
//                 onChange={handleChange}
//               />

//               <label className="form-heading" htmlFor="id_team_name">
//                 Team Leader<span style={{ color: "tomato" }}> *</span>
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 pattern="[A-Za-z]+"
//                 id="id_team_leader_name"
//                 name="firstName"
//                 placeholder="First Name"
//                 data-error="Please enter your First name"
//                 required="true"
//                 value={formData.firstName}
//                 onChange={handleChange}
//               />
//               <input
//                 type="text"
//                 className="form-control"
//                 pattern="[A-Za-z]+"
//                 id="id_team_leader_name"
//                 name="lastName"
//                 placeholder="Last Name"
//                 data-error="Please enter your Last name"
//                 required=""
//                 value={formData.lastName}
//                 onChange={handleChange}
//               />

//               <input
//                 type="email"
//                 className="form-control email-input"
//                 id="id_team_leader_email"
//                 name="email"
//                 placeholder="Email (All notifications will be sent to this mail.)"
//                 data-error="Please enter your Email"
//                 required="ture"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//               <input
//                 type="password"
//                 className="form-control"
//                 pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!])(?!.*\s).{8,}$"
//                 id="password"
//                 name="password"
//                 placeholder="password"
//                 data-error="Enter Valid password"
//                 required="true"
//                 value={formData.password}
//                 onChange={handleChange}
//               />

//               <input
//                 type="number"
//                 maxLength="10"
//                 pattern="^[6-9]\d{9}$"
//                 className="form-control half-form tel-input"
//                 id="id_team_leader_tel_number"
//                 name="phoneNumber"
//                 placeholder="Phone Number"
//                 data-error="Please enter your team name"
//                 required="true"
//                 value={formData.phoneNumber}
//                 onChange={handleChange}
//               />

//               <select
//                 className="form-control half-form"
//                 name="gender"
//                 id="id_team_leader_gender"
//                 value={formData.gender}
//                 onChange={handleChange}>
//                 <option className="form-control" disabled="" hidden="" value="">
//                   Gender
//                 </option>
//                 <option className="form-control" value="male">
//                   Male
//                 </option>
//                 <option className="form-control" value="female">
//                   Female
//                 </option>
//               </select>

//               <input
//                 type="text"
//                 className="form-control"
//                 id="id_team_leader_college_name"
//                 name="collegeName"
//                 placeholder="College Name"
//                 pattern="^[A-Za-z]+( [A-Za-z]+)*$"
//                 data-error="Please enter your College name"
//                 required="true"
//                 value={formData.collegeName}
//                 onChange={handleChange}
//               />

//               <input
//                 type="text"
//                 pattern="^[A-Za-z.]+( [A-Za-z.]+)*$"
//                 list="degree5"
//                 className="form-control half-form tel-input"
//                 name="degree"
//                 required="true"
//                 placeholder="Degree"
//                 data-error="Please enter your team name"
//                 value={formData.degree}
//                 onChange={handleChange}
//               />
//               <datalist id="degree5">
//                 <option value="B.E">Bachelor of Engineering</option>
//                 <option value="B.Tech">Bachelor of Technology</option>
//                 <option value="B.Sc">Bachelor of Science</option>
//                 <option value="BCA">Bachelor of Computer Application</option>
//                 <option value="MCA">Master of Computer Application</option>
//               </datalist>

//               <select
//                 className="form-control half-form"
//                 name="year"
//                 id="id_team_leader_gender"
//                 value={formData.year}
//                 onChange={handleChange}>
//                 <option className="form-control" disabled="" hidden="" value="">
//                   Year
//                 </option>
//                 <option className="form-control" value="FE">
//                   First Year
//                 </option>
//                 <option className="form-control" value="SE">
//                   Second Year
//                 </option>
//                 <option className="form-control" value="TE">
//                   Third Year
//                 </option>
//                 <option className="form-control" value="BE">
//                   Fourth Year
//                 </option>
//               </select>

//               <input
//                 type="text"
//                 pattern="^[A-Za-z\s]+$"
//                 list="department09"
//                 className="form-control half-form"
//                 id="id_team_leader_college_name"
//                 name="department"
//                 placeholder="Department"
//                 data-error="Please enter your Department name"
//                 required=""
//                 value={formData.department}
//                 onChange={handleChange}
//               />
//               <datalist id="department09">
//                 <option value="Computer Engineering"></option>
//                 <option value="Information Technology"></option>
//                 <option value="Computer Engineering and Data Science"></option>
//                 <option value="Artificial Intelligence and Data Science"></option>
//                 <option value="Mechanical Engineering"></option>
//                 <option value="Electronics and Telecommunication Engineering"></option>
//                 <option value="Instrumentation engineering"></option>
//                 <option value="Civil Engineering"></option>
//               </datalist>

//               <input
//                 type="number"
//                 maxLength="6"
//                 pattern="[0-9]{6}"
//                 className="form-control half-form tel-input"
//                 id="id_team_leader_tel_number"
//                 name="pinCode"
//                 placeholder="Pin Code"
//                 data-error="Please enter your Pincode name"
//                 required="true"
//                 value={formData.pinCode}
//                 onChange={handleChange}
//               />

//               <input
//                 type="text"
//                 pattern="^[A-Za-z\s]+$"
//                 placeholder="City "
//                 className="form-control half-form"
//                 name="city"
//                 id="city_name"
//                 required="true"
//                 value={formData.city}
//                 onChange={handleChange}
//               />
//               <input
//                 type="text"
//                 pattern="^[A-Za-z\s]+$"
//                 placeholder="State "
//                 className="form-control half-form"
//                 name="state"
//                 id="state_name"
//                 required="true"
//                 value={formData.state}
//                 onChange={handleChange}
//               />

// {isVisible ? (
//           <>
//             <h3 className="form-h3 form-heading">Team Members</h3>
//             {formData.teamMembers.map((member, index) => (
//              <>
//                 <h3 className="form-h3 form-heading">{index + 1}</h3>
//                 <input
//                   type="text"
//                   className="form-control"
//                   pattern="[A-Za-z]+"
//                   name={`teamMembers[${index}].firstName`}
//                   placeholder="First Name"
//                   data-error="Please enter your First name"
//                   required="true"
//                   value={member.firstName}
//                   onChange={ handleTeamMemberChange}
//                 />
//                 <input
//                   type="text"
//                   className="form-control"
//                   pattern="[A-Za-z]+"
//                   name={`teamMembers[${index}].lastName`}
//                   placeholder="Last Name"
//                   data-error="Please enter your Last name"
//                   required=""
//                   value={member.lastName}
//                   onChange={ handleTeamMemberChange}
//                 />

//                 {index >= 0 && (
//                   <button
//                     type="button"
//                     className="btn btn-remove-member half-form"
//                     onClick={() => removeTeamMember(index)}
//                     style={{ fontSize: "20px" }}
//                   >
//                     Remove
//                   </button>
//                 )}
//               </>
//             ))}
//           </>
//         ) : (
//           <>
//             <button
//               type="button"
//               className="btn btn-add-member half-form"
//               style={{ fontSize: "20px", marginRight: "0%", width: "100%" }}
//               onClick={toggleVisibility}
//             >
//               Add Member
//             </button>
//           </>
//         )}

// {formData.teamMembers.length < 3 && (
//           <button
//             type="button"
//             className="btn btn-add-member half-form"
//             style={{ fontSize: "20px", marginRight: "0%", width: "100%" }}
//             onClick={addTeamMember}
//           >
//             Add Member
//           </button>
//         )}



//             </div>
//           </div>
//         </div>

//         <div style={{ textAlign: "center" }}>

//           <button
//             className="btn btn-brand text-light px-5 my-5 "
//             type="submit"
//             style={{ fontSize: "20px" }}>
//             <span className="d-flex justify-content-center align-items-center ">
//               Submit &nbsp;
//               <span className="loader" style={{ display: "none" }}>
//                 <span className="loader-wheel"></span>
//               </span>
//             </span>
//           </button>
//         </div>
//       </form>
     
//     </>
//   );
// };

// export default Registration;
