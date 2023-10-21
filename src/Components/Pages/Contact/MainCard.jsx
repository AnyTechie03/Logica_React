import React, { useState } from "react";
import "./MainCard.css";
import MainCardBorder from '../../../assets/img/Main_card_border.png'

export default function MainCard({data}) {
  return(
    <div className="contact-main-card text-center">
      <img className="main-card-border" src={MainCardBorder} alt="Border"/>
      <div className="main-card-content">
        <img src={data.photo} alt="Avatar"/>
        <div className="main-card-contact-detail">
            <p className="name-role">{data.role}</p>
            <p className="name-role">{data.name}</p>
            <p className="contact" style={{fontSize:'14px'}}>{data.email}</p>
            <p className="contact">{data.phone}</p>
        </div>
      </div>
    </div>
  )
}
