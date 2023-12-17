import React, { useEffect, useState } from "react";
import "./Tresurehunt.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Gloading from "../Loading/Gloading";
import "./Level.css"

export default function Level_5() {
  const [L5input, setinput] = useState("");
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
      withCredntials: true,
      credentials: "include",
      body:JSON.stringify({levelat:5})
      
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
  const handlesubmit = () => {
    const res = fetch(Server_Host+"/TresureHunt5", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ L5input }),
    });
    res.then((e) => {
      if (res.status === 201) {
    
        successnotify("Level 5 Cleared Successfully");
     
        navigate('/');
      } else if(res.status === 401){
       
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
        <div className="TQuestion">
          <p>
          The proposition (P ⇒ Q) ∧ (Q ⇒ P) is a 
        <ol>
          <li>tautology</li>
          <li>contradiction</li>
          <li>contingency</li>
          <li>absurdity</li>
        </ol>




          </p>
        </div>
        <div className="Input">
          <input
            type="text"
            name="level1Answer"
            value={L5input}
            onChange={(e) => setinput(e.target.value)}
          />
          <button onClick={() => handlesubmit()}>Submit</button>
        </div>
      </div>
    );
  }
}
