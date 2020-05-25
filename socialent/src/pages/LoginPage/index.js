import React from "react";
import Button from "../../components/Button";
import logo from "../../assets/images/logo.png";
import man from "../../assets/images/login-man.png";

import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div>
      <Button text="Sing Up" />
      <img src={logo} alt="Logo" />
      <img src={man} alt="Man" />

      <input type="text" />
      <input type="text" />
      <input type="submit" value="Login" />

      <p>
        By clicking the button, you agree to our
        <Link to="/terms">Terms of Service</Link>
        and have read and acknowledge our
        <Link to="/privacy">Privacy Policy</Link>.
      </p>
    </div>
  );
}

export default LoginPage;
