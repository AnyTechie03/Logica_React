import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import './CookieConsent.css'

const CookieConsent = () => {
  const [cookies, setCookie] = useCookies(['cookieConsent']);
  const isCookieAccepted = cookies.cookieConsent === 'false';

  const acceptCookies = () => {
    setCookie('jwttoken', '',{domain:'https://logicabackend.onrender.com'}, { path: '/' });
  };

  return (
    <div className={`cookie-banner ${isCookieAccepted ? 'hidden' : 'd-none'}`}>
      <div className="cookie-content">
        <p>This website uses third-party cookies to enhance your experience.</p>
        <button onClick={acceptCookies}>Accept</button>
      </div>
    </div>
  );
};

export default CookieConsent;
