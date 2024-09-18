import React from 'react'
import { NavLink } from "react-router-dom"; 
import mobileDropdownStyles from "../MobileDropdown.module.css"
import { HiComputerDesktop } from "react-icons/hi2";
import { HiMagnifyingGlassCircle } from "react-icons/hi2";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { HiGlobeAlt } from "react-icons/hi2";

const MobileServices = () => {
  return (
    <div className={[mobileDropdownStyles.servicesBackground, "d-flex flex-column"].join(" ")}>
      <NavLink to="/services" className={["d-flex justify-content-center align-items-center p-2"].join(" ")}>
        <HiComputerDesktop/>&nbsp; Website Design/Development
      </NavLink>
      <NavLink to="/services" className={["d-flex justify-content-center align-items-center p-2"].join(" ")}>
        <HiMagnifyingGlassCircle />&nbsp; Search Engine Optimization
      </NavLink>
      <NavLink to="/services" className={["d-flex justify-content-center align-items-center p-2"].join(" ")}>
        <HiChatBubbleLeftRight />&nbsp; Social Media Management
      </NavLink>
      <NavLink to="/services" className={["d-flex justify-content-center align-items-center p-2"].join(" ")}>
        <HiClipboardDocumentList />&nbsp; Content Creation/Management
      </NavLink>
      <NavLink to="/services" className={["d-flex justify-content-center align-items-center p-2"].join(" ")}>
        <HiGlobeAlt />&nbsp; Online Advertising
      </NavLink>
    </div>
  )
}

export default MobileServices