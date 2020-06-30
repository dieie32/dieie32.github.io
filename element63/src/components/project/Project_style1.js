import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Header from '../layout/Header';

export class Project_style1 extends Component {
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
                            <h1 className="title">Gallery Style 1</h1>
                            </div>{/* /.page-title-captions */}
                            <div className="breadcrumb-wrapper">
                            <span>
                                <a title="Homepage" to={process.env.PUBLIC_URL + '/'}><i className="ti ti-home" />&nbsp;&nbsp;Home</a>
                            </span>
                            <span className="ttm-bread-sep">&nbsp; : : &nbsp;</span>
                            <span>Project-Style-01</span>
                            </div>  
                        </div>
                        </div>{/* /.col-md-12 */}  
                    </div>{/* /.row */}  
                    </div>{/* /.container */}                      
                </div>
                {/* page-title end*/}
                <div className="ttm-row tab-section clearfix">
                    <div className="container-xl">
                        <div className="row">
                            <div className="col-12">
                                <div className="ttm-tabs text-center ttm-tab-style-classic style2">
                                    <Tabs>
                                        <TabList className="text-uppercase mb-4">
                                            <Tab><span>all</span></Tab>
                                            <Tab><span>Business </span></Tab>
                                            <Tab><span>Campaign</span></Tab>
                                            <Tab><span>Technology</span></Tab>
                                            <Tab><span>Corporate</span></Tab>
                                            <Tab><span>Workshop</span></Tab>
                                            <Tab><span>Innovation</span></Tab>
                                        </TabList>      
                                        <div className="content-tab">                        
                                            <TabPanel>
                                                <div className="row multi-columns-row ttm-boxes-spacing-5px">
                                                    <div className="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6">
                                                        {/* featured-imagebox */}
                                                        <div className="featured-imagebox featured-imagebox-portfolio style2">
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
                                                    <div className="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6">
                                                        {/* featured-imagebox */}
                                                        <div className="featured-imagebox featured-imagebox-portfolio style2">
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
                                                    <div className="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6">
                                                        {/* featured-imagebox */}
                                                        <div className="featured-imagebox featured-imagebox-portfolio style2">
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
                                                    <div className="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6">
                                                        {/* featured-imagebox */}
                                                        <div className="featured-imagebox featured-imagebox-portfolio style2">
                                                            {/* featured-thumbnail */}
                                                            <div className="featured-thumbnail">
                                                            <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="image" />
                                                            </div>{/* featured-thumbnail end*/}
                                                            <div className="featured-content">
                                                            <div className="category">
                                                                <p>Innovation , Technology</p>
                                                            </div>
                                                            <div className="featured-title">
                                                                <h5><a href={process.env.PUBLIC_URL + '/Single_style1'}>Web Development</a></h5>
                                                            </div>
                                                            </div>
                                                        </div>{/* featured-imagebox */}
                                                    </div>
                                                    <div className="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6">
                                                        {/* featured-imagebox */}
                                                        <div className="featured-imagebox featured-imagebox-portfolio style2">
                                                            {/* featured-thumbnail */}
                                                            <div className="featured-thumbnail">
                                                            <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="image" />
                                                            </div>{/* featured-thumbnail end*/}
                                                            <div className="featured-content">
                                                            <div className="category">
                                                                <p>Corporate</p>
                                                            </div>
                                                            <div className="featured-title">
                                                                <h5><a href={process.env.PUBLIC_URL + '/Single_style1'}>Neural Networking</a></h5>
                                                            </div>
                                                            </div>
                                                        </div>{/* featured-imagebox */}
                                                        </div>
                                                    <div className="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6">
                                                        {/* featured-imagebox */}
                                                        <div className="featured-imagebox featured-imagebox-portfolio style2">
                                                            {/* featured-thumbnail */}
                                                            <div className="featured-thumbnail">
                                                            <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="image" />
                                                            </div>{/* featured-thumbnail end*/}
                                                            <div className="featured-content">
                                                            <div className="category">
                                                                <p>Technology , Workshop</p>
                                                            </div>
                                                            <div className="featured-title">
                                                                <h5><a href={process.env.PUBLIC_URL + '/Single_style1'}>Data Management</a></h5>
                                                            </div>
                                                            </div>
                                                        </div>{/* featured-imagebox */}
                                                    </div> 
                                                    <div className="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6">
                                                        {/* featured-imagebox */}
                                                        <div className="featured-imagebox featured-imagebox-portfolio style2">
                                                            {/* featured-thumbnail */}
                                                            <div className="featured-thumbnail">
                                                            <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="image" />
                                                            </div>{/* featured-thumbnail end*/}
                                                            <div className="featured-content">
                                                            <div className="category">
                                                                <p>Innovation , Technology</p>
                                                            </div>
                                                            <div className="featured-title">
                                                                <h5><a href={process.env.PUBLIC_URL + '/Single_style1'}>Web Development</a></h5>
                                                            </div>
                                                            </div>
                                                        </div>{/* featured-imagebox */}
                                                    </div>
                                                    <div className="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6">
                                                        {/* featured-imagebox */}
                                                        <div className="featured-imagebox featured-imagebox-portfolio style2">
                                                            {/* featured-thumbnail */}
                                                            <div className="featured-thumbnail">
                                                            <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="image" />
                                                            </div>{/* featured-thumbnail end*/}
                                                            <div className="featured-content">
                                                            <div className="category">
                                                                <p>Corporate</p>
                                                            </div>
                                                            <div className="featured-title">
                                                                <h5><a href={process.env.PUBLIC_URL + '/Single_style1'}>Neural Networking</a></h5>
                                                            </div>
                                                            </div>
                                                        </div>{/* featured-imagebox */}
                                                    </div>
                                                    <div className="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6">
                                                        {/* featured-imagebox */}
                                                        <div className="featured-imagebox featured-imagebox-portfolio style2">
                                                            {/* featured-thumbnail */}
                                                            <div className="featured-thumbnail">
                                                            <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="image" />
                                                            </div>{/* featured-thumbnail end*/}
                                                            <div className="featured-content">
                                                            <div className="category">
                                                                <p>Technology , Workshop</p>
                                                            </div>
                                                            <div className="featured-title">
                                                                <h5><a href={process.env.PUBLIC_URL + '/Single_style1'}>Data Management</a></h5>
                                                            </div>
                                                            </div>
                                                        </div>{/* featured-imagebox */}
                                                    </div>
                                                </div>
                                            </TabPanel>
                                            <TabPanel>
                                                <div className="row multi-columns-row ttm-boxes-spacing-5px">
                                                    <div className="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6">
                                                        {/* featured-imagebox */}
                                                        <div className="featured-imagebox featured-imagebox-portfolio style2">
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
                                                    <div className="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6">
                                                        {/* featured-imagebox */}
                                                        <div className="featured-imagebox featured-imagebox-portfolio style2">
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
                                                    <div className="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6">
                                                        {/* featured-imagebox */}
                                                        <div className="featured-imagebox featured-imagebox-portfolio style2">
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
                                                </div>
                                            </TabPanel>
                                            <TabPanel>
                                                <div className="row multi-columns-row ttm-boxes-spacing-5px">
                                                <div className="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6">
                                                        {/* featured-imagebox */}
                                                        <div className="featured-imagebox featured-imagebox-portfolio style2">
                                                            {/* featured-thumbnail */}
                                                            <div className="featured-thumbnail">
                                                            <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="image" />
                                                            </div>{/* featured-thumbnail end*/}
                                                            <div className="featured-content">
                                                            <div className="category">
                                                                <p>Innovation , Technology</p>
                                                            </div>
                                                            <div className="featured-title">
                                                                <h5><a href={process.env.PUBLIC_URL + '/Single_style1'}>Web Development</a></h5>
                                                            </div>
                                                            </div>
                                                        </div>{/* featured-imagebox */}
                                                    </div>
                                                    <div className="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6">
                                                        {/* featured-imagebox */}
                                                        <div className="featured-imagebox featured-imagebox-portfolio style2">
                                                            {/* featured-thumbnail */}
                                                            <div className="featured-thumbnail">
                                                            <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="image" />
                                                            </div>{/* featured-thumbnail end*/}
                                                            <div className="featured-content">
                                                            <div className="category">
                                                                <p>Corporate</p>
                                                            </div>
                                                            <div className="featured-title">
                                                                <h5><a href={process.env.PUBLIC_URL + '/Single_style1'}>Neural Networking</a></h5>
                                                            </div>
                                                            </div>
                                                        </div>{/* featured-imagebox */}
                                                    </div>
                                                    <div className="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6">
                                                        {/* featured-imagebox */}
                                                        <div className="featured-imagebox featured-imagebox-portfolio style2">
                                                            {/* featured-thumbnail */}
                                                            <div className="featured-thumbnail">
                                                            <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="image" />
                                                            </div>{/* featured-thumbnail end*/}
                                                            <div className="featured-content">
                                                            <div className="category">
                                                                <p>Technology , Workshop</p>
                                                            </div>
                                                            <div className="featured-title">
                                                                <h5><a href={process.env.PUBLIC_URL + '/Single_style1'}>Data Management</a></h5>
                                                            </div>
                                                            </div>
                                                        </div>{/* featured-imagebox */}
                                                    </div>                                                
                                                </div>
                                            </TabPanel>
                                            <TabPanel>
                                                <div className="row multi-columns-row ttm-boxes-spacing-5px">
                                                <div className="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6">
                                                        {/* featured-imagebox */}
                                                        <div className="featured-imagebox featured-imagebox-portfolio style2">
                                                            {/* featured-thumbnail */}
                                                            <div className="featured-thumbnail">
                                                            <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="image" />
                                                            </div>{/* featured-thumbnail end*/}
                                                            <div className="featured-content">
                                                            <div className="category">
                                                                <p>Innovation , Technology</p>
                                                            </div>
                                                            <div className="featured-title">
                                                                <h5><a href={process.env.PUBLIC_URL + '/Single_style1'}>Web Development</a></h5>
                                                            </div>
                                                            </div>
                                                        </div>{/* featured-imagebox */}
                                                    </div>
                                                    <div className="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6">
                                                        {/* featured-imagebox */}
                                                        <div className="featured-imagebox featured-imagebox-portfolio style2">
                                                            {/* featured-thumbnail */}
                                                            <div className="featured-thumbnail">
                                                            <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="image" />
                                                            </div>{/* featured-thumbnail end*/}
                                                            <div className="featured-content">
                                                            <div className="category">
                                                                <p>Corporate</p>
                                                            </div>
                                                            <div className="featured-title">
                                                                <h5><a href={process.env.PUBLIC_URL + '/Single_style1'}>Neural Networking</a></h5>
                                                            </div>
                                                            </div>
                                                        </div>{/* featured-imagebox */}
                                                    </div>
                                                    <div className="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6">
                                                        {/* featured-imagebox */}
                                                        <div className="featured-imagebox featured-imagebox-portfolio style2">
                                                            {/* featured-thumbnail */}
                                                            <div className="featured-thumbnail">
                                                            <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="image" />
                                                            </div>{/* featured-thumbnail end*/}
                                                            <div className="featured-content">
                                                            <div className="category">
                                                                <p>Technology , Workshop</p>
                                                            </div>
                                                            <div className="featured-title">
                                                                <h5><a href={process.env.PUBLIC_URL + '/Single_style1'}>Data Management</a></h5>
                                                            </div>
                                                            </div>
                                                        </div>{/* featured-imagebox */}
                                                    </div>                                                
                                                </div>
                                            </TabPanel>                                            
                                            <TabPanel>
                                                <div  className="row multi-columns-row ttm-boxes-spacing-5px">
                                                <div className="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6">
                                                        {/* featured-imagebox */}
                                                        <div className="featured-imagebox featured-imagebox-portfolio style2">
                                                            {/* featured-thumbnail */}
                                                            <div className="featured-thumbnail">
                                                            <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="image" />
                                                            </div>{/* featured-thumbnail end*/}
                                                            <div className="featured-content">
                                                            <div className="category">
                                                                <p>Innovation , Technology</p>
                                                            </div>
                                                            <div className="featured-title">
                                                                <h5><a href={process.env.PUBLIC_URL + '/Single_style1'}>Web Development</a></h5>
                                                            </div>
                                                            </div>
                                                        </div>{/* featured-imagebox */}
                                                    </div>
                                                    <div className="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6">
                                                        {/* featured-imagebox */}
                                                        <div className="featured-imagebox featured-imagebox-portfolio style2">
                                                            {/* featured-thumbnail */}
                                                            <div className="featured-thumbnail">
                                                            <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="image" />
                                                            </div>{/* featured-thumbnail end*/}
                                                            <div className="featured-content">
                                                            <div className="category">
                                                                <p>Corporate</p>
                                                            </div>
                                                            <div className="featured-title">
                                                                <h5><a href={process.env.PUBLIC_URL + '/Single_style1'}>Neural Networking</a></h5>
                                                            </div>
                                                            </div>
                                                        </div>{/* featured-imagebox */}
                                                        </div>
                                                    <div className="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6">
                                                        {/* featured-imagebox */}
                                                        <div className="featured-imagebox featured-imagebox-portfolio style2">
                                                            {/* featured-thumbnail */}
                                                            <div className="featured-thumbnail">
                                                            <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="image" />
                                                            </div>{/* featured-thumbnail end*/}
                                                            <div className="featured-content">
                                                            <div className="category">
                                                                <p>Technology , Workshop</p>
                                                            </div>
                                                            <div className="featured-title">
                                                                <h5><a href={process.env.PUBLIC_URL + '/Single_style1'}>Data Management</a></h5>
                                                            </div>
                                                            </div>
                                                        </div>{/* featured-imagebox */}
                                                    </div> 
                                                    <div className="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6">
                                                        {/* featured-imagebox */}
                                                        <div className="featured-imagebox featured-imagebox-portfolio style2">
                                                            {/* featured-thumbnail */}
                                                            <div className="featured-thumbnail">
                                                            <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="image" />
                                                            </div>{/* featured-thumbnail end*/}
                                                            <div className="featured-content">
                                                            <div className="category">
                                                                <p>Innovation , Technology</p>
                                                            </div>
                                                            <div className="featured-title">
                                                                <h5><a href={process.env.PUBLIC_URL + '/Single_style1'}>Web Development</a></h5>
                                                            </div>
                                                            </div>
                                                        </div>{/* featured-imagebox */}
                                                    </div>
                                                    <div className="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6">
                                                        {/* featured-imagebox */}
                                                        <div className="featured-imagebox featured-imagebox-portfolio style2">
                                                            {/* featured-thumbnail */}
                                                            <div className="featured-thumbnail">
                                                            <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="image" />
                                                            </div>{/* featured-thumbnail end*/}
                                                            <div className="featured-content">
                                                            <div className="category">
                                                                <p>Corporate</p>
                                                            </div>
                                                            <div className="featured-title">
                                                                <h5><a href={process.env.PUBLIC_URL + '/Single_style1'}>Neural Networking</a></h5>
                                                            </div>
                                                            </div>
                                                        </div>{/* featured-imagebox */}
                                                    </div>
                                                    <div className="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6">
                                                        {/* featured-imagebox */}
                                                        <div className="featured-imagebox featured-imagebox-portfolio style2">
                                                            {/* featured-thumbnail */}
                                                            <div className="featured-thumbnail">
                                                            <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="image" />
                                                            </div>{/* featured-thumbnail end*/}
                                                            <div className="featured-content">
                                                            <div className="category">
                                                                <p>Technology , Workshop</p>
                                                            </div>
                                                            <div className="featured-title">
                                                                <h5><a href={process.env.PUBLIC_URL + '/Single_style1'}>Data Management</a></h5>
                                                            </div>
                                                            </div>
                                                        </div>{/* featured-imagebox */}
                                                    </div>
                                                </div>
                                            </TabPanel>
                                            <TabPanel>
                                                <div className="row multi-columns-row ttm-boxes-spacing-5px">
                                                    <div className="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6">
                                                        {/* featured-imagebox */}
                                                        <div className="featured-imagebox featured-imagebox-portfolio style2">
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
                                                    <div className="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6">
                                                        {/* featured-imagebox */}
                                                        <div className="featured-imagebox featured-imagebox-portfolio style2">
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
                                                    <div className="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6">
                                                        {/* featured-imagebox */}
                                                        <div className="featured-imagebox featured-imagebox-portfolio style2">
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
                                                    <div className="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6">
                                                        {/* featured-imagebox */}
                                                        <div className="featured-imagebox featured-imagebox-portfolio style2">
                                                            {/* featured-thumbnail */}
                                                            <div className="featured-thumbnail">
                                                            <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="image" />
                                                            </div>{/* featured-thumbnail end*/}
                                                            <div className="featured-content">
                                                            <div className="category">
                                                                <p>Innovation , Technology</p>
                                                            </div>
                                                            <div className="featured-title">
                                                                <h5><a href={process.env.PUBLIC_URL + '/Single_style1'}>Web Development</a></h5>
                                                            </div>
                                                            </div>
                                                        </div>{/* featured-imagebox */}
                                                    </div>
                                                    <div className="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6">
                                                        {/* featured-imagebox */}
                                                        <div className="featured-imagebox featured-imagebox-portfolio style2">
                                                            {/* featured-thumbnail */}
                                                            <div className="featured-thumbnail">
                                                            <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="image" />
                                                            </div>{/* featured-thumbnail end*/}
                                                            <div className="featured-content">
                                                            <div className="category">
                                                                <p>Corporate</p>
                                                            </div>
                                                            <div className="featured-title">
                                                                <h5><a href={process.env.PUBLIC_URL + '/Single_style1'}>Neural Networking</a></h5>
                                                            </div>
                                                            </div>
                                                        </div>{/* featured-imagebox */}
                                                        </div>
                                                    <div className="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6">
                                                        {/* featured-imagebox */}
                                                        <div className="featured-imagebox featured-imagebox-portfolio style2">
                                                            {/* featured-thumbnail */}
                                                            <div className="featured-thumbnail">
                                                            <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="image" />
                                                            </div>{/* featured-thumbnail end*/}
                                                            <div className="featured-content">
                                                            <div className="category">
                                                                <p>Technology , Workshop</p>
                                                            </div>
                                                            <div className="featured-title">
                                                                <h5><a href={process.env.PUBLIC_URL + '/Single_style1'}>Data Management</a></h5>
                                                            </div>
                                                            </div>
                                                        </div>{/* featured-imagebox */}
                                                    </div> 
                                                    <div className="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6">
                                                        {/* featured-imagebox */}
                                                        <div className="featured-imagebox featured-imagebox-portfolio style2">
                                                            {/* featured-thumbnail */}
                                                            <div className="featured-thumbnail">
                                                            <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="image" />
                                                            </div>{/* featured-thumbnail end*/}
                                                            <div className="featured-content">
                                                            <div className="category">
                                                                <p>Innovation , Technology</p>
                                                            </div>
                                                            <div className="featured-title">
                                                                <h5><a href={process.env.PUBLIC_URL + '/Single_style1'}>Web Development</a></h5>
                                                            </div>
                                                            </div>
                                                        </div>{/* featured-imagebox */}
                                                    </div>
                                                    <div className="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6">
                                                        {/* featured-imagebox */}
                                                        <div className="featured-imagebox featured-imagebox-portfolio style2">
                                                            {/* featured-thumbnail */}
                                                            <div className="featured-thumbnail">
                                                            <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="image" />
                                                            </div>{/* featured-thumbnail end*/}
                                                            <div className="featured-content">
                                                            <div className="category">
                                                                <p>Corporate</p>
                                                            </div>
                                                            <div className="featured-title">
                                                                <h5><a href={process.env.PUBLIC_URL + '/Single_style1'}>Neural Networking</a></h5>
                                                            </div>
                                                            </div>
                                                        </div>{/* featured-imagebox */}
                                                    </div>
                                                    <div className="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6">
                                                        {/* featured-imagebox */}
                                                        <div className="featured-imagebox featured-imagebox-portfolio style2">
                                                            {/* featured-thumbnail */}
                                                            <div className="featured-thumbnail">
                                                            <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="image" />
                                                            </div>{/* featured-thumbnail end*/}
                                                            <div className="featured-content">
                                                            <div className="category">
                                                                <p>Technology , Workshop</p>
                                                            </div>
                                                            <div className="featured-title">
                                                                <h5><a href={process.env.PUBLIC_URL + '/Single_style1'}>Data Management</a></h5>
                                                            </div>
                                                            </div>
                                                        </div>{/* featured-imagebox */}
                                                    </div>
                                                </div>
                                            </TabPanel>
                                            <TabPanel>
                                                <div className="row multi-columns-row ttm-boxes-spacing-5px">
                                                    <div className="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6">
                                                        {/* featured-imagebox */}
                                                        <div className="featured-imagebox featured-imagebox-portfolio style2">
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
                                                    <div className="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6">
                                                        {/* featured-imagebox */}
                                                        <div className="featured-imagebox featured-imagebox-portfolio style2">
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
                                                    <div className="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6">
                                                        {/* featured-imagebox */}
                                                        <div className="featured-imagebox featured-imagebox-portfolio style2">
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
                                                    <div className="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6">
                                                        {/* featured-imagebox */}
                                                        <div className="featured-imagebox featured-imagebox-portfolio style2">
                                                            {/* featured-thumbnail */}
                                                            <div className="featured-thumbnail">
                                                            <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="image" />
                                                            </div>{/* featured-thumbnail end*/}
                                                            <div className="featured-content">
                                                            <div className="category">
                                                                <p>Innovation , Technology</p>
                                                            </div>
                                                            <div className="featured-title">
                                                                <h5><a href={process.env.PUBLIC_URL + '/Single_style1'}>Web Development</a></h5>
                                                            </div>
                                                            </div>
                                                        </div>{/* featured-imagebox */}
                                                    </div>
                                                    <div className="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6">
                                                        {/* featured-imagebox */}
                                                        <div className="featured-imagebox featured-imagebox-portfolio style2">
                                                            {/* featured-thumbnail */}
                                                            <div className="featured-thumbnail">
                                                            <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="image" />
                                                            </div>{/* featured-thumbnail end*/}
                                                            <div className="featured-content">
                                                            <div className="category">
                                                                <p>Corporate</p>
                                                            </div>
                                                            <div className="featured-title">
                                                                <h5><a href={process.env.PUBLIC_URL + '/Single_style1'}>Neural Networking</a></h5>
                                                            </div>
                                                            </div>
                                                        </div>{/* featured-imagebox */}
                                                        </div>
                                                    <div className="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6">
                                                        {/* featured-imagebox */}
                                                        <div className="featured-imagebox featured-imagebox-portfolio style2">
                                                            {/* featured-thumbnail */}
                                                            <div className="featured-thumbnail">
                                                            <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="image" />
                                                            </div>{/* featured-thumbnail end*/}
                                                            <div className="featured-content">
                                                            <div className="category">
                                                                <p>Technology , Workshop</p>
                                                            </div>
                                                            <div className="featured-title">
                                                                <h5><a href={process.env.PUBLIC_URL + '/Single_style1'}>Data Management</a></h5>
                                                            </div>
                                                            </div>
                                                        </div>{/* featured-imagebox */}
                                                    </div> 
                                                    <div className="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6">
                                                        {/* featured-imagebox */}
                                                        <div className="featured-imagebox featured-imagebox-portfolio style2">
                                                            {/* featured-thumbnail */}
                                                            <div className="featured-thumbnail">
                                                            <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="image" />
                                                            </div>{/* featured-thumbnail end*/}
                                                            <div className="featured-content">
                                                            <div className="category">
                                                                <p>Innovation , Technology</p>
                                                            </div>
                                                            <div className="featured-title">
                                                                <h5><a href={process.env.PUBLIC_URL + '/Single_style1'}>Web Development</a></h5>
                                                            </div>
                                                            </div>
                                                        </div>{/* featured-imagebox */}
                                                    </div>
                                                    <div className="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6">
                                                        {/* featured-imagebox */}
                                                        <div className="featured-imagebox featured-imagebox-portfolio style2">
                                                            {/* featured-thumbnail */}
                                                            <div className="featured-thumbnail">
                                                            <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="image" />
                                                            </div>{/* featured-thumbnail end*/}
                                                            <div className="featured-content">
                                                            <div className="category">
                                                                <p>Corporate</p>
                                                            </div>
                                                            <div className="featured-title">
                                                                <h5><a href={process.env.PUBLIC_URL + '/Single_style1'}>Neural Networking</a></h5>
                                                            </div>
                                                            </div>
                                                        </div>{/* featured-imagebox */}
                                                    </div>
                                                    <div className="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6">
                                                        {/* featured-imagebox */}
                                                        <div className="featured-imagebox featured-imagebox-portfolio style2">
                                                            {/* featured-thumbnail */}
                                                            <div className="featured-thumbnail">
                                                            <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="image" />
                                                            </div>{/* featured-thumbnail end*/}
                                                            <div className="featured-content">
                                                            <div className="category">
                                                                <p>Technology , Workshop</p>
                                                            </div>
                                                            <div className="featured-title">
                                                                <h5><a href={process.env.PUBLIC_URL + '/Single_style1'}>Data Management</a></h5>
                                                            </div>
                                                            </div>
                                                        </div>{/* featured-imagebox */}
                                                    </div>
                                                </div>
                                            </TabPanel>
                                        </div>
                                    </Tabs>                     
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
    }
}


export default Project_style1;