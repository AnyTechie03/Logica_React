import React from "react";
import "./Guidance.css";
import { Link } from "react-router-dom";
const Guidance = () => {
  return (
    <>
      <div className="gcontainer" id="Guidelines">
        <div className="container my-5 " id="guidelines">
          <div className="text-center mb-5">
            <h1 className="gHead" data-text="Event Guidelines">
              Event Guidelines
            </h1>
          </div>
          <div
            className="gMContainer"
            style={{ position: "relative", borderRadius: "25px" }}>
            <p className="text-start  text-white p-5">
              <h3 className="my-3" style={{ color: "rgb(8, 178, 170)" }}>
                Rules
              </h3>
              <ul className="text-light _ruleList_14ouo_59">
                <li>
                  {" "}
                  The SIMCA Logica will take place on
                  <span className="_hLight_14ouo_49">
                    {" "}
                    31st October 2023.
                  </span>{" "}
                </li>
                <li>
                  {" "}
                  A team can consist of 1 to 2 members. Every member of the team
                  must be a student of a university or a college.
                </li>
                <li>
                  {" "}
                  Participants are expected to behave professionally and
                  responsibly.
                </li>
                <li>Decisions made by organizers and judges are final.</li>

                <li>
                  {" "}
                  All updates regarding the event will be posted on Social Media
                  handles as well as mailed to each team.
                </li>
              </ul>
              <div>
                <Link to="/register" className="btn btn-brand my-3 btnreg">
                  Register Now
                </Link>
              </div>
              <div className="Toastify"></div>
              <ul className="text-light _ruleList_14ouo_59">
                <li>
                  NOTE: The order preference of the problem statements is solely
                  for our reference. We do not assure that the topic allocation
                  will be based on your top preferences only.
                </li>
                <li>
                  Last date for submission of Registration is{" "}
                  <span className="_hLight_14ouo_49">October 29th, 2023</span>
                </li>

                <li>
                  Registration Fees:
                  <ul>
                    <li>Individual: ₹100 per participant.</li>
                    <li>
                      Team (Pair of 2): ₹150 for the entire team (to be paid in
                      a single transaction).
                    </li>
                  </ul>
                </li>
                <li>In case of duplicate or fake entries found by any user, participants will be disqualified from any stage of the competition.</li>
                <li>
                  {" "}
                  All done, Your Participation is all set to seize the Unleash
                  The Unreal for SIMCA LOGICA'23 .
                </li>
              </ul>
              <div></div>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Guidance;
