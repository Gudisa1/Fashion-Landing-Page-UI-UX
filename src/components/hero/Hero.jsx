import React from "react";
import "./hero.css";
import hero from "../../assets/img/hero.jpg";
function Hero() {
  return (
    <main>
      <div className="hero-container">
        <div className="hero-text">
          <h3 className="hero-title">SUMMER SALE IS ON</h3>
          <h2 className="hero-description">Make Your Fashion More Perfect</h2>
          <p className="hero-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="btn">
            <a href="" class="btn-text">
              Explore More
            </a>
          </button>
        </div>
        <div className="hero-img">
          <img src={hero} alt="Hero Section Image" className="hero-image" />
        </div>
      </div>
    </main>
  );
}

export default Hero;
