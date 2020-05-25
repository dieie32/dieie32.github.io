import React from "react";
import styles from "./styles";
import logo from "../../assets/images/logo.png";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer style={styles.footStyle}>
        <img src={logo} alt="Logo" />

        <div style={styles.displayFlex}>
          <div style={styles.displayFlex}>
            <ul style={{ ...styles.displayFlex, ...styles.merged }}>
              <li style={styles.merged}>
                <Link to="/presskit">Press Kit</Link>
              </li>
              <li style={styles.merged}>
                <Link to="/about">About us</Link>
              </li>
              <li style={styles.merged}>
                <Link to="/contact">Contact us</Link>
              </li>
              <li style={styles.merged}>
                <Link to="/terms">Terms of Service</Link>
              </li>
              <li style={styles.merged}>
                <Link to="/privacypolicy">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          <p style={{ padding: "50px 0 0 0" }}>© 2020 The Web Agence</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
