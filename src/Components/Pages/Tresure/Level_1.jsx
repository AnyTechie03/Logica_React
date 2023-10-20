import React, { useEffect, useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "./Tresurehunt.css";

export default function Level_1() {
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    checkUniversal();
  },[]);

  const checkUniversal = () => {
fetch("https://angry-moon-10536.pktriot.net/checkuniversal", {
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
          fetch("https://angry-moon-10536.pktriot.net/TresureHuntValidate", {
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

  const [L1input, setinput] = useState("");

  // const alien_to_english = `        '∆': 'A',
  //       'ß': 'B',
  //       '¢': 'C',
  //       '∂': 'D',
  //       '£': 'E',
  //       'ƒ': 'F',
  //       'ª': 'G',
  //       '∆': 'H',
  //       'ø': 'I',
  //       'π': 'J',
  //       'ø': 'K',
  //       '∑': 'L',
  //       'µ': 'M',
  //       '´': 'N',
  //       'œ': 'O',
  //       '®': 'P',
  //       '†': 'Q',
  //       '¥': 'R',
  //       'ø': 'S',
  //       '¨': 'T',
  //       '©': 'U',
  //       '√': 'V',
  //       'Ω': 'W',
  //       'ø': 'X',
  //       'Π': 'Y',
  //       '†': 'Z',`;

  const handlesubmit = () => {
    const res = fetch("https://angry-moon-10536.pktriot.net/TresureHunt1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      withCredntials: true,
      credentials: "include",
      body: JSON.stringify({ L1input }),
    });
    res.then((e) => {
      console.log(e);
    });
  };

  if (Loading) {
    return <>Previou  Not Cleared</>;
  } else {
    return (
      <div className="Level_1 Container">
        <div className="TQuestion">
          <p>
           This is Test 1
          </p>
          {/* Alien_To_English Might Be Helpful for You
          <SyntaxHighlighter language="java" style={docco}>
            {alien_to_english}
          </SyntaxHighlighter> */}
        </div>
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
    );
  }
}
