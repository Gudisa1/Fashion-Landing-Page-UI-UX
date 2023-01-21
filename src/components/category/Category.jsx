import React from "react";
import girl from "../../assets/img/girl.jpg";
import boy from "../../assets/img/boy.jpg";
import clothes from "../../assets/img/clothes.jpg";
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
      <div className="shop">
        <div className="shop-text">
          <h2 className="shop-text-heading">Shop By Category</h2>
          <p className="shop-text-paragraph">
            Showing our latest arrival on this summer
          </p>
        </div>
        <div className="shop-image">
          <div className="shop-image-con">
            <img src={clothes} alt="" className="shop-image1" />
            <h5 className="shop-image-heading">Clothes</h5>
            <p className="shop-image-paragraph">192 Items</p>
          </div>
          <div className="shop-image-con">
            <img src={clothes} alt="" className="shop-image1" />
            <h5 className="shop-image-heading">Clothes</h5>
            <p className="shop-image-paragraph">192 Items</p>
          </div>
          <div className="shop-image-con">
            <img src={clothes} alt="" className="shop-image1" />
            <h5 className="shop-image-heading">Clothes</h5>
            <p className="shop-image-paragraph">192 Items</p>
          </div>
          <div className="shop-image-con">
            <img src={clothes} alt="" className="shop-image1" />
            <h5 className="shop-image-heading">Clothes</h5>
            <p className="shop-image-paragraph">192 Items</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
