import React, { useEffect, useState } from "react";
import "./FetchUser.css";
import { Link } from "@mui/icons-material";

export default function FetchUsers({ isFinialCall, setFinialCall }) {
  const [UserList, setList] = useState([]);
  const [uCount, setUcount] = useState(0);
  const [isL1Count, setL1count] = useState(0);
  const [isL2Count, setL2count] = useState(0);
  const [isL3Count, setL3count] = useState(0);
  useEffect(() => {
    fetch("https://logicabackend.onrender.com/fetchUser", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setList(data.data);
        if (UserList) {
          const count = UserList.length;
          // Count for each level
          const Level_1Count = UserList.filter((user) => user.Level_1).length;
          const Level_2Count = UserList.filter((user) => user.Level_2).length;
          const Level_3Count = UserList.filter((user) => user.Level_3).length;

          // Update the state variables
          setL1count(Level_1Count);
          setL2count(Level_2Count);
          setL3count(Level_3Count);
          setUcount(count);
        } else {
          setUcount(0);
          setL1count(0);
          setL2count(0);
          setL3count(0);
        }
      });
  }, []);

  return (
    <>
      <div className="body">
        <div className="container col">
          <div className="dashboard row">
            <div className="col-md-12 d1 d-flex g-3">
              <div className="col-md-6 d1c1">
                <h4>Dashboard</h4>

                <div className="row">
                  <div className="col-md-6">
                    <div className="card c1">
                      <div className="card-body cb">
                        <Link to="/UserDash">
                          <h2 className="btn">
                            User's <span>{" " + uCount}</span>
                          </h2>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card c1">
                      <div className="card-body">
                        <Link to="/Quiz">
                          <h2 className="btn ">
                            Quiz <span> {isL1Count}</span>
                          </h2>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="card c1">
                      <div className="card-body">
                        <Link to="/TresureHunt">
                          <h2 className="btn">
                            Tresure Hunt <span>{" " + isL2Count}</span>
                          </h2>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card c1">
                      <div className="card-body">
                        <Link to="/CodingRound">
                          <h2 className="btn ">
                            Coding Round <span> {isL3Count}</span>
                          </h2>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 d2 disabled">
                <div className="card c2">
                  <div className="card-body">
                    <h2
                      className="btn "
                      onClick={() => setFinialCall(!isFinialCall)}>
                      {isFinialCall ? (
                        <>
                          <span className="text-success">Start The Game</span>
                        </>
                      ) : (
                        <>
                          <span className="text-danger">Stop The Game</span>
                        </>
                      )}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
