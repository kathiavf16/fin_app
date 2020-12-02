import React, { Component } from "react";
import logo from "../logo.png";
//import NavElement from "./NavElement"
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <img
            src={logo}
            className="nav-logo"
            alt="Logo"
            onClick={this.scrollToTop}
          />
          <ul className="nav-items">
            <li className="nav-item" >
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1300}

              >
              Intro
              </Link>
            </li>
            <li className="nav-item">

              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1300}
              >
              Map
              </Link>
            </li>
            <li className="nav-item" >
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Rankings
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1300}
              >
                Indicators
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section5"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1300}
              >
                Next Steps
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section6"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1300}
              >
                About the Data
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
