import React, { useEffect, useState } from "react";
import "./Tresurehunt.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Gloading from "../Loading/Gloading";
import "./Level.css"

export default function Level_3() {
  const [L3input, setinput] = useState("");
  const [Loading, setLoading] = useState(true);
  const navigate = useNavigate()
  const Server_Host = 'https://logica-server.onrender.com'

  useEffect(() => {
    fetch(Server_Host+"/TresureHuntValidate", {
            method: "POST",
            headers: {
              Accept: "*/*",
              "Content-Type": "application/json",
            },
      credentials: "include",
      body:JSON.stringify({levelat:3})
      
    }).then((res) => {
      if (res.status === 201) {
        setLoading(false);
      } else if(res.status === 401){
       
        notify("Sorry the Your Prev Round Not clear");
       
      }
      else {
  
        notify("Invalid Answer");
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
  const handlesubmit = () => {
    const res = fetch(Server_Host+"/TresureHunt3", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ L3input }),
    });
    res.then((e) => {
      if (e.status === 201) {
    
        successnotify("Level 3 Cleared Successfully");
     
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
        <h2>Level 3</h2>
        <div className="TQuestion">
        <p>
          Direction: Study the following information carefully and answer the given question.

There are eight persons P, Q, R, S, T, U, V and W sitting in a row(not necessarily in the same order) and facing east. T is sitting fourth to the right of Q. V is sitting third from the right end of the row. Q is sitting between U and W who is sitting third to the left of T who is sitting at a corner. P is sitting immediate left of U. R is sitting at the left corner of the row.
<br/>
How many people sit to the right of W?
          </p>
        </div>
        <div className="Input">
          <input
            type="text"
            name="level1Answer"
            value={L3input}
            onChange={(e) => setinput(e.target.value)}
          />
          <button onClick={() => handlesubmit()}>Submit</button>
        </div>
      </div>
    );
  }
}
