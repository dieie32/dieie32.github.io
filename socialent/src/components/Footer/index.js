import React from "react";
import "./style.css";
import logo from "../../assets/images/logo.png";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="footStyle">
        <img src={logo} alt="Logo" />

        <div className="displayFlexBlockWrapper">
          <ul className="displayFlexWrapper merged">
            <li className="merged">
              <Link to="/presskit">Press Kit</Link>
            </li>
            <li className="merged">
              <Link to="/about">About us</Link>
            </li>
            <li className="merged">
              <Link to="/contact">Contact us</Link>
            </li>
            <li className="merged">
              <Link to="/terms">Terms of Service</Link>
            </li>
            <li className="merged">
              <Link to="/privacypolicy">Privacy Policy</Link>
            </li>
          </ul>

          <p style={{ padding: "50px 0 0 0" }}>© 2020 The Web Agence</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
