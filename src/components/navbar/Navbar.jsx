import React from "react";
import "./navbar.css";
import logo from "../../assets/img/logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
function Navbar() {
  return (
    <>
      <nav className="nav-container">
        <div className="logo">
          <img src={logo} alt="Company logo" className="company-logo" />
          <p className="logo-text">Ulina</p>
        </div>
        <div className="links-container">
          <ul className="links">
            <li className="link">
              <a href="">Home</a>
            </li>
            <li className="link">
              <a href="">About</a>
            </li>
            <li className="link">
              <a href="">Shop</a>
            </li>
            <li className="link">
              <a href="">Page</a>
            </li>
            <li className="link">
              <a href="">Blog</a>
            </li>
            <li className="link">
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div className="icons">
          <AiOutlineSearch className="icon" />
          <BsFillPersonFill className="icon" />
          <AiOutlineShoppingCart className="icon" />
        </div>
      </nav>
      <hr className="hr" />
    </>
  );
}

export default Navbar;
