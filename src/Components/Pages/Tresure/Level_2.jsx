import React, { useEffect, useState } from "react";
import "./Level.css"
import "./Tresurehunt.css";
import Gloading from "../Loading/Gloading";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Level_2() {
  const [L2input, setinput] = useState("");
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://angry-moon-10536.pktriot.net/TresureHuntValidate", {
            method: "POST",
            headers: {
              Accept: "*/*",
              "Content-Type": "application/json",
            },
      credentials: "include",
      body:JSON.stringify({levelat:2})
      
    }).then((res) => {
      switch (res.status) {
        case 201:
          setLoading(false);
          break;
        case 401:
          setLoading(true);
          break;

        default:
          setLoading(true);
          break;
      }
    });
  });
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
  const navigate = useNavigate()
  const handlesubmit = () => {
    const res = fetch("https://angry-moon-10536.pktriot.net/TresureHunt2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ L2input }),
    });
    res.then((e) => {
      if (e.status === 201) {
    
        successnotify("Level 2 Cleared Successfully");
     
        navigate('/TresureHunt');
      } else if(e.status === 401){
       
        notify("Sorry the Answer Is Wrong 😥");
       
      }
      else {
  
        notify("Invalid Answer");
      }
    });
  };

  if (Loading) {
    return <><Gloading/></>
  } else {
    return (
      <div className="Level_1 Container">
        <h1>Level 2</h1>
        <div className="TQuestion">
          <p>
          If f (x) = [2/x ] − 3, g (x) = x − [3 / x] + 4 and h (x) = −[2 (2x + 1)] / [x2 + x − 12], then what is the value of limx→3 [f (x) + g (x) + h (x)]?
          for Example if answer is in fraction input the answer as: -1/7,5/3,6/2
          </p>
        </div>
        <div className="Input">
          <input
            type="text"
            name="level1Answer"
            value={L2input}
            onChange={(e) => setinput(e.target.value)}
          />
          <button onClick={() => handlesubmit()}>Submit</button>
        </div>
      </div>
    );
  }
}
