import React from "react";
import styles from "./styles";

function Button(props) {
  return <button style={styles.buttonStyles}>{props.text}</button>;
}

export default Button;
