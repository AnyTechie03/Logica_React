import React, { useEffect, useState } from "react";
import "./Tresurehunt.css";

export default function Level_3() {
  const [L3input, setinput] = useState("");
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
    const res = fetch("https://logicabackend.onrender.com/TresureHunt3", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ L3input }),
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
        <h2>Level 3</h2>
        <div className="TQuestion">
          <p>
            As you delve deeper into the mysterious alien forest, you encounter
            a gigantic ancient tree with peculiar symbols etched onto its bark.
            The symbols seem to form a complex pattern. Nearby, you find a
            guidebook from a previous explorer, mentioning the importance of
            understanding the tree's structure. It suggests that performing a
            pre-order or post-order or In-order traversal might unveil a hidden
            keyword encoded within the tree's structure. Start by exploring the
            tree's branches and the best order fashion and record the symbols
            you encounter. Once you've completed the traversal, the collected
            symbols will reveal the keyword you need to type in the input box
            below. The tree's secrets await your deciphering!
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
