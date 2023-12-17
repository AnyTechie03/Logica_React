import React, { useEffect, useState } from "react";
import { gsap, Power0 } from 'gsap';
import $ from 'jquery';
import "./Tresurehunt.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function Tresurehunt() {
  useEffect(() => {
    // Create/add stars to layers
    const starLayers = document.querySelectorAll('.star-layer');

    starLayers.forEach((layer) => {
        for (let i = 0; i < 60; i++) {
            const star = document.createElement('li');
            star.className = 'star';
            layer.appendChild(star);
        }
    });
    const stars = document.querySelectorAll('.star');

    // Randomize star position
    stars.forEach((star) => {
        star.style.top = Math.floor(Math.random() * 99) + '%';
        star.style.left = Math.floor(Math.random() * 99) + '%';
    });


 

    const $starLayers = document.getElementsByClassName('star-layer');
    const $body = document.getElementsByTagName('body');
    const $rocket = document.getElementById('svg-rocket');
    const $moon = document.getElementById('moon');
    const $fire = document.getElementById('fire');
    const $trail = document.getElementById('trail');
    const $galaxy = document.getElementById('svg-galaxy');
    const $flash = document.getElementById('flash');
    const $milestones = document.getElementById('milestone-wrapper');
    const $title = document.getElementById('title');
    const $undraw = document.getElementById('undraw');
    const $options = document.querySelectorAll('.planet');
     if (!$rocket ) {
    // Elements are not available yet, you can log an error or take other actions
    console.error("One or more required elements not found.");
    return;
}

    const tl = gsap.timeline();
    tl.to($fire, 0.3, {
        opacity: 0,
        repeat: 3,
    })
        .to($trail, 0.2, {
            opacity: 1,
        })
        .call(function () {
            $rocket.classList.remove('rocket-hover');
            $rocket.classList.add('rocket-shake');
        })
        .to($rocket, 1, {
            bottom: 150,
            delay: 0.6,
        })
        .to(
            $trail,
            0.5,
            {
                height: 400,
            },
            '-=1'
        )
        .to(
            $moon,
            3,
            {
                transform: 'scale(7)',
                top: '50%',
                right: -1200,
                ease: Power0.easeIn,
                delay: 2,
            },
            '-=2'
        )
        .to(
            $galaxy,
            2,
            {
                transform: 'scale(1)',
                left: -400,
                top: '40%',
            },
            '-=1'
        )
        .to(
            $rocket,
            0.5,
            {
                bottom: '120%',
            },
            '-=0.5'
        )
        .to(
            $trail,
            0.5,
            {
                height: 1800,
            },
            '-=0.5'
        )
        .to(
            $flash,
            0.3,
            {
                width: 10,
                height: '100%',
            },
            '-=0.2'
        )
        .to($flash, 0.3, {
            width: '100%',
            height: '100%',
        })
        .call(function () {
            document.getElementById('space').remove();
            $('html').css('overflow', 'auto');
            $('#flash').remove();
        })
        .to($milestones, 2, {
            opacity: 1,
            display: 'flex',
        })
        .to(
            $title,
            1,
            {
                opacity: 1,
            },
            '-=1'
        );

    // Your jQuery event listeners
    

}, []);
  const [allowclick, setallowclick] = useState(false);

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

  let navigate = useNavigate();
  const Server_Host = 'http://localhost:6010';

  useEffect(() => {
    checkUniversal();
  }, []);

  const checkUniversal = () => {
    fetch(Server_Host+"/checkuniversal", {
      method: "GET",
      headers: {
        "Accept": "application/json",
        
        "Content-Type": "application/json",
      },
      withCredentials: true,
      credentials: "include",
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.Universal[0].level_2) {
          console.log("Tresure Hunt Has Started");

          fetch(Server_Host+"/TresureHuntValidate", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
            credentials: "include",
            body: JSON.stringify({ levelat: 1 }),
          }).then((response) => {
            console.log(response.status);
            if (response.status === 401) {
              setallowclick(false);
            } else {
              // successnotify(`Let's Hunt It..`);
              setallowclick(true);
            }
          });
        } else {
          console.log("Tresure Hunt has not started by the Admin");
          setallowclick(false);
        }
      });
  };
  const navigateLevel = (e) => {
    navigate(e);
  };

  if (!allowclick) {
    return (
      <div className="TresureContainer row justify-content-around">
        <div id="flash"></div>
          <ul class="star-layer" id="final-stars">
                </ul>
                <div class="shooting-star">
     <div class="glint1"></div>
     <div class="glint2"></div>
   </div> 
        <div className="col-12 col-sm-6 col-md-6 col-lg-3"
          
          onClick={() => {
            notify("Quiz Round Not cleared");
          }}>
          <div class="planet-wrapper" >
                            <span class="planet-label">Level 1</span>
                            <div class="planet planet1">
                                <div id="planet-clouds1">
                                    <div class="planet-cloud planet-cloud1"></div>
                                    <div class="planet-cloud planet-cloud2"></div>
                                    <div class="planet-cloud planet-cloud3"></div>
                                    <div class="planet-cloud planet-cloud4"></div>
                                    <div class="planet-cloud planet-cloud5"></div>
                                    <div class="planet-cloud planet-cloud6"></div>
                                    <div class="planet-cloud planet-cloud7"></div>
                                </div>
                                <div id="planet-clouds2">
                                    <div class="planet-cloud planet-cloud5"></div>
                                    <div class="planet-cloud planet-cloud6"></div>
                                    <div class="planet-cloud planet-cloud2"></div>
                                    <div class="planet-cloud planet-cloud7"></div>
                                    <div class="planet-cloud planet-cloud1"></div>
                                    <div class="planet-cloud planet-cloud2"></div>
                                </div>
                            </div>
                        </div>
        </div>

        <div className="col-12 col-sm-6 col-md-6 col-lg-4">
        <div class="planet-wrapper">
                            <span class="planet-label">Level 2</span>
                            <div class="planet planet2">
                                <div class="planet-ring"></div>
                                <div class="planet-crater planet-crater1"></div>
                                <div class="planet-crater planet-crater2"></div>
                                <div class="planet-crater planet-crater3"></div>
                                <div class="planet-crater planet-crater4"></div>
                                <div class="planet-crater planet-crater5"></div>
                            </div>
                        </div>
        </div>

        <div className="col-12 col-sm-6 col-md-6 col-lg-3 ">
        <div class="planet-wrapper" >
                            <div id="planet-moon"></div>
                            <span class="planet-label">Level 3</span>
                            <div class="planet planet3">
                                <div class="planet-line1"></div>
                                <div class="planet-line2"></div>
                                <div class="planet-line3"></div>
                                <div class="planet-line4"></div>
                                <div class="planet-line5"></div>
                                <div id="red-spot"></div>
                            </div>
                        </div>
        </div>

        <div className="col-12 col-sm-6 col-md-6 col-lg-3 ">
        <div class="planet-wrapper" >
                            <span class="planet-label">Level 4</span>
                            <div class="planet planet4">
                                <div class="planet-ring4"></div>
                                <div class="planet-crater41 planet-crater6"></div>
                                <div class="planet-crater41 planet-crater7"></div>
                                <div class="planet-crater41 planet-crater8"></div>
                                <div class="planet-crater41 planet-crater9"></div>
                                <div class="planet-crater41 planet-crater10"></div>
                            </div>
                        </div>
        </div>

        <div className="col-12 col-sm-6 col-md-6 col-lg-3 ">
        <div class="planet-wrapper" >
                            <span class="planet-label">Level 5</span>
                            <div class="planet planet4">
                            </div>
                        </div>
        </div>
        <ul class="star-layer star-layer1">
                </ul>
                <ul class="star-layer star-layer2">
                </ul>
                <ul class="star-layer star-layer3">
                </ul>
      </div>
    );
  } else {
    return (
      <div className="TresureContainer  row justify-content-around">
        <div id="flash"></div>
          <ul class="star-layer" id="final-stars">
                </ul>
                <div class="shooting-star">
     <div class="glint1"></div>
     <div class="glint2"></div>
   </div> 
        <div className="col-12 col-sm-6 col-md-6 col-lg-3" >
        <div className="col-3" onClick={() => navigateLevel("TresureHunt1")}>
        <div class="planet-wrapper" >
                            <span class="planet-label">Level 1</span>
                            <div class="planet planet1">
                                <div id="planet-clouds1">
                                    <div class="planet-cloud planet-cloud1"></div>
                                    <div class="planet-cloud planet-cloud2"></div>
                                    <div class="planet-cloud planet-cloud3"></div>
                                    <div class="planet-cloud planet-cloud4"></div>
                                    <div class="planet-cloud planet-cloud5"></div>
                                    <div class="planet-cloud planet-cloud6"></div>
                                    <div class="planet-cloud planet-cloud7"></div>
                                </div>
                                <div id="planet-clouds2">
                                    <div class="planet-cloud planet-cloud5"></div>
                                    <div class="planet-cloud planet-cloud6"></div>
                                    <div class="planet-cloud planet-cloud2"></div>
                                    <div class="planet-cloud planet-cloud7"></div>
                                    <div class="planet-cloud planet-cloud1"></div>
                                    <div class="planet-cloud planet-cloud2"></div>
                                </div>
                            </div>
                        </div>
        </div>
        </div>
        <div className="col-4" onClick={() => navigateLevel("TresureHunt2")}>
        <div class="planet-wrapper">
                            <span class="planet-label">Level 2</span>
                            <div class="planet planet2">
                                <div class="planet-ring"></div>
                                <div class="planet-crater planet-crater1"></div>
                                <div class="planet-crater planet-crater2"></div>
                                <div class="planet-crater planet-crater3"></div>
                                <div class="planet-crater planet-crater4"></div>
                                <div class="planet-crater planet-crater5"></div>
                            </div>
                        </div>
        </div>

        <div className="col-3" onClick={() => navigateLevel("TresureHunt3")}>
        <div class="planet-wrapper" >
                            <div id="planet-moon"></div>
                            <span class="planet-label">Level 3</span>
                            <div class="planet planet3">
                                <div class="planet-line1"></div>
                                <div class="planet-line2"></div>
                                <div class="planet-line3"></div>
                                <div class="planet-line4"></div>
                                <div class="planet-line5"></div>
                                <div id="red-spot"></div>
                            </div>
                        </div>
        </div>

        <div className="col-3" onClick={() => navigateLevel("TresureHunt4")}>
        <div class="planet-wrapper" >
                            <span class="planet-label">Level 4</span>
                            <div class="planet planet4">
                                <div class="planet-ring4"></div>
                                <div class="planet-crater41 planet-crater6"></div>
                                <div class="planet-crater41 planet-crater7"></div>
                                <div class="planet-crater41 planet-crater8"></div>
                                <div class="planet-crater41 planet-crater9"></div>
                                <div class="planet-crater41 planet-crater10"></div>
                            </div>
                        </div>
        </div>

        <div className="col-3" onClick={() => navigateLevel("TresureHunt5")}>
        <div class="planet-wrapper" >
                            <span class="planet-label">Level 5</span>
                            <div class="planet planet4">
                            </div>
                        </div>
        </div>
        <ul class="star-layer star-layer1">
                </ul>
                <ul class="star-layer star-layer2">
                </ul>
                <ul class="star-layer star-layer3">
                </ul>
      </div>
    );
  }
}
