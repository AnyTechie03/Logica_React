import React, { useEffect, useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "./Tresurehunt.css";

export default function Level_1() {
  const [Loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch("https://logicabackend.onrender.com/TresureHuntValidate", {
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
  });

  const [L1input, setinput] = useState("");

  const alien_to_english = `        '∆': 'A',
        'ß': 'B',
        '¢': 'C',
        '∂': 'D',
        '£': 'E',
        'ƒ': 'F',
        'ª': 'G',
        '∆': 'H',
        'ø': 'I',
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
        'ø': 'X',
        'Π': 'Y',
        '†': 'Z',`;

  const handlesubmit = () => {
    const res = fetch("https://logicabackend.onrender.com/TresureHunt1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      withCredntials: true,
      credentials:"include"
      ,
      body: JSON.stringify({ L1input }),
    });
    res.then((e) => {
      console.log(e);
    });
  };

  if (Loading) {
    return <></>;
  } else {
    return (
      <div className="Level_1 Container">
        <div className="TQuestion">
          <p>
            As you explore the alien archives, you stumble upon a cryptic
            message etched into an ancient artifact. The message appears to be a
            mix of lowercase and uppercase letters, but it's not immediately
            clear how to decipher it. You notice a pattern in the alternating
            capitalization of letters in the message. Perhaps there's a hidden
            meaning behind this alternating pattern that can reveal the true
            message within. Use your coding skills to decrypt the message by
            understanding the alternate capitalization technique employed by the
            alien civilization.
          </p>
          Alien_To_English Might Be Helpful for You
          <SyntaxHighlighter language="java" style={docco}>
            {alien_to_english}
          </SyntaxHighlighter>
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
