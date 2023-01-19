import React from "react";
import "./facility.css";
import { BsTruck } from "react-icons/bs";
import { FaCcApplePay } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { AiFillClockCircle } from "react-icons/ai";

function facility() {
  return (
    <section>
      <div className="facility-container">
        <div className="facility">
          <BsTruck className="facility-icon" />
          <h3 className="facility-heading">Free Shipping</h3>
          <p className="facility-paragraph">
            Ut enim ad minim veniam liquip ami tomader
          </p>
        </div>
        <div className="facility">
          <FaCcApplePay className="facility-icon" />
          <h3 className="facility-heading">Secure Payments</h3>
          <p className="facility-paragraph">
            Eonim ad minim veniam liquip tomader
          </p>
        </div>
        <div className="facility">
          <GiReturnArrow className="facility-icon" />
          <h3 className="facility-heading">Easy Returns</h3>
          <p className="facility-paragraph">
            Be enim ad minim veniam liquipa ami tomader
          </p>
        </div>
        <div className="facility">
          <AiFillClockCircle className="facility-icon" />
          <h3 className="facility-heading">24/7 Support</h3>
          <p className="facility-paragraph">
            Ut enim ad minim veniam liquip ami tomader
          </p>
        </div>
      </div>
    </section>
  );
}

export default facility;
