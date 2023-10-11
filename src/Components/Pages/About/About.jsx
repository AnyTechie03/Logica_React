import React, {useState, useRef, useEffect} from "react";
import './AboutUs.css';

const About = () => {
  const targetRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
   
    const aText = [
      "Welcome to Logica, the premier college-level technical competition hosted by the MCA department of SIMCA!",
      "At Logica, we are dedicated to fostering innovation, creativity, and technical excellence among the brightest young minds in the world of technology.",
      "Our event offers a diverse range of exciting challenges, including coding, 3D modeling, UI/UX design, treasure hunts, typing competitions, and circuit design for IoT devices.",
      "With a rich history of empowering students to push their boundaries and think outside the box, Logica has become a hub for young tech enthusiasts to showcase their talents and learn from the best in the industry.",
      "Join us on this incredible journey as we continue to push the boundaries of what's possible in the world of technology.",
      "Discover your potential, connect with like-minded individuals, and be a part of the Logica legacy!"
    ];
    const iSpeed = 5; // time delay of print out
    const iScrollAt = 20; // start scrolling up at this many lines
    let iIndex = 0; // start printing array at this position
    let iArrLength = aText[0].length; // the length of the text array
    let iTextPos = 0; // initialize text position
    let sContents = ''; // initialize contents variable

    function typewriter() {
      sContents = '';
      let iRow = Math.max(0, iIndex - iScrollAt);
      const destination = document.getElementById("typingw");
    
     
      if (destination) {
        while (iRow < iIndex) {
          sContents += aText[iRow++] + '<br />';
        }
    
        destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
    
        if (iTextPos++ === iArrLength) {
          iTextPos = 0;
          iIndex++;
          if (iIndex !== aText.length) {
            iArrLength = aText[iIndex].length;
            setTimeout(typewriter, 500);
          }
        } else {
          setTimeout(typewriter, iSpeed);
        }
      }
    }
    typewriter();
   
  }, [targetRef]);

  return (
    <div className="aboutus" id="About" ref={targetRef}>
      <div className="code-container">
        <input className="sig" value="// Logica 💜" />
        <div className="glow-container">
          <div className="augs" data-augmented-ui></div>
        </div>
        <section className="augs bg" data-augmented-ui>
          <button className="dots" onClick="changeMode(this)" title="(click to change) Current Mode: css"></button>
          <input className="atitle" value="About Us" />
          <div className="code highcontrast-dark">
            <p id="code">
              <div id="typingw"></div>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
