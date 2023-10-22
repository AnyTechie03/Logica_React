import React,{useState} from "react";
import FormInput from "./FormInput";

const RegStep2 = ({ handleChange, values,setTeamMembers,isTeamMember }) => {
  const [cities, setCities] = useState([]);

  const handleStateChange = (event) => {
    switch (event.target.value) {
      case "Andhra Pradesh":
        setCities(["Hyderabad", "Visakhapatnam", "Vijayawada", "Guntur"]);
        break;
      case "Arunachal Pradesh":
        setCities(["Itanagar", "Tawang", "Namsai", "Changlang"]);
        break;
      case "Assam":
        setCities(["Guwahati", "Dispur", "Tezpur", "Jorhat"]);
        break;
      case "Bihar":
        setCities(["Patna", "Gaya", "Bhagalpur", "Muzaffarpur"]);
        break;
      case "Chhattisgarh":
        setCities(["Raipur", "Bhilai", "Bilaspur", "Korba"]);
        break;
      case "Goa":
        setCities(["Panaji", "Margao", "Vasco da Gama", "Mapusa"]);
        break;
      case "Gujarat":
        setCities(["Ahmedabad", "Surat", "Vadodara", "Rajkot"]);
        break;
      case "Haryana":
        setCities(["Chandigarh", "Faridabad", "Gurgaon", "Hisar"]);
        break;
      case "Himachal Pradesh":
        setCities(["Shimla", "Mandi", "Dharamshala", "Solan"]);
        break;
      case "Jharkhand":
        setCities(["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro Steel City"]);
        break;
      case "Karnataka":
        setCities(["Bangalore", "Mysore", "Hubli", "Mangalore"]);
        break;
      case "Kerala":
        setCities(["Thiruvananthapuram", "Kochi", "Kozhikode", "Kollam"]);
        break;
      case "Maharashtra":
        setCities(["Mumbai", "Pune", "Nagpur", "Thane"]);
        break;
      case "Madhya Pradesh":
        setCities(["Indore", "Bhopal", "Jabalpur", "Gwalior"]);
        break;
      case "Manipur":
        setCities(["Imphal", "Thoubal", "Bishnupur", "Churachandpur"]);
        break;
      case "Meghalaya":
        setCities(["Shillong", "Tura", "Nongstoin", "Baghmara"]);
        break;
      case "Mizoram":
        setCities(["Aizawl", "Lunglei", "Champhai", "Serchhip"]);
        break;
      case "Nagaland":
        setCities(["Kohima", "Dimapur", "Mokokchung", "Tuensang"]);
        break;
      case "Odisha":
        setCities(["Bhubaneswar", "Cuttack", "Rourkela", "Berhampur"]);
        break;
      case "Punjab":
        setCities(["Chandigarh", "Ludhiana", "Amritsar", "Jalandhar"]);
        break;
      case "Rajasthan":
        setCities(["Jaipur", "Jodhpur", "Udaipur", "Ajmer"]);
        break;
      case "Sikkim":
        setCities(["Gangtok", "Namchi", "Rangpo", "Mangan"]);
        break;
      case "Tamil Nadu":
        setCities(["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli"]);
        break;
      case "Tripura":
        setCities(["Agartala", "Udaipur", "Dharmanagar", "Kailasahar"]);
        break;
      case "Telangana":
        setCities(["Hyderabad", "Warangal", "Karimnagar", "Nizamabad"]);
        break;
      case "Uttar Pradesh":
        setCities(["Lucknow", "Kanpur", "Varanasi", "Agra"]);
        break;
      case "Uttarakhand":
        setCities(["Dehradun", "Haridwar", "Roorkee", "Haldwani"]);
        break;
      case "West Bengal":
        setCities(["Kolkata", "Asansol", "Siliguri", "Durgapur"]);
        break;
      case "Andaman and Nicobar Islands":
        setCities(["Port Blair", "Havelock Island", "Neil Island"]);
        break;
      case "Chandigarh":
        setCities(["Chandigarh"]);
        break;
      case "DNHDD":
        setCities(["Daman", "Diu", "Silvassa", "Kavaratti"]);
        break;
      case "Delhi":
        setCities(["New Delhi", "North Delhi", "South Delhi", "West Delhi"]);
        break;
      case "Jammu and Kashmir":
        setCities(["Srinagar", "Jammu", "Anantnag", "Baramulla"]);
        break;
      case "Ladakh":
        setCities(["Leh", "Kargil", "Nubra Valley"]);
        break;
      case "Lakshadweep":
        setCities(["Kavaratti", "Agatti", "Andrott", "Amini"]);
        break;
      case "Puducherry":
        setCities(["Pondicherry", "Karaikal", "Mahe", "Yanam"]);
        break;
      default:
        setCities([]);
        break;
    }
  };
  return (
    <>
    
    <div className="container reg-container">
        <div className="row">
        {isTeamMember ? <>
          <div className="col-md-3">
            <FormInput
              type="text"
              id="id_team_name"
              name="teamName"
              placeholder="Team Name"
              data-error="Please enter your name"
              required="true"
              value={values.teamName}
              handleChange={handleChange}
            />

          </div>
          </> : <>
         
          </>}
          <div className="col-md-3">
            <FormInput
              type="text"
              pattern="[A-Za-z]+"
              id="id_team_leader_name"
              name="firstName"
              placeholder="First Name"
              data-error="Please enter your First name"
              required="true"
              value={values.firstName}
              handleChange={handleChange}
            />
          </div>
          <div className="col-md-3">
            <FormInput
              type="text"
              pattern="[A-Za-z]+"
              id="id_team_leader_name"
              name="lastName"
              placeholder="Last Name"
              data-error="Please enter your Last name"
              required=""
              value={values.lastName}
              handleChange={handleChange}
            />
          </div>
          <div className="col-md-3">
            <FormInput
              type="tel"
              maxLength="10"
              pattern="^[6-9]\d{9}$"
              className="tel-input"
              id="id_team_leader_tel_number"
              name="phoneNumber"
              placeholder="Phone Number"
              data-error="Please enter your Phone Number"
              required="true"
              value={values.phoneNumber}
              handleChange={handleChange}
            />
          </div>
        </div>
       
        <div className="row">


          <div className="col-md-3">
            <div className="flex-item p-0 m-0">
              <label className="form-heading secondary" htmlFor="id_team_leader_gender">
                Gender<span style={{ color: "tomato" ,fontFamily:'san-serif'}}> *</span>
                <div className="iconInputContainer">
                  <select
                    className="Form-input name form-select"
                    name="gender"
                    id="id_team_leader_gender"
                    value={values.gender}
                    onChange={handleChange}
                  >
                    <option value="" disabled hidden>
                      --Gender--
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="female">Other</option>
                    <option value="female">Prefer Not Say</option>
                  </select>
                </div>
              </label>
            </div>
          </div>
          <div className="col-md-3">
            <FormInput
              type="text"
              id="id_team_leader_college_name"
              name="collegeName"
              placeholder="College Name"
              pattern="^[A-Za-z]+( [A-Za-z]+)*$"
              data-error="Please enter your College name"
              required="true"
              value={values.collegeName}
              handleChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <div className="flex-item p-0 m-0">
              <label className="form-heading secondary" htmlFor="id_team_leader_gender">
                Degree<span style={{ color: "tomato" ,fontFamily:'san-serif'}}> *</span>

                <div className="iconInputContainer">
                  <select
                    className="Form-input name form-select "
                    name="degree"
                    onChange={handleChange}
                    placeholder="Degree"
                    data-error="Please enter your degree name"
                    value={values.degree}

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
                </div>
              </label>
            </div>
          </div>
        </div>

        <div className="row">

          <div className="col-md-6">
            <div className="flex-item p-0 m-0">
              <label className="form-heading secondary" htmlFor="">
                Department<span style={{ color: "tomato" ,fontFamily:'san-serif'}}> *</span>

                <div className="iconInputContainer">
                  <select
                    className="Form-input name form-select "
                    name="department"
                    onChange={handleChange}
                    placeholder="department"
                    data-error="Please enter your department name"
                    value={values.department}
                  >
                    <option value="" disabled hidden>
                      --Select Department--
                    </option>
                    <option value="Computer Engineering">Computer Engineering</option>
                    <option value="Information Technology">Information Technology</option>
                    <option value="Computer Engineering and Data Science">Computer Engineering and Data Science</option>
                    <option value="Artificial Intelligence and Data Science">Artificial Intelligence and Data Science</option>
                    <option value="Mechanical Engineering">Mechanical Engineering</option>
                    <option value="Electronics and Telecommunication Engineering">Electronics and Telecommunication Engineering</option>
                    <option value="Instrumentation engineering">Instrumentation engineering</option>
                    <option value="Civil Engineering">Civil Engineering</option>
                    <option value="Other">Other...</option>

                  </select>
                </div>
              </label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="flex-item p-0 m-0">
              <label className="form-heading secondary" htmlFor="id_team_leader_gender">
                Academic Year<span style={{ color: "tomato" ,fontFamily:'san-serif'}}> *</span>
                <div className="iconInputContainer">
                  <select
                    className="Form-input name form-select "
                    name="year"
                    id="id_team_leader_year"
                    value={values.year}
                    onChange={handleChange}

                  >
                    <option value="" disabled hidden>
                      --Select Year--
                    </option>

                    <option value="FE">
                      First Year
                    </option>
                    <option value="SE">
                      Second Year
                    </option>
                    <option value="TE">
                      Third Year
                    </option>
                    <option value="BE">
                      Fourth Year
                    </option>

                  </select>
                </div>
              </label>
            </div>
          </div>
        </div>


        <div className="row">


          <div className="col-md-3">
            {/* <FormInput
              type="number"
              maxLength="6"
              pattern="[0-9]{6}"
              
              id="id_team_leader_pincode"
              name="pinCode"
              placeholder="Pin Code"
              data-error="Please enter your Pincode name"
              required="true"
              value={values.pinCode}
              handleChange={handleChange}
            /> */}
            <FormInput
              type="number"
              minLength="6"
              maxLength="6"
              pattern="[0-9]{6}"
              id="id_team_leader_pincode"
              name="pinCode"
              placeholder="PinCode"
              data-error="Please enter Your pinCode Number"
              required="true"
              value={values.pinCode}
              handleChange={handleChange}
            />
          </div>
          <div className="col-md-5">
            <div className="flex-item p-0 m-0">
              <label className="secondary" htmlFor="vDesc">
                State:<span style={{ color: "tomato" ,fontFamily:'san-serif'}}> *</span>
                <div className="iconInputContainer">
                  <select
                    name="state"
                    onChange={(event) => {
                      handleChange(event);
                      handleStateChange(event);
                    }}
                    value={values.state}
                    className="Form-input name form-select"
                  >
                    <option value="" disabled hidden>
                      --Select State--
                    </option>
                    <optgroup label="States">
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                      <option value="Assam">Assam</option>
                      <option value="Bihar">Bihar</option>
                      <option value="Chhattisgarh">Chhattisgarh</option>
                      <option value="Goa">Goa</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Haryana">Haryana</option>
                      <option value="Himachal Pradesh">Himachal Pradesh</option>
                      <option value="Jharkhand">Jharkhand</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Kerala">Kerala</option>
                      <option value="Madhya Pradesh">Madhya Pradesh</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Manipur">Manipur</option>
                      <option value="Meghalaya">Meghalaya</option>
                      <option value="Mizoram">Mizoram</option>
                      <option value="Nagaland">Nagaland</option>
                      <option value="Odisha">Odisha</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="Sikkim">Sikkim</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Telangana">Telangana</option>
                      <option value="Tripura">Tripura</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="Uttarakhand">Uttarakhand</option>
                      <option value="West Bengal">West Bengal</option>
                    </optgroup>
                    <optgroup label="Union Territories">
                      <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                      <option value="Chandigarh">Chandigarh</option>
                      <option value="DNHDD">DNHDD</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Lakshadweep">Lakshadweep</option>
                      <option value="Puducherry">Puducherry</option>
                    </optgroup>
                  </select>
                </div>
              </label>
            </div>
          </div>

          <div className="col-md-4">

            {cities.length > 0 && (
              <div className="flex-item p-0 m-0 ">
                <label htmlFor="city">Select City:<span style={{ color: "tomato" ,fontFamily:'san-serif'}}> *</span>
                  <div className="iconInputContainer">
                    <select
                      id="addrcity"
                      name="city"
                      onChange={handleChange}
                      value={values.city}
                      className="Form-input name form-select "
                    >
                      <option value="" disabled hidden>
                        --Select City--
                      </option>
                      {cities.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>
                </label>
              </div>
            )}
          </div>

        </div>
        <div className="row">
        {isTeamMember ? <>
        <h3 className="h5 text-white col-md-12  text-center">Team Member Detail</h3>
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
      </> : <></>}
      </div>

      </div>

    </>
  );
};

export default RegStep2;
