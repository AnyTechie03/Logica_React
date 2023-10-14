import React, { useEffect, useState } from "react";
import "./Tresurehunt.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function Tresurehunt() {
  const [allowclick, setallowclick] = useState(false);

  const notify = (message) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const successnotify = (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  let navigate = useNavigate();
  
  useEffect(() => {
    fetch("https://logicabackend.onrender.com/validateRound").then((response) => {
      console.log(response.status);
      if (response.status === 401) {
        setallowclick(false);
      } 
      else if(response.status === 500){
        notify("Internal Server Issue...")
        setallowclick(false)
      }
      else{
        // successnotify(`Let's Hunt It..`);
        setallowclick(true);
      }
    });
  },[]);

  const navigateLevel = (e) => {
    navigate(e);
  };

  if (!allowclick) {
    return (
      <div className="TresureContainer" onClick={()=>{notify("Round 1 Not cleared")}}>
        <div className="Levels">
          <p>Level 1</p>
        </div>

        <div className="Levels">
          <p>Level 2</p>
        </div>

        <div className="Levels" >
          <p>Level 3</p>
        </div>

        <div className="Levels">
          <p>Level 4</p>
        </div>

        <div className="Levels" >
          <p>Level 5</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="TresureContainer Container">
        <div className="Levels" onClick={() => navigateLevel("TresureHunt1")}>

        </div>

        <div className="Levels" onClick={() => navigateLevel("TresureHunt2")}>
          <p>Level 2</p>
        </div>

        <div className="Levels" onClick={() => navigateLevel("TresureHunt3")}>
          <p>Level 3</p>
        </div>

        <div className="Levels" onClick={() => navigateLevel("TresureHunt4")}>
          <p>Level 4</p>
        </div>

        <div className="Levels" onClick={() => navigateLevel("TresureHunt5")}>
          <p>Level 5</p>
        </div>
      </div>
    );
  }
}
