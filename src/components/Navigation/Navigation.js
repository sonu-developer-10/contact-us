import React from "react";
import styles from "./Navigation.module.css";
import logo from "../../images/dsc_logo.png"

const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`}>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
    </nav>
  );
};

export default Navigation;
