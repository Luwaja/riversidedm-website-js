import React, { useState } from 'react'
import navbarStyles from "./Navbar.module.css"
import NavLogo from "../../Images/Logos/NavLogo.svg"
import { HiChevronDown } from "react-icons/hi";
import Dropdown from "../Dropdown/Dropdown"
import { HiMenu } from "react-icons/hi";
import { HiMail } from "react-icons/hi";
import MobileDropdown from "../MobileDropdown/MobileDropdown";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("#Home");
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
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
  
  return (
    <div className="d-flex flex-column">
      <nav className={[navbarStyles.background, "d-flex flex-row align-items-center justify-content-center"].join(" ")} aria-label="Navigation Bar">
          <div data-id="MobileIcon" className={[navbarStyles.mobileIconContainer, "d-flex d-lg-none justify-content-start col-3"].join(" ")}>
            <HiMenu className={[navbarStyles.mobileIcon, ""].join(" ")} onClick={handleMenuClick}/>
          </div>
        <div className="d-flex col-3 col-lg-3 justify-content-center justify-content-lg-end">
          <a href="#Home">
            <img
              src={NavLogo}
              alt="Logo"
              className={[navbarStyles.navLogo].join(" ")}
              onClick={() => handleLinkClick("#Home")}
            />
          </a>
        </div>
        <ul className={[navbarStyles.menuItemsContainer, "col-6 d-lg-flex justify-content-lg-center mx-lg-5 d-none"].join(" ")}>
          <li>
            <div 
              className={navbarStyles.servicesContainer}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{marginRight: "-10px"}}
            >
              <a href="#Services"
                className={activeLink === "#Services" ? navbarStyles.active : ""}
                onClick={() => handleLinkClick("#Services")}>Services <HiChevronDown className={navbarStyles.services_arrow}/>
              </a>
              <div className={[navbarStyles.dropdown, "d-flex justify-content-center"].join(" ")}>
                {showDropdown && <Dropdown/>}
              </div>
            </div>
          </li>
          <li>
            <a href="#Testimonials"
              className={activeLink === "#Testimonials" ? navbarStyles.active : ""}
              onClick={() => handleLinkClick("#Testimonials")}>
                Testimonials</a>
          </li>
          <li>
            <a href="#Blog"
              className={activeLink === "#Blog" ? navbarStyles.active : ""}
              onClick={() => handleLinkClick("#Blog")}>
                Blog</a>
          </li>
        </ul>
        <div className="col-3 d-lg-flex justify-content-lg-start me-2 d-none">
          <button type="button" className={navbarStyles.contactButton}>Contact Us</button>
        </div>
        <div data-id="MobileContactButton" className="d-flex d-lg-none justify-content-end col-3">
          <button type="button" className={[navbarStyles.mobileButton, "d-flex justify-content-center align-items-center"].join(" ")}>
            <HiMail className={navbarStyles.hiMail}/>
          </button>
        </div>
      </nav>

      <div data-id="MobileDropdown" className={[navbarStyles.mobileDropdown, "d-lg-none"].join(" ")}>
        {showMobileDropdown && <MobileDropdown />}
      </div>
    </div>
  )
}

export default NavBar