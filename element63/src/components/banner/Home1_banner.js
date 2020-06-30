import React, { Component } from "react";
import { MDBAnimation, MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer, MDBRow } from
"mdbreact";

export class CarouselPage extends Component {
    render() {
        return (
            <MDBContainer fluid  id="homeSection">
            <MDBRow>
            <MDBCarousel
            activeItem={1}
            length={2}
            showControls={true}
            showIndicators={false}
            id="Home_banner"
            >
            <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                <MDBView>
                    <img className="d-block w-100" src="https://via.placeholder.com/1920X850/888888.jpg" alt="First slide" />
                </MDBView>
                <MDBCarouselCaption>
                    <div className="container-xl">
                        <div className="carousel-caption-inner banner1">
                            <MDBAnimation className="slideInUp" count={1} delay="2s" >
                                <h2 className="ttm-textcolor-darkgrey flipInY">Best <strong className="ttm-textcolor-skincolor">Platform</strong> to Grow Your Bussiness</h2>
                            </MDBAnimation>
                            <MDBAnimation className="slideInUp" count={1} delay="2.5s" >
                            <p className="text">We are equipped with an updated technical knowledge to serve our customers<br /> properly. Our method of application maintains the industry.</p>
                            </MDBAnimation>
                            <MDBAnimation className="slideInUp" count={1} delay="3s" >
                            <p>
                                <button className="ttm-btn ttm-btn-size-md ttm-bgcolor-skincolor ttm-textcolor-white">Discuss Your Project </button>&nbsp; &nbsp;
                                <button className="ttm-btn btn-inline ttm-btn-size-md ttm-textcolor-darkgrey ml-3"><i className="ti-arrow-circle-right" />get a Quote</button>
                            </p>                            
                            </MDBAnimation>
                        </div>
                    </div>
                </MDBCarouselCaption>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                <MDBView>
                    <img className="d-block w-100" src="https://via.placeholder.com/1920X850/888888.jpg" alt="Second slide" />
                </MDBView>
                <MDBCarouselCaption>
                    <div className="container-xl">
                        <div className="carousel-caption-inner banner2">
                            <MDBAnimation className="slideInUp" count={1} delay="5s" >
                                <h2 className="ttm-textcolor-darkgrey">Real-Time Monitoring Your <strong className="ttm-textcolor-skincolor">Infrstracture</strong></h2>
                            </MDBAnimation>
                            <MDBAnimation className="slideInUp" count={1} delay="5.5s" >
                                <p className="text">We are equipped with an updated technical knowledge to serve our customers<br /> properly. Our method of application maintains the industry.</p>
                            </MDBAnimation>
                            <MDBAnimation className="slideInUp" count={1} delay="6s" >
                                <p>
                                    <button className="ttm-btn ttm-btn-size-md ttm-bgcolor-skincolor ttm-textcolor-white mr-3">read more</button>
                                    <button className="ttm-btn ttm-btn-size-md ttm-bgcolor-darkgrey ttm-textcolor-white">get altech</button>
                                </p>
                          </MDBAnimation>
                        </div>
                      </div>
                </MDBCarouselCaption>
                </MDBCarouselItem>
            </MDBCarouselInner>
            </MDBCarousel>
            </MDBRow>
            </MDBContainer>
        );
    }
}

export default CarouselPage;