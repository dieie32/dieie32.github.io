import React, { Component } from 'react';
import 'react-tabs/style/react-tabs.css';
import Header from '../layout/Header';
import Detailbox from './Detail_box';

export class Single_style1 extends Component {
    render() {
        return (
            <div className="site-main">
                <Header />
                {/* page-title */}
                <div className="ttm-page-title-row">
                    <div className="container-xl">
                        <div className="row">
                            <div className="col-md-12"> 
                                <div className="title-box text-center">
                                    <div className="page-title-heading">
                                    <h1 className="title">Single Style 1</h1>
                                    </div>{/* /.page-title-captions */}
                                    <div className="breadcrumb-wrapper">
                                    <span>
                                        <a title="Homepage" href={process.env.PUBLIC_URL + '/'}><i className="ti ti-home" />&nbsp;&nbsp;Home</a>
                                    </span>
                                    <span className="ttm-bread-sep">&nbsp; : : &nbsp;</span>
                                    <span>Single-Style-01</span>
                                    </div>  
                                </div>
                            </div>{/* /.col-md-12 */}  
                        </div>{/* /.row */}  
                    </div>{/* /.container */}                      
                </div>
                <section className="ttm-row project-single-section clearfix">
                    <div className="container-xl">
                        {/* row */}
                        <div className="row">
                            <div className="col-lg-6 col-xl-8">
                            {/* ttm_single_image-wrapper */}
                            <div className="ttm_single_image-wrapper mb-35">
                                <img className="img-fluid" src="https://via.placeholder.com/1200X800/444444.jpg" title="single-img-twenty" alt="single-img-twenty" />
                            </div>{/* ttm_single_image-wrapper end */}
                            </div>
                            <div className="col-lg-6 col-xl-4">
                                <Detailbox />
                            </div>
                        </div>
                        {/* row end*/}
                        {/* row */}
                        <div className="row">
                            <div className="col-12">
                                <h4>Innovative Interfaces</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. remaining essentially unchanged.</p>
                                <h4>You May Also Know How it Uses In IT Field?</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                <p className="mb-35 res-991-mb-20">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                            <div className="col-md-4">
                                {/* featured-icon-box */}
                                <div className="featured-icon-box style3 left-icon icon-align-top">
                                    <div className="featured-icon">{/* featured-icon */}
                                    <div className="ttm-icon ttm-textcolor-skincolor ttm-icon_element-size-lg">
                                        <i className="flaticon flaticon-algorithm" />
                                    </div>
                                    </div>
                                    <div className="featured-content">
                                    <div className="featured-title">{/* featured title */}
                                        <h5>Expert Team</h5>
                                    </div>
                                    <div className="featured-desc">{/* featured desc */}
                                        <p>Lorem ipsum dolor sit amet, consect etur adipiscing elit their labore.</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                {/* featured-icon-box */}
                                <div className="featured-icon-box style3 left-icon icon-align-top">
                                    <div className="featured-icon">{/* featured-icon */}
                                    <div className="ttm-icon ttm-textcolor-skincolor ttm-icon_element-size-lg">
                                        <i className="flaticon flaticon-padlock" />
                                    </div>
                                    </div>
                                    <div className="featured-content">
                                    <div className="featured-title">{/* featured title */}
                                        <h5>Free Consultation</h5>
                                    </div>
                                    <div className="featured-desc">{/* featured desc */}
                                        <p>Lorem ipsum dolor sit amet, consect etur adipiscing elit their labore.</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                {/* featured-icon-box */}
                                <div className="featured-icon-box style3 left-icon icon-align-top">
                                    <div className="featured-icon">{/* featured-icon */}
                                    <div className="ttm-icon ttm-textcolor-skincolor ttm-icon_element-size-lg">
                                        <i className="flaticon flaticon-process-1" />
                                    </div>
                                    </div>
                                    <div className="featured-content">
                                    <div className="featured-title">{/* featured title */}
                                        <h5>Lowest Cost</h5>
                                    </div>
                                    <div className="featured-desc">{/* featured desc */}
                                        <p>Lorem ipsum dolor sit amet, consect etur adipiscing elit their labore.</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <h4 className="mt-35">Project Result &amp; Benefits of Project</h4>
                                <p className="mb-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now.</p>
                            </div>
                            <div className="col-12">
                                {/* ttm_single_image-wrapper */}
                                <div className="ttm_single_image-wrapper mt-35">
                                    <img className="img-fluid" src="https://via.placeholder.com/1171X548/444444.jpg" title="single-img-twentyone" alt="single-img-twentyone" />
                                </div>{/* ttm_single_image-wrapper end */}
                            </div>
                            {/* separator */}
                            <div className="col-12">
                                <div className="separator">
                                    <div className="sep-line mt-35 mb-35" />
                                </div>
                            </div>
                            {/* separator */}
                            <div className="col-12">
                                <div className="ttm-nextprev-bottom-nav mb-4">
                                    <nav className="navigation post-navigation">
                                    <div className="nav-links">
                                        <div className="nav-links">
                                        <a className="ttm-btn ttm-btn-size-md ttm-bgcolor-skincolor ttm-icon-btn-left"><i className="fa fa-angle-double-left" />Previous</a> 
                                        <a className="ttm-btn ttm-btn-size-md ttm-bgcolor-skincolor ttm-icon-btn-right float-right">Next<i className="fa fa-angle-double-right" /></a> 
                                        </div>
                                    </div>
                                    </nav>
                                </div>
                            </div>
                        </div>{/* row end*/}
                        {/* row */}
                        <div className="row ttm-pf-single-related-wrapper ">
                            <div className="col-12">
                                <h4 className="mb-30">Related Projects</h4>
                            </div>
                            <div className="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-12">
                                {/* featured-imagebox */}
                                <div className="featured-imagebox featured-imagebox-portfolio style2 mb-20">
                                    {/* featured-thumbnail */}
                                    <div className="featured-thumbnail">
                                    <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="image" />
                                    </div>{/* featured-thumbnail end*/}
                                    <div className="featured-content">
                                    <div className="category">
                                        <p>Business , Campaign</p>
                                    </div>
                                    <div className="featured-title">
                                        <h5><a href={process.env.PUBLIC_URL + '/Single_style1'}>Innovative Technology</a></h5>
                                    </div>
                                    </div>
                                </div>{/* featured-imagebox */}
                            </div>
                            <div className="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-12">
                                {/* featured-imagebox */}
                                <div className="featured-imagebox featured-imagebox-portfolio style2 mb-20">
                                    {/* featured-thumbnail */}
                                    <div className="featured-thumbnail">
                                    <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="image" />
                                    </div>{/* featured-thumbnail end*/}
                                    <div className="featured-content">
                                    <div className="category">
                                        <p>Campaign , Technology</p>
                                    </div>
                                    <div className="featured-title">
                                        <h5><a href={process.env.PUBLIC_URL + '/Single_style1'}>IT Management</a></h5>
                                    </div>
                                    </div>
                                </div>{/* featured-imagebox */}
                            </div>
                            <div className="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-12">
                                {/* featured-imagebox */}
                                <div className="featured-imagebox featured-imagebox-portfolio style2 mb-20">
                                    {/* featured-thumbnail */}
                                    <div className="featured-thumbnail">
                                    <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="image" />
                                    </div>{/* featured-thumbnail end*/}
                                    <div className="featured-content">
                                    <div className="category">
                                        <p>Corporate , Workshop</p>
                                    </div>
                                    <div className="featured-title">
                                        <h5><a href={process.env.PUBLIC_URL + '/Single_style1'}>Cyber Security Analysis</a></h5>
                                    </div>
                                    </div>
                                </div>{/* featured-imagebox */}
                            </div>
                        </div>{/* row end*/}
                    </div>
                </section>
            </div>
        )
    }
}


export default Single_style1;