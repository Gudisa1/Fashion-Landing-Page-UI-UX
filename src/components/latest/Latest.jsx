import React from "react";
import "./latest.css";
import tshirt1 from "../../assets/img/tshirt1.jpg";
import tshirt2 from "../../assets/img/tshirt2.jpg";
import tshirt3 from "../../assets/img/tshirt3.jpg";
import tshirt4 from "../../assets/img/tshirt4.jpg";
function Latest() {
  return (
    <main className="latest">
      <div className="latest-container">
        <div className="latest-text">
          <h3 className="latest-heading">Latest Arrival</h3>
          <p className="latest-paragraph">
            Showing out latest arrival on summer
          </p>
        </div>
        <div className="latest-products">
          <div className="latest-product">
            <div className="img-container">
              <img src={tshirt1} alt="tshirt picture" className="img-product" />
              <p className="top">Top</p>
              <p className="sale">Sale</p>
            </div>
            <p className="review-par">
              ⭐⭐⭐⭐⭐ <span className="latest-review">4 Reviews</span>
            </p>

            <h4 className="latest-heading-four">Ladies yellow top</h4>

            <p className="current-price">$25</p>
          </div>
          <div className="latest-product">
            <div className="img-container">
              <img src={tshirt2} alt="tshirt picture" className="img-product" />
              <p className="top">Top</p>
              <p className="sale">Sale</p>
            </div>
            <p className="review-par">
              ⭐⭐⭐⭐⭐ <span className="latest-review">4 Reviews</span>
            </p>

            <h4 className="latest-heading-four">Ladies yellow top</h4>

            <p className="current-price">$25</p>
          </div>
          <div className="latest-product">
            <div className="img-container">
              <img src={tshirt3} alt="tshirt picture" className="img-product" />
              <p className="top">Top</p>
              <p className="sale">Sale</p>
            </div>
            <p className="review-par">
              ⭐⭐⭐⭐⭐ <span className="latest-review">4 Reviews</span>
            </p>

            <h4 className="latest-heading-four">Ladies yellow top</h4>

            <p className="current-price">$25</p>
          </div>
          <div className="latest-product">
            <div className="img-container">
              <img src={tshirt4} alt="tshirt picture" className="img-product" />
              <p className="top">Top</p>
              <p className="sale">Sale</p>
            </div>
            <p className="review-par">
              ⭐⭐⭐⭐⭐ <span className="latest-review">4 Reviews</span>
            </p>

            <h4 className="latest-heading-four">Ladies yellow top</h4>

            <p className="current-price">$25</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Latest;
