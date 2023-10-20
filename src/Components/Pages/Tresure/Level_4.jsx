import React, { useEffect, useState } from "react";
import "./Tresurehunt.css";

export default function Level_3() {
  const [L4input, setinput] = useState("");
  const [Loading, setLoading] = useState(true);

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
      withCredntials: true,
      credentials: 'include',
      body: JSON.stringify({ L4input }),
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
            This is Test 4
            {/* As you continue your journey through the digital labyrinth, you
            stumble upon a series of seemingly random bits. These bits are part
            of an encoded message, and it appears that there might be errors
            lurking within. Remembering your coding skills, you realize that
            Hamming code could be the key to uncovering the true message hidden
            within the noisy data. Implement the Hamming code algorithm to
            correct any errors and reveal the correct sequence of bits. Once you
            have decoded the message, the keyword you uncover will be the key to
            unlocking the next phase of your quest. Type the decoded keyword
            into the input box below to continue your mission and unveil the
            digital secrets that await you! */}
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
