import React, { Component } from "react";
import Slider from "react-slick";
import { MDBProgress } from "mdbreact";
import { Header } from "./layout/Header";
import { CarouselPage } from "./banner/Home1_banner";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const images = [
  "https://via.placeholder.com/600X750/444444.jpg",
  "https://via.placeholder.com/600X750/444444.jpg",
  "https://via.placeholder.com/600X750/444444.jpg",
  "https://via.placeholder.com/600X750/444444.jpg",
  "https://via.placeholder.com/600X750/444444.jpg",
];

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }
  render() {
    const { photoIndex, isOpen } = this.state;
    var slick_slider = {
      dots: false,
      arrow: false,
      autoplay: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,

      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className="site-main">
        <Header />
        {/* home banner */}
        <CarouselPage />
        {/* home banner end*/}
        
        {/* aboutus-section */}
        <section className="ttm-row aboutus-section clearfix" id="aboutUsSection">
          <div className="container-xl">
            <div className="row">
              <div className="col-lg-6">
                {/* section title */}
                <div className="section-title with-desc clearfix">
                  <div className="title-header">
                    <h5>About us</h5>
                    <h2 className="title">
                      We are here to IT Solution with 20 years of{" "}
                      <span>experience</span>
                    </h2>
                  </div>
                  <div className="title-desc">
                    <p>
                      Web designing in a powerful way of just not an only
                      professions, however, in a passion for our Company. We
                      have to a tendency to believe the idea that smart looking
                      of any website is the first impression on visitors. And
                      the smart design of any website is the starting point.
                    </p>
                    <p>
                      We have a special team for website style who has been
                      involved in designing professional websites of all
                      categories.
                    </p>
                  </div>
                </div>
                {/* section title end */}
                {/* row */}
                <div className="row no-gutters mt-4">
                  <div className="col-md-6 col-lg-6 col-sm-6">
                    <ul className="ttm-list ttm-list-style-icon">
                      <li>
                        <i className="far fa-circle ttm-textcolor-skincolor" />
                        <span className="ttm-list-li-content">
                          Web And Mobile Application{" "}
                        </span>
                      </li>
                      <li>
                        <i className="far fa-circle ttm-textcolor-skincolor" />
                        <span className="ttm-list-li-content">
                          New Domain Registration
                        </span>
                      </li>
                      <li>
                        <i className="far fa-circle ttm-textcolor-skincolor" />
                        <span className="ttm-list-li-content">
                          Data Text Synchronization
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6 col-lg-6 col-sm-6">
                    <ul className="ttm-list ttm-list-style-icon">
                      <li>
                        <i className="far fa-circle ttm-textcolor-skincolor" />
                        <span className="ttm-list-li-content">
                          Improving Our Website Design
                        </span>
                      </li>
                      <li>
                        <i className="far fa-circle ttm-textcolor-skincolor" />
                        <span className="ttm-list-li-content">
                          Web &amp; Email Hosting Services{" "}
                        </span>
                      </li>
                      <li>
                        <i className="far fa-circle ttm-textcolor-skincolor" />
                        <span className="ttm-list-li-content">
                          Artificial Intelligence Web App
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* row END*/}
                {/* separator */}
                <div className="separator">
                  <div className="sep-line mt-4 mb-4" />
                </div>
                {/* separator */}
                <div className="fs-16 ttm-textcolor-darkgrey">
                  <span>
                    Call to ask{" "}
                    <a className="fw-500 ttm-textcolor-darkgrey">
                      <u>any question</u>
                    </a>
                  </span>
                  <strong className="fs-18">: 123-456-7890</strong> or{" "}
                  <strong className="fs-18">456-789-1430</strong>
                </div>
              </div>
              <div className="col-lg-6 res-991-mt-40 res-991-text-center">
                <div className="position-relative res-991-mt-30">
                  {/* ttm_single_image-wrapper */}
                  <div className="ttm_single_image-wrapper">
                    <img
                      className="img-fluid"
                      src="https://via.placeholder.com/649X614/444444.png"
                      title="single-img-one"
                      alt="single-img-one"
                    />
                  </div>
                  {/* ttm_single_image-wrapper end */}
                  {/*featured-icon-box*/}
                  <div className="about-overlay-01">
                    <p className="mb-0">
                      American IT Solutions Association AIA.
                    </p>
                  </div>
                  {/* featured-icon-box end*/}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* aboutus-section end */}

        {/* portfolio-section */}
        <section className="ttm-row bottomzero-padding-section  ttm-bg ttm-bgimage-yes bg-img5 ttm-bgcolor-skincolor clearfix" id="projectsSection">
          <div className="ttm-row-wrapper-bg-layer ttm-bg-layer" />
          <div className="container-xl pb-5 res-991-pb-0">
            <div className="row align-items-center ttm-textcolor-white">
              <div className="col-lg-5 res-991-text-center">
                <div className="section-title style3 mb-0 clearfix">
                  <div className="title-header mb-0">
                    <h5>We Make Connections</h5>
                    <h2 className="title">
                      Explore recent{" "}
                      <span className="ttm-textcolor-white">Projects</span>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 res-991-text-center">
                <div className="title-desc">
                  A project is a temporary endeavor with a defined beginning and
                  end, scope, and assigned resources.
                </div>
              </div>
              <div className="col-lg-2 text-right res-991-text-center res-991-mt-20">
                <a className="ttm-btn ttm-btn-size-md ttm-btn-style-border ttm-btn-color-white">
                  {" "}
                  Read More{" "}
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="ttm-row mt-10 zero-padding-section clearfix">
          <div className="container-fluid p-0">
            {isOpen && (
              <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={
                  images[(photoIndex + images.length - 1) % images.length]
                }
                onCloseRequest={() => this.setState({ isOpen: false })}
                onMovePrevRequest={() =>
                  this.setState({
                    photoIndex:
                      (photoIndex + images.length - 1) % images.length,
                  })
                }
                onMoveNextRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + 1) % images.length,
                  })
                }
              />
            )}
            <Slider
              className="row slick_slider ttm-boxes-spacing-10px"
              {...slick_slider}
              slidesToShow={5}
            >
              <div className="ttm-box-col-wrapper">
                <div className="featured-imagebox featured-imagebox-portfolio style1">
                  {/* featured-thumbnail */}
                  <div className="featured-thumbnail">
                    <img
                      className="img-fluid"
                      alt=""
                      src="https://via.placeholder.com/600X750/444444.jpg"
                    />
                  </div>
                  {/* featured-thumbnail end*/}
                  {/* ttm-box-view-overlay */}
                  <div className="ttm-box-view-overlay">
                    <div className="featured-iconbox ttm-media-link">
                      {/* ttm-media-link */}
                      <a
                        onClick={() => this.setState({ isOpen: true })}
                        className="ttm_image"
                      >
                        <i className="ti ti-search" />
                      </a>
                      <a
                        href={process.env.PUBLIC_URL + "/Single_style1"}
                        className="ttm_link"
                      >
                        <i className="ti ti-link" />
                      </a>
                    </div>
                  </div>
                  {/* ttm-box-view-overlay end*/}
                  <div className="featured-content">
                    <div className="featured-title">
                      {/* featured-title */}
                      <h5>
                        <a href={process.env.PUBLIC_URL + "/Single_style1"}>
                          Business Seminarsetwst
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ttm-box-col-wrapper">
                {/* featured-imagebox-portfolio */}
                <div className="featured-imagebox featured-imagebox-portfolio style1">
                  {/* featured-thumbnail */}
                  <div className="featured-thumbnail">
                    <img
                      className="img-fluid"
                      alt=""
                      src="https://via.placeholder.com/600X750/444444.jpg"
                    />
                  </div>
                  {/* featured-thumbnail end*/}
                  {/* ttm-box-view-overlay */}
                  <div className="ttm-box-view-overlay">
                    <div className="featured-iconbox ttm-media-link">
                      {/* ttm-media-link */}
                      <a onClick={() => this.setState({ isOpen: true })}>
                        <i className="ti ti-search" />
                      </a>
                      <a
                        href={process.env.PUBLIC_URL + "/Single_style1"}
                        className="ttm_link"
                      >
                        <i className="ti ti-link" />
                      </a>
                    </div>
                  </div>
                  {/* ttm-box-view-overlay end*/}
                  <div className="featured-content">
                    <div className="featured-title">
                      {/* featured-title */}
                      <h5>
                        <a href={process.env.PUBLIC_URL + "/Single_style1"}>
                          IT Management
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
                {/* featured-thumbnail */}
              </div>
              <div className="ttm-box-col-wrapper">
                {/* featured-imagebox-portfolio */}
                <div className="featured-imagebox featured-imagebox-portfolio style1">
                  {/* featured-thumbnail */}
                  <div className="featured-thumbnail">
                    <img
                      className="img-fluid"
                      alt=""
                      src="https://via.placeholder.com/600X750/444444.jpg"
                    />
                  </div>
                  {/* featured-thumbnail end*/}
                  {/* ttm-box-view-overlay */}
                  <div className="ttm-box-view-overlay">
                    <div className="featured-iconbox ttm-media-link">
                      {/* ttm-media-link */}
                      <a onClick={() => this.setState({ isOpen: true })}>
                        <i className="ti ti-search" />
                      </a>
                      <a
                        href={process.env.PUBLIC_URL + "/Single_style1"}
                        className="ttm_link"
                      >
                        <i className="ti ti-link" />
                      </a>
                    </div>
                  </div>
                  {/* ttm-box-view-overlay end*/}
                  <div className="featured-content">
                    <div className="featured-title">
                      {/* featured-title */}
                      <h5>
                        <a href={process.env.PUBLIC_URL + "/Single_style1"}>
                          Cyber Security Analysis
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
                {/* featured-thumbnail */}
              </div>
              <div className="ttm-box-col-wrapper">
                {/* featured-imagebox-portfolio */}
                <div className="featured-imagebox featured-imagebox-portfolio style1">
                  {/* featured-thumbnail */}
                  <div className="featured-thumbnail">
                    <img
                      className="img-fluid"
                      alt=""
                      src="https://via.placeholder.com/600X750/444444.jpg"
                    />
                  </div>
                  {/* featured-thumbnail end*/}
                  {/* ttm-box-view-overlay */}
                  <div className="ttm-box-view-overlay">
                    <div className="featured-iconbox ttm-media-link">
                      {/* ttm-media-link */}
                      <a onClick={() => this.setState({ isOpen: true })}>
                        <i className="ti ti-search" />
                      </a>
                      <a
                        href={process.env.PUBLIC_URL + "/Single_style1"}
                        className="ttm_link"
                      >
                        <i className="ti ti-link" />
                      </a>
                    </div>
                  </div>
                  {/* ttm-box-view-overlay end*/}
                  <div className="featured-content">
                    <div className="featured-title">
                      {/* featured-title */}
                      <h5>
                        <a href={process.env.PUBLIC_URL + "/Single_style1"}>
                          Neural Networking
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
                {/* featured-thumbnail */}
              </div>
              <div className="ttm-box-col-wrapper">
                {/* featured-imagebox-portfolio */}
                <div className="featured-imagebox featured-imagebox-portfolio style1">
                  {/* featured-thumbnail */}
                  <div className="featured-thumbnail">
                    <img
                      className="img-fluid"
                      alt=""
                      src="https://via.placeholder.com/600X750/444444.jpg"
                    />
                  </div>
                  {/* featured-thumbnail end*/}
                  {/* ttm-box-view-overlay */}
                  <div className="ttm-box-view-overlay">
                    <div className="featured-iconbox ttm-media-link">
                      {/* ttm-media-link */}
                      <a onClick={() => this.setState({ isOpen: true })}>
                        <i className="ti ti-search" />
                      </a>
                      <a
                        href={process.env.PUBLIC_URL + "/Single_style1"}
                        className="ttm_link"
                      >
                        <i className="ti ti-link" />
                      </a>
                    </div>
                  </div>
                  {/* ttm-box-view-overlay end*/}
                  <div className="featured-content">
                    <div className="featured-title">
                      {/* featured-title */}
                      <h5>
                        <a href={process.env.PUBLIC_URL + "/Single_style1"}>
                          Data Management
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
                {/* featured-thumbnail */}
              </div>
              <div className="ttm-box-col-wrapper">
                {/* featured-imagebox-portfolio */}
                <div className="featured-imagebox featured-imagebox-portfolio style1">
                  {/* featured-thumbnail */}
                  <div className="featured-thumbnail">
                    <img
                      className="img-fluid"
                      alt=""
                      src="https://via.placeholder.com/600X750/444444.jpg"
                    />
                  </div>
                  {/* featured-thumbnail end*/}
                  {/* ttm-box-view-overlay */}
                  <div className="ttm-box-view-overlay">
                    <div className="featured-iconbox ttm-media-link">
                      {/* ttm-media-link */}
                      <a onClick={() => this.setState({ isOpen: true })}>
                        <i className="ti ti-search" />
                      </a>
                      <a
                        href={process.env.PUBLIC_URL + "/Single_style1"}
                        className="ttm_link"
                      >
                        <i className="ti ti-link" />
                      </a>
                    </div>
                  </div>
                  {/* ttm-box-view-overlay end*/}
                  <div className="featured-content">
                    <div className="featured-title">
                      {/* featured-title */}
                      <h5>
                        <a href={process.env.PUBLIC_URL + "/Single_style1"}>
                          Web Devlopment
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
                {/* featured-thumbnail */}
              </div>
            </Slider>
          </div>
        </section>
        {/* process-section end */}

        {/* services-section */}
        <section className="ttm-row history-section bg-img3 ttm-bgcolor-grey ttm-bg ttm-bgimage-yes clearfix" id="servicesSection">
          <div className="ttm-row-wrapper-bg-layer ttm-bg-layer" />
          <div className="container-xl">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                {/* section title */}
                <div className="section-title with-desc text-center clearfix">
                  <div className="title-header">
                    <h5>Our Services</h5>
                    <h2 className="title">
                      We run all kinds of services in form of{" "}
                      <span>Information &amp; Technologies</span>
                    </h2>
                  </div>
                </div>
                {/* section title end */}
              </div>
            </div>
            <Slider
              className="row slick_slider ttm-boxes-spacing-30px"
              {...slick_slider}
            >
              <div className="ttm-box-col-wrapper">
                <div className="ttm-history-box-wrapper">
                  {/* ttm-history-box-wrapper  */}
                  <div className="ttm-history-box-icon-wrapper">
                    {/* ttm-history-box-icon-wrapper  */}
                    {/*  featured-icon-box */}
                    <div className="featured-icon-box">
                      <div className="featured-icon">
                        {/*  featured-icon */}
                        <div className="ttm-icon ttm-bgcolor-white ttm-icon_element-size-md">
                          <i className="flaticon flaticon-business-and-finance" />
                          {/*  ttm-icon */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ttm-history-box-border" />
                  {/* ttm-history-box-border  */}
                  <div className="ttm-history-box-details ttm-bgcolor-white">
                    <div className="ttm-historybox-title">
                      <h5>IT Consultancy</h5>
                    </div>
                    {/* historybox-title  */}
                    <div className="ttm-historybox-description">
                      {/* description  */}
                      Expertise in IT consultancy for the IT companies, for
                      their different working areas Web-app related.
                    </div>
                    <a className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-20">
                      Read More <i className="ti ti-angle-double-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="ttm-box-col-wrapper">
                <div className="ttm-history-box-wrapper">
                  {/* ttm-history-box-wrapper  */}
                  <div className="ttm-history-box-icon-wrapper">
                    {/* ttm-history-box-icon-wrapper  */}
                    {/*  featured-icon-box */}
                    <div className="featured-icon-box">
                      <div className="featured-icon">
                        {/*  featured-icon */}
                        <div className="ttm-icon ttm-bgcolor-white ttm-icon_element-size-md">
                          <i className="flaticon flaticon-computer" />
                          {/*  ttm-icon */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ttm-history-box-border" />
                  {/* ttm-history-box-border  */}
                  <div className="ttm-history-box-details ttm-bgcolor-white">
                    <div className="ttm-historybox-title">
                      <h5>IT Management</h5>
                    </div>
                    {/* historybox-title  */}
                    <div className="ttm-historybox-description">
                      {/* description  */}
                      We provide all kind of IT management services of in the
                      according to on their organization prioritie.
                    </div>
                    <a className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-20">
                      Read More <i className="ti ti-angle-double-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="ttm-box-col-wrapper">
                <div className="ttm-history-box-wrapper">
                  {/* ttm-history-box-wrapper  */}
                  <div className="ttm-history-box-icon-wrapper">
                    {/* ttm-history-box-icon-wrapper  */}
                    {/*  featured-icon-box */}
                    <div className="featured-icon-box">
                      <div className="featured-icon">
                        {/*  featured-icon */}
                        <div className="ttm-icon ttm-bgcolor-white ttm-icon_element-size-md">
                          <i className="flaticon flaticon-data" />
                          {/*  ttm-icon */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ttm-history-box-border" />
                  {/* ttm-history-box-border  */}
                  <div className="ttm-history-box-details ttm-bgcolor-white">
                    <div className="ttm-historybox-title">
                      <h5>Product Design</h5>
                    </div>
                    {/* historybox-title  */}
                    <div className="ttm-historybox-description">
                      {/* description  */}
                      Our firm is expert to create an efficient for user
                      interface that makes design user interaction lively.
                    </div>
                    <a className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-20">
                      Read More <i className="ti ti-angle-double-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="ttm-box-col-wrapper">
                <div className="ttm-history-box-wrapper">
                  {/* ttm-history-box-wrapper  */}
                  <div className="ttm-history-box-icon-wrapper">
                    {/* ttm-history-box-icon-wrapper  */}
                    {/*  featured-icon-box */}
                    <div className="featured-icon-box">
                      <div className="featured-icon">
                        {/*  featured-icon */}
                        <div className="ttm-icon ttm-bgcolor-white ttm-icon_element-size-md">
                          <i className="flaticon flaticon-global-1" />
                          {/*  ttm-icon */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ttm-history-box-border" />
                  {/* ttm-history-box-border  */}
                  <div className="ttm-history-box-details ttm-bgcolor-white">
                    <div className="ttm-historybox-title">
                      <h5>Cloud Services</h5>
                    </div>
                    {/* historybox-title  */}
                    <div className="ttm-historybox-description">
                      {/* description  */}
                      We develop, migrate and work on web applications to ensure
                      that they run on capably on clouds.
                    </div>
                    <a className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-20">
                      Read More <i className="ti ti-angle-double-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="ttm-box-col-wrapper">
                <div className="ttm-history-box-wrapper">
                  {/* ttm-history-box-wrapper  */}
                  <div className="ttm-history-box-icon-wrapper">
                    {/* ttm-history-box-icon-wrapper  */}
                    {/*  featured-icon-box */}
                    <div className="featured-icon-box">
                      <div className="featured-icon">
                        {/*  featured-icon */}
                        <div className="ttm-icon ttm-bgcolor-white ttm-icon_element-size-md">
                          <i className="flaticon flaticon-business-and-finance" />
                          {/*  ttm-icon */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ttm-history-box-border" />
                  {/* ttm-history-box-border  */}
                  <div className="ttm-history-box-details ttm-bgcolor-white">
                    <div className="ttm-historybox-title">
                      <h5>IT Consultancy</h5>
                    </div>
                    {/* historybox-title  */}
                    <div className="ttm-historybox-description">
                      {/* description  */}
                      Expertise in IT consultancy for the IT companies, for
                      their different working areas Web-app related.
                    </div>
                    <a className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-20">
                      Read More <i className="ti ti-angle-double-right" />
                    </a>
                  </div>
                </div>
              </div>
            </Slider>

            <div className="row">
              <div className="col-md-12 text-center mt-5 res-991-mt-30">
                <p className="mb-0">
                  Don’t hesitate, contact us for better help and services.{" "}
                  <strong>
                    <u>
                      <a className="ttm-textcolor-darkgrey">
                        {" "}
                        View more Services
                      </a>
                    </u>
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* services-section end*/}


        {/* contactUS-section */}
        <section className="ttm-row zero-padding-section clearfix" id="contactSection">
          <div className="container-xl">
            <div className="row no-gutters">
              {/* row */}
              <div className="col-lg-5">
                <div className="spacing-9">
                  {/* section title */}
                  <div className="section-title with-desc clearfix">
                    <div className="title-header">
                      <h5>Come Visit Us At</h5>
                      <h2 className="title">Our Address</h2>
                    </div>
                  </div>
                  {/* section title end */}
                  <div className="row">
                    <div className="col-12">
                      {/* featured-icon-box */}
                      <div className="featured-icon-box style2 left-icon icon-align-top">
                        <div className="featured-icon">
                          {/* featured-icon */}
                          <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-md rounded-circle">
                            <i className="ti-location-pin" />
                          </div>
                        </div>
                        <div className="featured-content">
                          <div className="featured-title">
                            {/* featured title */}
                            <h5>Office Address</h5>
                          </div>
                          <div className="featured-desc">
                            {/* featured desc */}
                            <p>229 Young Street Irwin, PA 15642</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* separator */}
                  <div className="separator">
                    <div className="sep-line mt-4 mb-4" />
                  </div>
                  {/* separator */}
                  <div className="row">
                    <div className="col-12">
                      {/* featured-icon-box */}
                      <div className="featured-icon-box style2 left-icon icon-align-top">
                        <div className="featured-icon">
                          {/* featured-icon */}
                          <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-md rounded-circle">
                            <i className="fa fa-phone" />
                          </div>
                        </div>
                        <div className="featured-content">
                          <div className="featured-title">
                            {/* featured title */}
                            <h5>Our Phone Number</h5>
                          </div>
                          <div className="featured-desc">
                            {/* featured desc */}
                            <p>+12-323-778-4054</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* separator */}
                  <div className="separator">
                    <div className="sep-line mt-4 mb-4" />
                  </div>
                  {/* separator */}
                  <div className="row">
                    <div className="col-12">
                      {/* featured-icon-box */}
                      <div className="featured-icon-box style2 left-icon icon-align-top">
                        <div className="featured-icon">
                          {/* featured-icon */}
                          <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-md rounded-circle">
                            <i className="ti ti-email" />
                          </div>
                        </div>
                        <div className="featured-content">
                          <div className="featured-title">
                            {/* featured title */}
                            <h5>Our Email</h5>
                          </div>
                          <div className="featured-desc">
                            {/* featured desc */}
                            <p>info@example.com</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="spacing-10 ttm-bgcolor-grey ttm-bg ttm-col-bgcolor-yes ttm-right-span">
                  <div className="ttm-col-wrapper-bg-layer ttm-bg-layer">
                    <div className="ttm-bg-layer-inner" />
                  </div>
                  {/* section title */}
                  <div className="section-title with-desc clearfix">
                    <div className="title-header">
                      <h5>Send Message</h5>
                      <h2 className="title">Drop Us A Line</h2>
                    </div>
                  </div>
                  {/* section title end */}
                  <form
                    id="ttm-quote-form"
                    className="row ttm-quote-form clearfix"
                    method="post"
                    action="#"
                  >
                    <div className="col-sm-6 col-md-6">
                      <div className="form-group">
                        <input
                          name="name"
                          type="text"
                          className="form-control bg-white"
                          placeholder="Full Name*"
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                      <div className="form-group">
                        <input
                          name="phone"
                          type="text"
                          placeholder="Phone Number*"
                          required="required"
                          className="form-control bg-white"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                      <div className="form-group">
                        <input
                          name="address"
                          type="text"
                          placeholder="Email Address*"
                          required="required"
                          className="form-control bg-white"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                      <div className="form-group">
                        <input
                          name="subject"
                          type="text"
                          placeholder="Subject"
                          required="required"
                          className="form-control bg-white"
                        />
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-12">
                      <div className="form-group">
                        <textarea
                          name="Massage"
                          rows={5}
                          placeholder="Write A Massage..."
                          required="required"
                          className="form-control bg-white"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="text-left">
                        <button
                          type="submit"
                          id="submit"
                          className="mt-3 ttm-btn ttm-btn-size-md ttm-bgcolor-skincolor"
                          value
                        >
                          Submit Quote
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* row end */}
          </div>
        </section>
        {/* contactUS-section end */}
      </div>
    );
  }
}

export default Home;
