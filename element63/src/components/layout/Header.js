import React, { Component } from "react";
import { Menu } from "./menu";
import Mobilemenu from "./Mobile_menu";

export class Header extends Component {
  state = {
    show: false,
  };
  toggle = () =>
    this.setState((currentState) => ({ show: !currentState.show }));
  render() {
    return (
      <header id="masthead" className="header ttm-header-style-01">
        {/* ttm-topbar-wrapper */}
        <div className="ttm-topbar-wrapper ttm-bgcolor-darkgrey ttm-textcolor-white clearfix">
          <div className="container-xl">
            <div className="row">
              <div className="col-lg-5">
                <ul className="top-contact text-left">
                  <li>
                    <i className="fas fa-map-marker-alt" />
                    &nbsp;&nbsp;24 Tech Roqad st Ny 10023
                  </li>
                  <li>
                    <i className="far fa-envelope" />
                    &nbsp;&nbsp;
                    <a to="mailto:info@example.com.com">info@example.com</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-7">
                <div className="topbar-right text-right d-flex justify-content-end">
                  <ul className="top-contact">
                    <li>
                      <i className="far fa-clock" />
                      &nbsp;&nbsp;Office Hour: 08:00am - 6:00pm
                    </li>
                  </ul>
                  <div className="ttm-social-links-wrapper list-inline">
                    <ul className="social-icons">
                      <li>
                        <a className=" tooltip-bottom" data-tooltip="Facebook">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a className=" tooltip-bottom" data-tooltip="Twitter">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a className=" tooltip-bottom" data-tooltip="Flickr">
                          <i className="fab fa-flickr" />
                        </a>
                      </li>
                      <li>
                        <a className=" tooltip-bottom" data-tooltip=" aedin">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="header-btn">
                    <a
                      className="ttm-btn ttm-btn-size-md ttm-bgcolor-skincolor"
                      to="#"
                    >
                      Get A Quote
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ttm-topbar-wrapper end */}
        {/* ttm-header-wrap */}
        <div className="ttm-header-wrap">
          <div id="navbar" className="ttm-stickable-header clearfix">
            <div className="site-header-menu">
              <div className="container-xl">
                {/* site-branding */}
                <div className="site-branding">
                  <a
                    className="home-link"
                    href={process.env.PUBLIC_URL + "/"}
                    title="Altech"
                    rel="home"
                  >
                    <img
                      id="logo-img"
                      className="img-fluid"
                      alt="logo"
                      src="images/logo.png"
                    />
                  </a>
                </div>
                {/* site-branding end*/}
                {/*site-navigation */}
                <div className="site-navigation">
                  <div className="ttm-right-header"></div>
                  <Menu />
                  <div className="mobilemenu">
                    <Mobilemenu />
                  </div>
                </div>
                {/*site-navigation end*/}
              </div>
            </div>
          </div>
        </div>
        {/* ttm-header-wrap end*/}
      </header>
    );
  }
}

export default Header;
