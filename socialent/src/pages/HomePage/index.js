import React from "react";
import "./style.css";

import image_man from "../../assets/images/main-page-man.png";
import Button from "../../components/Button";

function HomePage() {
  return (
    <div className="homePageWrapper">
      <img
        src={image_man}
        alt="Man with Brush Socialent"
        className="imageStyle"
      />

      <div className="homeInfoWrapper">
        <h1 className="textArrive homeInfoHeading">
          We love to explore new ways to engage with brands and reach
        </h1>
        <p className="textArrive homeInfoLorem">
          Nor again is there anyone who loves or pursues or desires to obtain
          pain of itself, because it is pain, but because.
        </p>

        <Button text="Get Started" />
      </div>
    </div>
  );
}

export default HomePage;
