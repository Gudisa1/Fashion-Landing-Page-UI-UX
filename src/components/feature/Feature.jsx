import React from "react";
import "./feature.css";
import featureimages from "../../assets/img/feature.jpg";
function Feature() {
  return (
    <div div className="feature">
      <div className="feature-container">
        <div className="feature-image-container">
          <img
            className="feature-image"
            src={featureimages}
            alt="Feature Product image"
          />
        </div>
        <div className="feature-text">
          <h4 className="feature-heading-secondary">Featured Product</h4>
          <h2 className="feature-heading-terittary">Ulina Fashionable Jeans</h2>
          <p className="feature-paragraph">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequa uis aute irure dolor
          </p>
          <div className="feature-price-container">
            <h3 className="feature-current-price">$199</h3>
            <p className="feature-before-price">$399</p>
            <button className="feature-btn">
              <a className="feature-btn-text" href="">
                Buy Now
              </a>
            </button>
          </div>
          <p className="feature-deadline">Ends in</p>
          <div className="feature-timer">
            <div className="feature-timer-container">
              <div className="feature-timer">
                <div className="feture-timer-num-container">
                  <p className="feature-timer-num">11 </p>
                </div>

                <p className="feature-timer-colon">:</p>
              </div>
              <h5 className="feature-timer-text">DAYS</h5>
            </div>
            <div className="feature-timer-container">
              <div className="feature-timer">
                <div className="feture-timer-num-container">
                  <p className="feature-timer-num">21 </p>
                </div>

                <p className="feature-timer-colon">:</p>
              </div>
              <h5 className="feature-timer-text">HRS</h5>
            </div>
            <div className="feature-timer-container">
              <div className="feature-timer">
                <div className="feture-timer-num-container">
                  <p className="feature-timer-num">48 </p>
                </div>

                <p className="feature-timer-colon">:</p>
              </div>
              <h5 className="feature-timer-text">MINS</h5>
            </div>
            <div className="feature-timer-container">
              <div className="feature-timer">
                <div className="feture-timer-num-container">
                  <p className="feature-timer-num">24 </p>
                </div>

                <p className="feature-timer-colon"></p>
              </div>
              <h5 className="feature-timer-text">SECS</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
