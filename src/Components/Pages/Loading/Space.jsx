// import React, { useEffect } from 'react';
// import { gsap, Power0 } from 'gsap';
// import $ from 'jquery';
// import './Space.css'; // Make sure to import your CSS file

// function Space() {
//     useEffect(() => {
//         // Create/add stars to layers
//         const starLayers = document.querySelectorAll('.star-layer');

//         starLayers.forEach((layer) => {
//             for (let i = 0; i < 60; i++) {
//                 const star = document.createElement('li');
//                 star.className = 'star';
//                 layer.appendChild(star);
//             }
//         });
//         const stars = document.querySelectorAll('.star');

//         // Randomize star position
//         stars.forEach((star) => {
//             star.style.top = Math.floor(Math.random() * 99) + '%';
//             star.style.left = Math.floor(Math.random() * 99) + '%';
//         });

//         // Randomize exhaust fume position
//         const fumes = document.querySelectorAll('.smoke-cloud');

//         fumes.forEach((cloud) => {
//             cloud.style.top = Math.floor(Math.random() * 50) + '%';
//             cloud.style.left = Math.floor(Math.random() * 101) + '%';
//         });

//         setInterval(function () {
//             fumes.forEach((cloud) => {
//                 cloud.style.display = 'none';
//                 cloud.style.top = Math.floor(Math.random() * 50) + '%';
//                 cloud.style.left = Math.floor(Math.random() * 101) + '%';
//                 cloud.style.display = 'block';
//             });
//         }, 2950);

//         const $starLayers = document.getElementsByClassName('star-layer');
//         const $body = document.getElementsByTagName('body');
//         const $rocket = document.getElementById('svg-rocket');
//         const $moon = document.getElementById('moon');
//         const $fire = document.getElementById('fire');
//         const $trail = document.getElementById('trail');
//         const $galaxy = document.getElementById('svg-galaxy');
//         const $flash = document.getElementById('flash');
//         const $milestones = document.getElementById('milestone-wrapper');
//         const $title = document.getElementById('title');
//         const $undraw = document.getElementById('undraw');
//         const $options = document.querySelectorAll('.planet');
//          if (!$rocket ) {
//         // Elements are not available yet, you can log an error or take other actions
//         console.error("One or more required elements not found.");
//         return;
//     }

//         const tl = gsap.timeline();
//         tl.to($fire, 0.3, {
//             opacity: 0,
//             repeat: 3,
//         })
//             .to($trail, 0.2, {
//                 opacity: 1,
//             })
//             .call(function () {
//                 $rocket.classList.remove('rocket-hover');
//                 $rocket.classList.add('rocket-shake');
//             })
//             .to($rocket, 1, {
//                 bottom: 150,
//                 delay: 0.6,
//             })
//             .to(
//                 $trail,
//                 0.5,
//                 {
//                     height: 400,
//                 },
//                 '-=1'
//             )
//             .to(
//                 $moon,
//                 3,
//                 {
//                     transform: 'scale(7)',
//                     top: '50%',
//                     right: -1200,
//                     ease: Power0.easeIn,
//                     delay: 2,
//                 },
//                 '-=2'
//             )
//             .to(
//                 $galaxy,
//                 2,
//                 {
//                     transform: 'scale(1)',
//                     left: -400,
//                     top: '40%',
//                 },
//                 '-=1'
//             )
//             .to(
//                 $rocket,
//                 0.5,
//                 {
//                     bottom: '120%',
//                 },
//                 '-=0.5'
//             )
//             .to(
//                 $trail,
//                 0.5,
//                 {
//                     height: 1800,
//                 },
//                 '-=0.5'
//             )
//             .to(
//                 $flash,
//                 0.3,
//                 {
//                     width: 10,
//                     height: '100%',
//                 },
//                 '-=0.2'
//             )
//             .to($flash, 0.3, {
//                 width: '100%',
//                 height: '100%',
//             })
//             .call(function () {
//                 document.getElementById('space').remove();
//                 $('html').css('overflow', 'auto');
//                 $('#flash').remove();
//             })
//             .to($milestones, 2, {
//                 opacity: 1,
//                 display: 'flex',
//             })
//             .to(
//                 $title,
//                 1,
//                 {
//                     opacity: 1,
//                 },
//                 '-=1'
//             );

//         // Your jQuery event listeners
        

//     }, []);


//     return (
//         <div className="space-container">
//             <div id="flash"></div>
//             <div id="milestone-wrapper" class="noise">
//                 <ul class="star-layer" id="final-stars">
//                 </ul>

