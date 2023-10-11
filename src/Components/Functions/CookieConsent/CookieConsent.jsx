import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

const CookieConsent = () => {
  const [cookies, setCookie] = useCookies(['cookieConsent']);
  const isCookieAccepted = cookies.cookieConsent === 'true';

  const acceptCookies = () => {
    setCookie('cookieConsent', 'true', { path: '/' });
  };

  return (
    <div className={`cookie-banner ${isCookieAccepted ? 'hidden' : ''}`}>
      <div className="cookie-content">
        <p>This website uses third-party cookies to enhance your experience.</p>
        <button onClick={acceptCookies}>Accept</button>
      </div>
    </div>
  );
};

export default CookieConsent;
