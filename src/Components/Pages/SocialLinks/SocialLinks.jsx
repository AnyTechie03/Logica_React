import React, { useEffect, useState } from "react";
import "./SocialLinks.css"

export default function SocialLinks(){
    const [isVisible, setIsVisible] = useState(false);
 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

 
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);


    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
    return (
        <div className="links">
            <div className="social-links">
                <a className="discord" target="_blank" href="" title="Cepheus Discord"><i className="fa-brands fa-discord"></i></a>
                <a className="instagram" href="" target="_blank"  title="Cepheus Instagram"><i className="fa-brands fa-instagram"></i></a>
                <a className="twitter" href="" target="_blank"  title="Cepheus Twitter"><i className="fa-brands fa-twitter"></i></a>
            </div>
            <div className="location-link">
                <a className="location" href="https://maps.app.goo.gl/yozbya8gUFNouYgaA" target="_blank" title="College Map"><i className="fa-solid fa-location-dot"></i></a>
            </div>
            <div className={`arrow-up ${isVisible ? "visible" : "hidden"}`} title="Go to Top" onClick={scrollToTop}>
      <a href="#Home" style={{ textDecoration: "none" }}>
        <p><i className="fa-solid fa-arrow-up fa-bounce" style={{ color: "#000000" }}></i></p>
      </a>
    </div>
        </div>
        
    )
} 