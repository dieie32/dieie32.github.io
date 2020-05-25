import React from "react";
import "./style.css";

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
      {/* Manage */}
      <section className="sectionManage">
        <div className="sectionManageInfoWrapper">
          <img src={featured} alt="Featured Socialent" />
          <h1 className="sectionManageHeading">
            We manage Facebook Ads for successful businesses.
          </h1>
          <p className="sectionManageLorem">
            Driving sales through digital marketing to increase your revenue is
            our number one focus. Your ROI is our Northstar.
          </p>

          <div className="sectionManageTickWrapper">
            <Button text="Get Started" />
            <ul className="sectionManageTicks">
              <li className="markStyle">
                <img src={galka} alt="Tick Socialent" className="galkaWidth" />
                <p>Quick onboarding</p>
              </li>

              <li className="markStyle">
                <img src={galka} alt="Tick Socialent" className="galkaWidth" />
                <p>Cancel anytime</p>
              </li>
            </ul>
          </div>
        </div>

        <img
          src={mainMan}
          alt="Main man Landing"
          className="sectionManageImage"
        />
      </section>
      {/* End Manage */}

      {/* MatterSize */}
      <section className="sectionMatterSize">
        <img
          src={brushMan}
          alt="Main man Landing"
          className="sectionMatterSizeImage"
        />

        <div className="flexEnd flexColumn">
          <h2 className="secondSection sectionMatterSizeHeading">
            No matter the size of your business we can help.
          </h2>
          <p className="fontTw secondSection sectionMatterSizeLorem">
            We have a very specific goal to achieve when working with our
            clients and that is to bring you a substantial return on your
            investment by driving more sales through digital marketing efforts.
          </p>
          <Button text="Get Started" />
        </div>
      </section>
      {/* End MatterSize */}

      {/* Agency */}
      <section className="sectionAgency">
        <h2 className="sectionAgencyHeading">
          You will get full access to our whole agency team through our platform
        </h2>
        <p className="fontTw sectionAgencyLorem">
          Our team will manage the whole creation process, the targeting
          audience and the posting of your ads.
        </p>
        <img src={chillMan} alt="Chill Man Landing" className="sectionAgencyImage"/>
      </section>
      {/* End Agency */}

      {/* Without us */}
      <section className="sectionWithout">
        <h2 className="sectionWithoutHeading">
          Your social networks without us
        </h2>
        <img src={instaOne} alt="Instagram Landing" className="sectionWithoutImage"/>
      </section>
      {/* Without us end */}

      {/* WithUs */}
      <section className="sectionWithUs">
        <h2 className="sectionWithUsHeading">With</h2>
        <img src={logo} alt="Logo" className="sectionWithUsLogo" />
        <img src={instaTwo} alt="Instagram Landing" className="sectionWithUsImage"/>
      </section>
      {/* WithUs End */}

      {/* Pricing */}
      <section className="sectionPricing">
        <h2 className="sectionPricingHeading">Simple pricing</h2>
        <p>A pay-once license, just for you</p>
        <Switch
          id="Switch-1"
          offLabel="Bill Monthly"
          onChange={function noRefCheck() {}}
          onLabel="Bill Annually"
        />
        <div className="sectionPricingWrapper">
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
      {/* Pricing end */}

      {/* OftenQuestion */}
      <section className="sectionOftenQuestion">
        <h2 className="sectionOftenQuestionHeading">
          The questions they ask us most often
        </h2>

        <Collaps />
      </section>
      {/* Pricing end */}

      <Footer />
    </div>
  );
}

export default LandingPage;
