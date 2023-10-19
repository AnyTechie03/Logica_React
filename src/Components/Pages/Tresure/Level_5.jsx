import React, { useEffect, useState } from "react";
import "./Tresurehunt.css";

export default function Level_5() {
  const [L5input, setinput] = useState("");
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://angry-moon-10536.pktriot.net/TresureHuntValidate", {
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

  const handlesubmit = () => {
    const res = fetch("https://angry-moon-10536.pktriot.net/TresureHunt1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ L5input }),
    });
    res.then((e) => {
      console.log(e);
    });
  };
  if (Loading) {
    return <>Previou Round Not Cleared</>;
  } else {
    return (
      <div className="Level_1 Container">
        <div className="TQuestion">
          <p>
            This is Test 5
            {/* As you progress through this interstellar journey, you've collected
            valuable hints along the way. Recall your previous knowledge and
            experiences: deciphering messages, solving puzzles, and navigating
            through the unknown. Now, you face the next challenge. The final key
            to the treasure of this spaceship adventure is encrypted within a
            string. Utilize your decryption skills, apply the hints you've
            gathered, and unveil the concealed message. Once decrypted, you'll
            discover that only a specific length of the string holds the secret
            you seek. Extract that portion, and it will unlock the path to the
            ultimate treasure. Type the extracted portion into the input box
            below to reveal the spaceship's hidden secrets and claim your
            reward. */}
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
