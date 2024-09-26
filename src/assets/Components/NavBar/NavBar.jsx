import React, { useEffect, useState } from 'react'
import { NavLink, Link } from "react-router-dom";
import navbarStyles from "./Navbar.module.css"
import NavLogo from "../../Images/Logos/NavLogo.svg"
import { HiChevronDown } from "react-icons/hi";
import Dropdown from "../Dropdown/Dropdown"
import { HiMenu } from "react-icons/hi";
import { HiMail } from "react-icons/hi";
import MobileDropdown from "../MobileDropdown/MobileDropdown";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("/");
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setShowMobileDropdown(false);
    setShowDropdown(false);
  };

  const handleMouseEnter = () => {
    setShowDropdown(true);
  }

  const handleMouseLeave = () => {
    setShowDropdown(false);
  }

  const handleMenuClick = () => {
    setShowMobileDropdown(!showMobileDropdown)
  }

  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide and show navbar
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setNavbarVisible(false);
      } else {
        setNavbarVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[lastScrollY]);
  
  return (
    <div className="d-flex flex-column">
      <nav className={[navbarStyles.background, navbarStyles.nav, navbarVisible ? '' : navbarStyles.hidden ,"d-flex flex-row align-items-center justify-content-center"].join(" ")} aria-label="Navigation Bar">
          <div data-id="MobileIcon" className={[navbarStyles.mobileIconContainer, "d-flex d-lg-none justify-content-center col-3"].join(" ")}>
            <HiMenu className={[navbarStyles.mobileIcon, ""].join(" ")} onClick={handleMenuClick}/>
          </div>
        <div className="d-flex col-6 col-lg-3 justify-content-center justify-content-lg-end">
          <a href="/">
            <img
              src={NavLogo}
              alt="Logo"
              className={[navbarStyles.navLogo].join(" ")}
            />
          </a>
        </div>
        <ul className={[navbarStyles.menuItemsContainer, "col-6 d-lg-flex justify-content-lg-center mx-lg-5 d-none"].join(" ")}>
          <li>
            <NavLink to="/"
              className={activeLink === "/" ? navbarStyles.active : ""}
              onClick={() => handleLinkClick("/")}>
                Home
            </NavLink>
          </li>
          <li>
            <div 
              className={navbarStyles.servicesContainer}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{marginRight: "-10px"}}
            >
              <NavLink to="/services"
                className={activeLink === "/services" ? navbarStyles.active : ""}
                onClick={() => handleLinkClick("/services")}>
                  Services <HiChevronDown className={navbarStyles.services_arrow}/>
              </NavLink>
              <div className={[navbarStyles.dropdown, "d-flex justify-content-center"].join(" ")}>
                {showDropdown && <Dropdown handleLinkClick={handleLinkClick}/>}
              </div>
            </div>
          </li>
          {/* <li>
            <NavLink to="/testimonials"
              className={activeLink === "/testimonials" ? navbarStyles.active : ""}
              onClick={() => handleLinkClick("/testimonials")}>
                Testimonials
            </NavLink>
          </li> */}
          <li>
            <NavLink to="/blog"
              className={activeLink === "/blog" ? navbarStyles.active : ""}
              onClick={() => handleLinkClick("/blog")}>
                Blog
            </NavLink>
          </li>
        </ul>
        <div className="col-3 d-lg-flex justify-content-lg-start me-2 d-none">
          <a href="https://us17.list-manage.com/contact-form?u=bbe8864caefa63631e1f85b35&form_id=98852831aa6815bd8fce274a3294f0b2" target="_blank" rel="noopener noreferrer">
            <button type="button" className={navbarStyles.contactButton}>
              Contact Us
            </button>
          </a>
        </div>
        <div data-id="MobileContactButton" className="d-flex d-lg-none justify-content-center col-3">
          <a href="https://us17.list-manage.com/contact-form?u=bbe8864caefa63631e1f85b35&form_id=98852831aa6815bd8fce274a3294f0b2" target="_blank" rel="noopener noreferrer">
            <button type="button" className={[navbarStyles.mobileButton, "d-flex justify-content-center align-items-center"].join(" ")}>
              <HiMail className={navbarStyles.hiMail}/>
            </button>
          </a>
        </div>
      </nav>

      <div data-id="MobileDropdown" className={[navbarStyles.mobileDropdown, "d-lg-none"].join(" ")}>
        {showMobileDropdown && <MobileDropdown handleLinkClick={handleLinkClick}/>}
      </div>
    </div>
  )
}

export default Navbar