import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBHamburgerToggler,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

class Mobilemenu extends Component {
  state = {
    collapse1: false,
    collapseID: "",
  };

  toggleCollapse = (collapseID) => () => {
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }));
  };

  toggleSingleCollapse = (collapseId) => {
    this.setState({
      ...this.state,
      [collapseId]: !this.state[collapseId],
    });
  };

  render() {
    return (
      <Router>
        <MDBNavbar>
          <MDBHamburgerToggler
            id="hamburger1"
            onClick={() => this.toggleSingleCollapse("collapse1")}
          />
          <MDBCollapse isOpen={this.state.collapse1} navbar>
            <MDBNavbarNav left>
              <MDBNavItem active>
                <MDBDropdown>
                  <MDBDropdownItem nav caret href="#homeSection">
                    <span>Home</span>
                  </MDBDropdownItem>
                </MDBDropdown>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownItem nav caret href="#aboutUsSection">
                    <span>About Us</span>
                  </MDBDropdownItem>
                </MDBDropdown>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownItem nav caret href="#projectsSection">
                    <span>Our Products</span>
                  </MDBDropdownItem>
                </MDBDropdown>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownItem nav caret href="#servicesSection">
                    <span>Services</span>
                  </MDBDropdownItem>
                </MDBDropdown>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownItem nav caret href="#contactSection">
                    <span>Contacts</span>
                  </MDBDropdownItem>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </Router>
    );
  }
}

export default Mobilemenu;
