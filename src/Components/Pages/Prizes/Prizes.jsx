import React from 'react'
import prize1 from '../../../assets/img/svg/prize1.svg'
import prize2 from '../../../assets/img/svg/prize2.svg'
import './Prizes.css'

const Prizes = () => {
    return (
        <>
            <section className=" prize-section wow animate__animated animate__fadeInUp" id="prize" data-wow-duration="1s">
            <h2 className="section-title"></h2>
            <div className="prize-container">
            <div id="prize--1" className="prize-card">
            <div className="first-prize">
            <img src={prize1} alt="Prize Image" />
            </div><h1>₹ 50,000</h1></div>
            <div id="prize--2" className="prize-card">
            <div className="second-prize">
            <img src={prize2} alt="Prize Image" />
            </div><h1>₹ 20,000</h1></div></div>
            </section>

        </>
    )
}

export default Prizes