//                 <div id="choices-wrapper">
//                     <div id="title">
//                         <h1>Milestones</h1>
//                     </div>
//                      <div class="shooting-star">
//      <div class="glint1"></div>
//      <div class="glint2"></div>
//    </div> 
                  
//    <div id="tl-choices">
//                         <div class="planet-wrapper" >
//                             <span class="planet-label">Level 1</span>
//                             <div class="planet planet1">
//                                 <div id="planet-clouds1">
//                                     <div class="planet-cloud planet-cloud1"></div>
//                                     <div class="planet-cloud planet-cloud2"></div>
//                                     <div class="planet-cloud planet-cloud3"></div>
//                                     <div class="planet-cloud planet-cloud4"></div>
//                                     <div class="planet-cloud planet-cloud5"></div>
//                                     <div class="planet-cloud planet-cloud6"></div>
//                                     <div class="planet-cloud planet-cloud7"></div>
//                                 </div>
//                                 <div id="planet-clouds2">
//                                     <div class="planet-cloud planet-cloud5"></div>
//                                     <div class="planet-cloud planet-cloud6"></div>
//                                     <div class="planet-cloud planet-cloud2"></div>
//                                     <div class="planet-cloud planet-cloud7"></div>
//                                     <div class="planet-cloud planet-cloud1"></div>
//                                     <div class="planet-cloud planet-cloud2"></div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div class="planet-wrapper">
//                             <span class="planet-label">Level 2</span>
//                             <div class="planet planet2">
//                                 <div class="planet-ring"></div>
//                                 <div class="planet-crater planet-crater1"></div>
//                                 <div class="planet-crater planet-crater2"></div>
//                                 <div class="planet-crater planet-crater3"></div>
//                                 <div class="planet-crater planet-crater4"></div>
//                                 <div class="planet-crater planet-crater5"></div>
//                             </div>
//                         </div>

//                         <div class="planet-wrapper" >
//                             <div id="planet-moon"></div>
//                             <span class="planet-label">Level 3</span>
//                             <div class="planet planet3">
//                                 <div class="planet-line1"></div>
//                                 <div class="planet-line2"></div>
//                                 <div class="planet-line3"></div>
//                                 <div class="planet-line4"></div>
//                                 <div class="planet-line5"></div>
//                                 <div id="red-spot"></div>
//                             </div>
//                         </div>
//                         <div class="planet-wrapper" >
//                             <span class="planet-label">Level 4</span>
//                             <div class="planet planet4">
//                                 <div class="planet-ring4"></div>
//                                 <div class="planet-crater41 planet-crater6"></div>
//                                 <div class="planet-crater41 planet-crater7"></div>
//                                 <div class="planet-crater41 planet-crater8"></div>
//                                 <div class="planet-crater41 planet-crater9"></div>
//                                 <div class="planet-crater41 planet-crater10"></div>
//                             </div>
//                         </div>
//                         <div class="planet-wrapper" >
//                             <span class="planet-label">Level 5</span>
//                             <div class="planet planet4">
                               
                               
//                             </div>
//                         </div>
                    
// </div>
//                 </div>

              
//             </div>

//             <div id="space" class="noise">

//                 <div id="moon">
//                     <div class="crater crater1"></div>
//                     <div class="crater crater2"></div>
//                     <div class="crater crater3"></div>
//                     <div class="crater crater4"></div>
//                     <div class="crater crater5"></div>
//                 </div>

//                 <div id="svg-galaxy">
//                     <img src="https://res.cloudinary.com/dgeb3iekh/image/upload/v1544456585/galaxy-svgrepo-com_rskrzs.svg" alt="" />
//                 </div>

//               
//                 <div id="svg-rocket" class="rocket-hover">
//                     <div id="fire"></div>
//                     <div id="trail">
//                     </div>

//                 </div>



//                 <ul id="smoke">
//                     <li class="smoke-cloud smoke-sm"></li>
//                     <li class="smoke-cloud smoke-md"></li>
//                     <li class="smoke-cloud smoke-sm"></li>
//                     <li class="smoke-cloud smoke-md"></li>
//                     <li class="smoke-cloud smoke-sm"></li>
//                     <li class="smoke-cloud smoke-md"></li>
//                     <li class="smoke-cloud smoke-sm"></li>
//                     <li>
//                         <div class="main-smoke"></div>
//                     </li>
//                 </ul>

//                 <div id="galaxy"></div>

//                 <ul class="star-layer star-layer1">
//                 </ul>
//                 <ul class="star-layer star-layer2">
//                 </ul>
//                 <ul class="star-layer star-layer3">
//                 </ul>
//             </div>
//         </div>
//     );
// }

// export default Space;