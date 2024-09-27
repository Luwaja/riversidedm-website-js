import { React, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom"; 
import PropTypes from "prop-types"
import mobileDropdownStyles from "../MobileDropdown.module.css"
import { HiComputerDesktop, HiMagnifyingGlassCircle, HiChatBubbleLeftRight, HiClipboardDocumentList, HiGlobeAlt } from "react-icons/hi2";

const MobileServices = ({ mobileLinkClick: servicesLinkClick }) => {
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
    <div className={[mobileDropdownStyles.servicesBackground, "d-flex flex-column"].join(" ")}>
      <NavLink to="/services" className={["d-flex justify-content-center align-items-center p-2"].join(" ")} onClick={() => {servicesLinkClick("/services"); handleNavigate("WDD"); scrollToSection("services"); }}>
        <HiComputerDesktop/>&nbsp; Website Design/Development
      </NavLink>
      <NavLink to="/services" className={["d-flex justify-content-center align-items-center p-2"].join(" ")} onClick={() => {servicesLinkClick("/services"); handleNavigate("SEO"); scrollToSection("services");}}>
        <HiMagnifyingGlassCircle />&nbsp; Search Engine Optimization
      </NavLink>
      <NavLink to="/services" className={["d-flex justify-content-center align-items-center p-2"].join(" ")} onClick={() => {servicesLinkClick("/services"); handleNavigate("SMM"); scrollToSection("services"); }}>
        <HiChatBubbleLeftRight />&nbsp; Social Media Management
      </NavLink>
      <NavLink to="/services" className={["d-flex justify-content-center align-items-center p-2"].join(" ")} onClick={() => {servicesLinkClick("/services"); handleNavigate("CC"); scrollToSection("services"); }}>
        <HiClipboardDocumentList />&nbsp; Content Creation/Management
      </NavLink>
      <NavLink to="/services" className={["d-flex justify-content-center align-items-center p-2"].join(" ")} onClick={() => {servicesLinkClick("/services"); handleNavigate("OA"); scrollToSection("services"); }}>
        <HiGlobeAlt />&nbsp; Online Advertising
      </NavLink>
    </div>
  )
}

MobileServices.propTypes = {
  mobileLinkClick: PropTypes.func.isRequired,
};

export default MobileServices