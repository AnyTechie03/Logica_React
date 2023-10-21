import React, { useEffect, useRef } from 'react';
import bgh from '../../../assets/audio/parasite.mp3';
import './Home.css';
import Collegelogo from '../../Functions/collegeLogo/Collegelogo';

const Home = () => {   
    return (
        <>
            <div className='container m-0 p-0'>

               {/* <Collegelogo/> */}
                <div id='Home' className='home '>
                    
                    <div className="htitle">
                        <div className="heading">Logica</div>
                        <div className="subHeading">TECHNICAL FEST OF SIMCA</div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Home;
