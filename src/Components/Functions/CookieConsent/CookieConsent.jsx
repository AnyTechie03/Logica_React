// CookieConsent.js
import React, { useState, useEffect } from 'react';
import './CookieConsent.css'
const CookieConsent = () => {
  const [isCookieAccepted, setIsCookieAccepted] = useState(
    localStorage.getItem('cookieConsent') === 'true'
  );

  useEffect(() => {
    if (!isCookieAccepted) {
      // Show the consent banner
    }
  }, [isCookieAccepted]);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsCookieAccepted(true);
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
