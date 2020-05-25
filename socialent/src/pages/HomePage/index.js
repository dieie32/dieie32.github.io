import React from "react";
import styles from "./styles";

import image_man from "../../assets/images/main-page-man.png";
import Button from "../../components/Button";

function HomePage() {
  return (
    <div
      style={{
        ...styles.displayFlex,
        ...styles.wrapperStyle,
      }}
    >
      <img
        src={image_man}
        alt="Man with Brush Socialent"
        style={styles.imageStyle}
      />

      <div
        style={{
          ...styles.displayFlex,
          ...styles.textWrapper,
        }}
      >
        <h1
          style={{
            ...styles.textArrive,
            ...styles.headingStyle,
          }}
        >
          We love to explore new ways to engage with brands and reach
        </h1>
        <p
          style={{
            ...styles.textArrive,
            ...styles.loremText,
          }}
        >
          Nor again is there anyone who loves or pursues or desires to obtain
          pain of itself, because it is pain, but because.
        </p>

        <Button text="Get Started" />
      </div>
    </div>
  );
}

export default HomePage;
