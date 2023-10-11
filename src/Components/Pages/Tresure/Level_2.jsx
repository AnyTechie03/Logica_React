import React, { useEffect, useState } from "react";
import "./Tresurehunt.css";

export default function Level_2() {
  const [L2input, setinput] = useState("");
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://logicabackend.onrender.com/TresureHuntValidate", {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
      withCredntials: true,
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
  const handlesubmit = () => {
    const res = fetch("https://logicabackend.onrender.com/TresureHunt2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ L2input }),
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
        <h1>Level 2</h1>
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
