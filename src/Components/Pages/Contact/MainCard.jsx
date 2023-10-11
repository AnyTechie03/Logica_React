import React, { useState } from "react";
import "./MainCard.css";
import MainCardBorder from '../../../assets/img/Main_card_border.png'

export default function MainCard({data}) {
  return(
    <div class="contact-main-card text-center">
      <img class="main-card-border" src={MainCardBorder} alt="Border"/>
      <div class="main-card-content">
        <img src={data.photo} alt="Avatar"/>
        <div class="main-card-contact-detail">
            <p class="name-role">{data.role}</p>
            <p class="name-role">{data.name}</p>
            <p class="contact">{data.email}</p>
            <p class="contact">{data.phone}</p>
        </div>
      </div>
    </div>
  )
}
