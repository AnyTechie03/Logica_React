import React, { useState } from "react";
import "./SideCard.css";
import SideCardBorder from '../../../assets/img/Side_card_border.png'
import { Link } from "react-router-dom";
export default function SideCard({id, role, handleClick, photo,topage}) {
  return(
    <>
    <div className="contact-side-card" onClick={() => {handleClick(id)}}>
      <img className="side-card-border" src={SideCardBorder} alt="Border"></img>
      <div>
        <Link style={{textDecoration:'none'}} className="side-card-content text-white mt-3" to={topage}>
        <img src={photo} alt="avatar"></img>
        <p className="side-card-position">{role}</p>
        </Link>
      </div>
    </div>
      
    </>
  )
}