import React from "react";
import "./products.css";
import model1 from "../../assets/img/model1.jpg";
import model2 from "../../assets/img/model2.jpg";
import model3 from "../../assets/img/model3.jpg";
import model4 from "../../assets/img/model4.jpg";
import model5 from "../../assets/img/model5.jpg";
import model6 from "../../assets/img/model6.jpg";
import model7 from "../../assets/img/model7.jpg";
import model8 from "../../assets/img/model8.jpg";

function Products() {
  return (
    <div className="products">
      <div className="products-container">
        <div className="products-text">
          <div className="products-text-description">
            <h2 className="products-heading">Featured Product</h2>
            <p className="products-paragraph">
              Showing our latest arrival on this summer
            </p>
          </div>
          <div className="products-category">
            <h5 className="products-category-text category-active">Men</h5>
            <h5 className="products-category-text">Women</h5>
            <h5 className="products-category-text">Kids</h5>
            <h5 className="products-category-text">Accessories</h5>
          </div>
        </div>
        <div className="latest-products">
          <div className="latest-product">
            <div className="img-container">
              <img src={model1} alt="tshirt picture" className="img-product" />
              <p className="top">Top</p>
              <p className="sale">Sale</p>
            </div>
            <p className="review-par">
              ⭐⭐⭐⭐⭐ <span className="latest-review">4 Reviews</span>
            </p>

            <h4 className="latest-heading-four">Ladies yellow outfit</h4>

            <p className="current-price">$25</p>
          </div>
          <div className="latest-product">
            <div className="img-container">
              <img src={model2} alt="tshirt picture" className="img-product" />
              <p className="top">Top</p>
              <p className="sale">Sale</p>
            </div>
            <p className="review-par">
              ⭐⭐⭐⭐⭐ <span className="latest-review">4 Reviews</span>
            </p>

            <h4 className="latest-heading-four">Ladies Black top</h4>

            <p className="current-price">$25</p>
          </div>
          <div className="latest-product">
            <div className="img-container">
              <img src={model3} alt="tshirt picture" className="img-product" />
              <p className="top">Top</p>
              <p className="sale">Sale</p>
            </div>
            <p className="review-par">
              ⭐⭐⭐⭐⭐ <span className="latest-review">4 Reviews</span>
            </p>

            <h4 className="latest-heading-four">Boys Black top</h4>

            <p className="current-price">$25</p>
          </div>
          <div className="latest-product">
            <div className="img-container">
              <img src={model4} alt="tshirt picture" className="img-product" />
              <p className="top">Top</p>
              <p className="sale">Sale</p>
            </div>
            <p className="review-par">
              ⭐⭐⭐⭐⭐ <span className="latest-review">4 Reviews</span>
            </p>

            <h4 className="latest-heading-four">Ladies white outfit</h4>

            <p className="current-price">$25</p>
          </div>
          <div className="latest-product">
            <div className="img-container">
              <img src={model5} alt="tshirt picture" className="img-product" />
              <p className="top">Top</p>
              <p className="sale">Sale</p>
            </div>
            <p className="review-par">
              ⭐⭐⭐⭐⭐ <span className="latest-review">4 Reviews</span>
            </p>

            <h4 className="latest-heading-four">Ladies black outfit</h4>

            <p className="current-price">$25</p>
          </div>
          <div className="latest-product">
            <div className="img-container">
              <img src={model6} alt="tshirt picture" className="img-product" />
              <p className="top">Top</p>
              <p className="sale">Sale</p>
            </div>
            <p className="review-par">
              ⭐⭐⭐⭐⭐ <span className="latest-review">4 Reviews</span>
            </p>

            <h4 className="latest-heading-four">Ladies Current trend</h4>

            <p className="current-price">$25</p>
          </div>
          <div className="latest-product">
            <div className="img-container">
              <img src={model7} alt="tshirt picture" className="img-product" />
              <p className="top">Top</p>
              <p className="sale">Sale</p>
            </div>
            <p className="review-par">
              ⭐⭐⭐⭐⭐ <span className="latest-review">4 Reviews</span>
            </p>

            <h4 className="latest-heading-four">Ladies Current trend</h4>

            <p className="current-price">$25</p>
          </div>
          <div className="latest-product">
            <div className="img-container">
              <img src={model8} alt="tshirt picture" className="img-product" />
              <p className="top">Top</p>
              <p className="sale">Sale</p>
            </div>
            <p className="review-par">
              ⭐⭐⭐⭐⭐ <span className="latest-review">4 Reviews</span>
            </p>

            <h4 className="latest-heading-four">Ladies Current trend</h4>

            <p className="current-price">$25</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
