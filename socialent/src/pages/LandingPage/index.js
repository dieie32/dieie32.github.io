import React from "react";
import styles from "./styles";

import mainMan from "../../assets/images/langing-page-main.png";
import brushMan from "../../assets/images/main-page-man.png";
import chillMan from "../../assets/images/chill-man.png";
import instaOne from "../../assets/images/Instagram-1.png";
import instaTwo from "../../assets/images/Instagram-2.png";
import featured from "../../assets/images/featured.png";
import galka from "../../assets/images/galka.png";
import logo from "../../assets/images/logo.png";

import { Switch } from "react-materialize";
import Button from "../../components/Button";
import Collaps from "../../components/Collaps";
import Footer from "../../components/Footer";

function LandingPage() {
  return (
    <div>
      <section
        style={{
          ...styles.flexStart,
          padding: "125px 0 0 81px",
          minHeight: "90vh",
        }}
      >
        <div
          style={{
            ...styles.flexStart,
            ...styles.flexColumn,
            padding: "70px 0 0 0",
          }}
        >
          <img src={featured} alt="Featured Socialent" />

          <h1 style={{ fontSize: 60, padding: "40px 0", lineHeight: "1.5em" }}>
            We manage Facebook Ads for successful businesses.
          </h1>
          <p
            style={{
              fontSize: 28,
              padding: "0 0 50px 0",
              lineHeight: "1.5em",
              maxWidth: 650,
            }}
          >
            Driving sales through digital marketing to increase your revenue is
            our number one focus. Your ROI is our Northstar.
          </p>

          <div style={{ ...styles.flexCenter }}>
            <Button text="Get Started" />
            <ul style={{ ...styles.flexCenter }}>
              <li
                style={{
                  ...styles.markStyle,
                }}
              >
                <img
                  src={galka}
                  alt="Tick Socialent"
                  style={styles.galkaWidth}
                />
                <p>Quick onboarding</p>
              </li>
              <li
                style={{
                  ...styles.markStyle,
                }}
              >
                <img
                  src={galka}
                  alt="Tick Socialent"
                  style={styles.galkaWidth}
                />
                <p>Cancel anytime</p>
              </li>
            </ul>
          </div>
        </div>

        <img src={mainMan} alt="Main man Landing" style={{ width: "40%" }} />
      </section>

      <section
        style={{
          ...styles.flexStart,
          ...styles.flexAround,
          padding: "125px 81px 0",
        }}
      >
        <img src={brushMan} alt="Main man Landing" style={{ width: "45%" }} />

        <div
          style={{
            ...styles.flexEnd,
            ...styles.flexColumn,
          }}
        >
          <h2
            style={{
              ...styles.secondHeading,
              ...styles.secondSection,
              maxWidth: 605,
            }}
          >
            No matter the size of your business we can help.
          </h2>
          <p
            style={{
              ...styles.fontTw,
              ...styles.secondSection,
              maxWidth: 645,
            }}
          >
            We have a very specific goal to achieve when working with our
            clients and that is to bring you a substantial return on your
            investment by driving more sales through digital marketing efforts.
          </p>

          <Button text="Get Started" />
        </div>
      </section>

      <section
        style={{
          ...styles.flexCenter,
          ...styles.flexColumn,
          padding: "210px 81px 0px",
        }}
      >
        <h2
          style={{
            ...styles.secondHeading,
            ...styles.textCenter,
            ...styles.marginAuto,
            maxWidth: 1135,
          }}
        >
          You will get full access to our whole agency team through our platform
        </h2>
        <p
          style={{
            ...styles.fontTw,
            ...styles.textCenter,
            ...styles.marginAuto,
            padding: "20px 0",
            maxWidth: 550,
          }}
        >
          Our team will manage the whole creation process, the targeting
          audience and the posting of your ads.
        </p>

        <img src={chillMan} alt="Chill Man Landing" />
      </section>

      <section
        style={{
          ...styles.flexCenter,
          ...styles.flexColumn,
          padding: "290px 81px 0",
        }}
      >
        <h2
          style={{
            ...styles.secondHeading,
            ...styles.textCenter,
            ...styles.marginAuto,
            padding: "0 0 88px 0",
            maxWidth: 550,
          }}
        >
          Your social networks without us
        </h2>

        <img src={instaOne} alt="Instagram Landing" />
      </section>

      <section
        style={{
          ...styles.flexCenter,
          ...styles.flexColumn,
          padding: "125px 0",
        }}
      >
        <h2
          style={{
            ...styles.secondHeading,
            ...styles.textCenter,
            padding: "0 0 25px 0",
          }}
        >
          With
        </h2>

        <img src={logo} alt="Logo" style={{ padding: "0 0 86px 0" }} />

        <img src={instaTwo} alt="Instagram Landing" />
      </section>

      <section
        style={{
          ...styles.flexCenter,
          ...styles.flexColumn,
          padding: "125px 0",
        }}
      >
        <h2 style={{ ...styles.secondHeading }}>Simple pricing</h2>

        <p>A pay-once license, just for you</p>

        <Switch
          id="Switch-1"
          offLabel="Bill Monthly"
          onChange={function noRefCheck() {}}
          onLabel="Bill Annually"
        />
        <div style={styles.flexCenter}>
          <div>
            <h3>Single License</h3>
            <p>A pay-once license, just for you</p>

            <div>
              <p>$849</p>
              <span>/MO</span>
            </div>

            <ul>
              <li>Single project use</li>
              <li>Single project use</li>
              <li>Single project use</li>
            </ul>

            <Button text="Get Starter" />
          </div>
          <div>
            <h3>Single License</h3>
            <p>A pay-once license, just for you</p>

            <div>
              <p>$1699</p>
              <span>/MO</span>
            </div>

            <ul>
              <li>Single project use</li>
              <li>Single project use</li>
              <li>Single project use</li>
              <li>Single project use</li>
              <li>Single project use</li>
            </ul>

            <Button text="Subscribe Now" />
          </div>
        </div>
      </section>

      <section
        style={{
          ...styles.flexCenter,
          ...styles.flexColumn,
          padding: "125px 0",
        }}
      >
        <h2 style={{ fontSize: 52, ...styles.textCenter, padding: "20px 0" }}>
          The questions they ask us most often
        </h2>

        <Collaps />
      </section>

      <Footer />
    </div>
  );
}

export default LandingPage;
