import React, { useEffect, useState } from "react";
import "./FetchUser.css";
import { Link } from "react-router-dom";

export default function FetchUsers({ isFinialCall, setFinialCall }) {
  const [registration,setRegistration]=useState('')
  const [isquiz,setQuiz]=useState('')
  const [tresurehunt,setTresurehunt]=useState('')
  const [codinground,setCodinground]=useState('')
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
         const  count = UserList.length
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
      })
      fetch('https://logicabackend.onrender.com/AdminRounds',{
        method:"GET"
      }).then((res) => res.json())
      .then((data) =>{
        console.log(data.Current);
        // console.log(data.Current.registration);
        setRegistration(data.Current.registration)
        setQuiz(data.Current.level_1)
        setTresurehunt(data.Current.level_2)
        setCodinground(data.Current.level_3)
      })
  }, []);

  const handleRegistration = (stage,condition)=>{

    fetch('http://localhost:6010/roundSetting',{
      method:"POST",
      headers:{
        "Accept":'*/*',
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        stage,
        condition
      })
    }).then((res)=>console.log(res.status)) 

  }

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
                      onClick={() => {setRegistration(!registration);handleRegistration('registration',registration);}}>
                      {registration ? (
                        <>
                          <span className="text-success">Start Registration</span>
                        </>
                      ) : (
                        <>
                          <span className="text-danger">Stop Registration</span>
                        </>
                      )}
                    </h2>
                    <h2
                      className="btn "
                      onClick={() => {setQuiz(!isquiz); handleRegistration('level_1',isquiz);}}>
                      {isquiz ? (
                        <>
                          <span className="text-success">Start Quiz</span>
                        </>
                      ) : (
                        <>
                          <span className="text-danger">Stop Quiz</span>
                        </>
                      )}
                    </h2>
                   
                    <h2
                      className="btn "
                      onClick={() => {setTresurehunt(!tresurehunt);handleRegistration('level_2',tresurehunt);}}>
                      {tresurehunt ? (
                        <>
                          <span className="text-success">Start Tresure hunt</span>
                        </>
                      ) : (
                        <>
                          <span className="text-danger">Stop Tresure Hunt</span>
                        </>
                      )}
                    </h2>
                    <h2
                      className="btn "
                      onClick={() => {setCodinground(!codinground);handleRegistration('level_3',codinground);}}>
                      {codinground ? (
                        <>
                          <span className="text-success">Start Coding Round</span>
                        </>
                      ) : (
                        <>
                          <span className="text-danger">Stop Coding Round</span>
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
