import React from "react";
import girl from "../../assets/img/girl.jpg";
import boy from "../../assets/img/boy.jpg";
import "./category.css";
function Category() {
  return (
    <div className="category">
      <div className="category-container">
        <div className="category-container1">
          <div className="category-container-text">
            <h5 className="category-discount">Get 40% Off</h5>
            <p className="category-description">Women’s New Collection</p>
            <h6 className="category-cta">SHOP NOW</h6>
          </div>
          <div className="div category-container-img">
            <img className="category-img" src={girl} alt="" />
          </div>
        </div>
        <div className="category-container1">
          <div className="category-container-text">
            <h5 className="category-discount">Stay up to date</h5>
            <p className="category-description">Men’s Trendy Fashion</p>
            <h6 className="category-cta">SHOP NOW</h6>
          </div>
          <div className="div category-container-img">
            <img className="category-img" src={boy} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
