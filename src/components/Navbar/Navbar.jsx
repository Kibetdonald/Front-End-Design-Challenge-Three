import React, { useState } from "react";
import "./Navbar.scss";
import Logo from "../../Assets/Images/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">
        <img src={Logo} style={{ width: "50px" }} alt="." />
      </span>
      <hr className="separator"/>
      <div className={`nav-items ${isOpen && "open"}`}>
     <a href="#">   <span style={{color: "#fff"}}>00</span> Home</a>
        <a href="#"><span style={{color: "#fff"}}>01</span>  Destination</a>
        <a href="#">  <span style={{color: "#fff"}}>02</span>  Crew</a>
        <a href="#">  <span style={{color: "#fff"}}>03</span>  Technology</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
