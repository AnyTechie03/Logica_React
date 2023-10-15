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
    checkUniversal();
  }, []);

  const checkUniversal = () => {
    fetch("https://logicabackend.onrender.com/checkuniversal", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      withCredentials: true,
      credentials: "include",
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.Universal[0].level_2) {
          console.log("Tresure Hunt Has Started");

          fetch("https://logicabackend.onrender.com/TresureHuntValidate", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            withCredentials: true,
            credentials: "include",
            body: JSON.stringify({ levelat: 1 }),
          }).then((response) => {
            console.log(response.status);
            if (response.status === 401) {
              setallowclick(false);
            } else {
              // successnotify(`Let's Hunt It..`);
              setallowclick(true);
            }
          });
        } else {
          console.log("Tresure Hunt has not started by the Admin");
          setallowclick(false);
        }
      });
  };
  const navigateLevel = (e) => {
    navigate(e);
  };

  if (!allowclick) {
    return (
      <div className="TresureContainer">
        <div
          className="Levels"
          onClick={() => {
            notify("Quiz Round Not cleared");
          }}>
          <p>Level 1</p>
        </div>

        <div className="Levels">
          <p>Level 2</p>
        </div>

        <div className="Levels">
          <p>Level 3</p>
        </div>

        <div className="Levels">
          <p>Level 4</p>
        </div>

        <div className="Levels">
          <p>Level 5</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="TresureContainer Container">
        <div className="Levels" onClick={() => navigateLevel("TresureHunt1")}>
          <p>Level 1</p>
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
