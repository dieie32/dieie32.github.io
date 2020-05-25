import React from "react";
import "./style.css";

function Button(props) {
  return <button className="buttonStyles">{props.text}</button>;
}

export default Button;
