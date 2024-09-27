import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import PropTypes from "prop-types"
import dropdownStyles from "./Dropdown.module.css"
import { HiComputerDesktop, HiMagnifyingGlassCircle, HiChatBubbleLeftRight, HiClipboardDocumentList, HiGlobeAlt } from "react-icons/hi2";

const Dropdown = ({ handleLinkClick: dropdownLinkClick }) => {
  const navigate = useNavigate();

  const handleNavigate = (service) => {
    console.log("Navigating to services with state:", service);
    sessionStorage.setItem('activeService', service);
    navigate("/services", { state: { activeService: service } });
  };
  
  const scrollToSection = (sectionId) => {
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };
  
  return (
    <div className={[dropdownStyles.dropdownContainer, "d-inline-block align-items-start"].join(" ")}>
      <div className={[dropdownStyles.textContainer, "d-flex flex-column p-4 pb-3 pt-3"].join(" ")}>
        <NavLink to="/services" className={[dropdownStyles.services, "mb-1"].join(" ")} >
          All Services
        </NavLink>
        <NavLink to="/services" onClick={() => {dropdownLinkClick("/services"); handleNavigate("WDD"); scrollToSection("services"); }}>
          <HiComputerDesktop/>&nbsp; Website Design/Development
        </NavLink>
        <NavLink to="/services" onClick={() => {dropdownLinkClick("/services"); handleNavigate("SEO"); scrollToSection("services"); }}>
          <HiMagnifyingGlassCircle />&nbsp; Search Engine Optimization
        </NavLink>
        <NavLink to="/services" onClick={() => {dropdownLinkClick("/services"); handleNavigate("SMM"); scrollToSection("services"); }}>
          <HiChatBubbleLeftRight />&nbsp; Social Media Management
        </NavLink>
        <NavLink to="/services" onClick={() => {dropdownLinkClick("/services"); handleNavigate("CC"); scrollToSection("services"); }}>
          <HiClipboardDocumentList />&nbsp; Content Creation/Management
        </NavLink>
        <NavLink to="/services" onClick={() => {dropdownLinkClick("/services"); handleNavigate("OA"); scrollToSection("services"); }}>
          <HiGlobeAlt />&nbsp; Online Advertising
        </NavLink>
      </div>
    </div>
  )
}

Dropdown.propTypes = {
  handleLinkClick: PropTypes.func.isRequired,
};

export default Dropdown