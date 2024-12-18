import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets.js";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="nav-logo">UrbanBites.<br/><span>Admin Panel</span></h1>
      <img className="profile" src={assets.profile_image} alt="" />
    </div>
  );
};

export default Navbar;
