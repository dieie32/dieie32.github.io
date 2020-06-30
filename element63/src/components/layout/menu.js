import React, { Component } from "react";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route } from "react-router-dom";

export class Menu extends Component {
  render() {
    return (
      <nav id="menu" role="navigation" className="menu">
        <ul>
          <li className="menu-hasdropdown">
            <a href="#homeSection">Home</a>
          </li>
          <li className="menu-hasdropdown">
            <a href="#aboutUsSection">About Us</a>
          </li>
          <li className="menu-hasdropdown">
            <a href="#projectsSection">Our Products</a>
          </li>
          <li className="menu-hasdropdown">
            <a href="#servicesSection">Services</a>
          </li>
          <li className="menu-hasdropdown">
            <a href="#contactSection">Contacts</a>
          </li>
        </ul>
      </nav>
    );
  }
}
