import React, { useState } from "react";
import "./BannerContent.css";

const BannerContent = () => {
  const [isBanner, setIsBanner] = useState(true);
  return (
    isBanner && (
      <div className="banner-overlay">
        <div className="banner-container">
          <h1>Welcome!</h1>
          <h2 className="subtitle">To The Grand Hotel Meta Experience</h2>
          <p className="content">
            Find out what the Grand Hotel has to offer right from the comfort of
            your home. Take a virtual tour with your avatar and book your stay
            with us.
          </p>
          <button className="cta" onClick={() => setIsBanner(false)}>
            Proceed to Avatar Selection
          </button>
        </div>
      </div>
    )
  );
};

export default BannerContent;
