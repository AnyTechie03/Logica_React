import React, { useEffect, useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./Level.css"
import "./Tresurehunt.css";
import Gloading from "../Loading/Gloading";

export default function Level_1() {
  const [Loading, setLoading] = useState(true);
  const Server_Host = 'https://logica-server.onrender.com'

  useEffect(() => {
    checkUniversal();
  },[]);

  const checkUniversal = () => {
fetch(Server_Host+"/checkuniversal", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      withCredentials: true,
      credentials: "include",
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.Universal[0].level_2) {
          console.log("Tresure Hunt Has Started");
          fetch(Server_Host+"/TresureHuntValidate", {
            method: "POST",
            headers: {
              Accept: "*/*",
              "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({ levelat: 1 }),
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
        } else {
          console.log("Tresure Hunt has not started by the Admin");
          //Sir Add Code to show user that tresure hunt is yet to be started by the Admin
          setLoading(true);
        }
      });
  };
  const navigate = useNavigate()
  const [L1input, setinput] = useState("");

  const alien_to_english = `        ∆/: 'A',
  'ß': 'B',
  '¢': 'C',
  '∂': 'D',
  '£': 'E',
  'ƒ': 'F',
  'ª': 'G',
  '∆': 'H',
  'ø.': 'I',
  'π': 'J',
  'ø': 'K',
  '∑': 'L',
  'µ': 'M',
  '´': 'N',
  'œ': 'O',
  '®': 'P',
  '†': 'Q',
  '¥': 'R',
  'ø': 'S',
  '¨': 'T',
  '©': 'U',
  '√': 'V',
  'Ω': 'W',
  'ø?': 'X',
  'Π': 'Y',
  '†': 'Z',,`;
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
    const res = fetch(Server_Host+"/TresureHunt1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ L1input }),
    });
    res.then((e) => {
      if (e.status === 201) {
        successnotify("Level 1 Cleared Successfully");
        navigate('/TresureHunt');
      } else if(e.status === 401){
       
        notify("Sorry the Answer Is Wrong 😥");
       
      }else {
  
        notify("Invalid Answer");
      }
    });

  };

  if (Loading) {
    return <><Gloading/></>
  } else {
    return (
      <div className="Level_1 Container text-center">
        <div className="TQuestion">
         
          <h3>
            Alien_To_English Might Be Helpful for You
            </h3>
          <h2>alien_message = '¨∆£ ª∆/ ∑∆/ø?Π  ø.ø ƒ©∑∑ œƒ Ωœ´∂£¥'</h2>
          <SyntaxHighlighter language="java" style={docco}>
            {alien_to_english}
          </SyntaxHighlighter>
        <div className="Input">
          <input
            type="text"
            name="level1Answer"
            value={L1input}
            onChange={(e) => setinput(e.target.value)}
          />
          <button onClick={() => handlesubmit()}>Submit</button>
        </div>
        </div>
      </div>
    );
  }
}
