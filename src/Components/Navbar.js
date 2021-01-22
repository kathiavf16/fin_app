import React, { Component } from "react";
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
              Back to Top
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
              Inequality Map
              </Link>
            </li>
            <li className="nav-item" >
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1300}
              >
                Wealth Gap
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
                Rankings
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
