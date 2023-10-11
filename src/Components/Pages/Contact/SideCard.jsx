import React, { useState } from "react";
import "./SideCard.css";
import SideCardBorder from '../../../assets/img/Side_card_border.png'
export default function SideCard({id, role, handleClick, photo}) {
  return(
    <div className="contact-side-card" onClick={() => {handleClick(id)}}>
      <img className="side-card-border" src={SideCardBorder} alt="Border"></img>
      <div className="side-card-content">
        <img src={photo} alt="avatar"></img>
        <p className="side-card-position">{role}</p>
      </div>
    </div>
  )
}