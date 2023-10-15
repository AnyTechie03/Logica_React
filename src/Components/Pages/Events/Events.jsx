// import React from "react";
import React, { useState, useRef, useEffect } from "react";
import "./Events.css";
import { useNavigate } from "react-router-dom";

export default function Events() {
  const [animate, setAnimate] = useState(false);
  const targetRef = useRef(null);
  const navigate = useNavigate();
  const handlenavigate = (key) => {
    switch (key) {
      case "level_1":
        navigate("/quiz");
        break;
      case "level_2":
        navigate("/Tresurehunt");
        break;
      case "level_3":
        navigate("/CodingRound");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // setAnimate(entry.isIntersecting);

        if (entry.isIntersecting) {
          setAnimate(entry.isIntersecting);
        }
      },
      { root: null, rootMargin: "0px", threshold: 0.1 }
    );
    const target = targetRef.current;
    if (target) observer.observe(target);
    return () => {
      if (target) observer.unobserve(target);
    };
  }, [targetRef]);
  return (
    <>
      <div className="event text-center" id="Events">
        <div className="row p-5 g-5 justify-content-around" ref={targetRef}>
          <div className="eventsHead">events</div>
          <div className="Econtainer row">
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <span className="stars"></span>
                  <h2 className="level-1">Quizethon</h2>
                  <p className="level-1">
                    <ul style={{ width: "fit-content" }}>
                      <hr />

                      <li className="">Time - 1:00 Hr</li>
                      <li className="">60s Per Quistion</li>
                      <li className="">Quiz start's on - 9:00 PM</li>
                      <li className="">Mode - Online</li>
                    </ul>
                  </p>
                </div>
              </div>
              <div
                className="face face2"
                onClick={() => handlenavigate("level_1")}>
                <h2 className="lsubtitle text-center">Level 1 Quizethon</h2>
              </div>
            </div>
            <div className="card">
              <div
                className="face face1"
                onClick={() => handlenavigate("level_2")}>
                <div className="content">
                  <span className="stars"></span>
                  <h2 className="level-2">Treasure Hunt</h2>
                  <p className="level-2"></p>
                </div>
              </div>
              <div className="face face2">
                <h2 className="text-center lsubtitle">Level 2 Treasure Hunt</h2>
              </div>
            </div>
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <span className="stars"></span>
                  <h2 className="level-3">CodeVersa</h2>
                  <p className="level-3"></p>
                </div>
              </div>
              <div className="face face2">
                <h2
                  className="lsubtitle text-center"
                  onClick={() => handlenavigate("level_3")}>
                  Level 03 CodeVersa
                </h2>
              </div>
            </div>
          </div>
          <div className="row mt-5 dbtn">
            <a
              className="col-12 btn justify-content-around"
              href="https://drive.google.com/file/d/1Mc3eTQiMUGQBx3qiaRhoFZoaYa0zQQBp/view?usp=drive_link"
              role="button"
              target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-download"
                viewBox="0 0 16 16">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
              </svg>{" "}
              Rule Book
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
