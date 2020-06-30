import React, { Component } from "react";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Layout
import { Footer } from "./components/layout/Footer";
// pages
import Home from "./components/Home";
import ScrollToTop from "./components/layout/Gotop";

const appHistory = {
  basename: process.env.PUBLIC_URL,
};
const history = createBrowserHistory(appHistory);
function App() {
  return (
    <div className="page">
      <Router basename={process.env.PUBLIC_URL} history={history}>
        <div id="preloader">
          <div id="status">&nbsp;</div>
        </div>
        <ScrollToTop />
        <Route exact path="/" component={Home} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
