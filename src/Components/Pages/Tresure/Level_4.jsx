import React, { useEffect, useState } from "react";
import "./Tresurehunt.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Gloading from "../Loading/Gloading";
import "./Level.css"

export default function Level_3() {
  const [L4input, setinput] = useState("");
  const [Loading, setLoading] = useState(true);
  const navigate = useNavigate()
  useEffect(() => {
    fetch("https://angry-moon-10536.pktriot.net/TresureHuntValidate", {
            method: "POST",
            headers: {
              Accept: "*/*",
              "Content-Type": "application/json",
            },
      credentials: "include",
      body:JSON.stringify({levelat:4})
      
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
    const res = fetch("https://angry-moon-10536.pktriot.net/TresureHunt4", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      withCredntials: true,
      credentials: 'include',
      body: JSON.stringify({ L4input }),
    });
    res.then((e) => {
      if (e.status === 201) {
    
        successnotify("Level 4 Cleared Successfully");
     
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
        <div className="TQuestion">
        <p>
<br/>
            To represent the 4-bit code 1101 into a 7-bit, even parity Hamming code, we first need to add 3 parity bits to the 4 data bits. The parity bits are chosen so that the total number of 1's in each group of bits (including the parity bit) is even.
<br/>
Hamming Code:
<br/>

Bits	1	2	3	4	5	6	7
<br/>
Transmitted bits	P1	P2	d1	P3	d2	d3	d4
          </p>
         
        </div>
        <div className="Input">
          <input
            type="text"
            name="level1Answer"
            value={L4input}
            onChange={(e) => setinput(e.target.value)}
          />
          <button onClick={() => handlesubmit()}>Submit</button>
        </div>
      </div>
    );
  }
}
