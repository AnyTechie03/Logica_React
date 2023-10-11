import React, { useState, useEffect } from 'react';
import './FloatingArrow.css';

const FloatingArrow = () => {
  const [isVisible, setIsVisible] = useState(true);



  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

 

  return (
    isVisible && (
      <a href="#Home">

      <div className="floating-arrow" onClick={scrollToTop()}>
        <i className="fa fa-arrow-up"></i>
      </div>
      </a>
    )
  );
};

export default FloatingArrow;
