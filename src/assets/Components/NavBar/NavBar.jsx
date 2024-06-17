import React, { useState } from 'react'
// import { RxHamburgerMenu } from "react-icons/rx";
import navBarStyles from "./Navbar.module.css"
import NavLogo from "../../Images/Logos/NavLogo.svg"
import DownArrow from "../../Images/DownArrow.svg"
// import Dropdown from "../Dropdown/Dropdown";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("#Home");
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  
  return (
    <div>
      <nav className={[navBarStyles.background, "container-fluid d-flex flex-column flex-lg-row align-items-center justify-content-center"].join(" ")} aria-label="Navigation Bar">
        <div className="d-flex col-6 col-lg-3 justify-content-center justify-content-lg-end">
          <a href="#Home">
            <img
              src={NavLogo}
              alt="Logo"
              className={[navBarStyles.navLogo].join(" ")}
              onClick={() => handleLinkClick("#Home")}
            />
          </a>
        </div>
        <ul className={[navBarStyles.menuItemsContainer, "col-6 d-lg-flex justify-content-lg-center mx-auto d-none"].join(" ")}>
          <li>
            <a href="#About"
              className={activeLink === "#About" ? navBarStyles.active : ""}
              onClick={() => handleLinkClick("#About")}>
                About</a>
          </li>
          <li>
            <a href="#Services"
              className={activeLink === "#Services" ? navBarStyles.active : ""}
              onClick={() => handleLinkClick("#Services")}>Services <img src={DownArrow} className={navBarStyles.services_arrow}/></a>
          </li>
          
          <li>
            <a href="#Blog"
              className={activeLink === "#Blog" ? navBarStyles.active : ""}
              onClick={() => handleLinkClick("#Blog")}>
                Blog</a>
          </li>
        </ul>
        <div className="col-3 d-lg-flex justify-content-lg-start me-2 d-none">
          <button className={navBarStyles.contactButton}>Contact Us</button>
        </div>
      </nav>
    </div>
  )
}

export default NavBar