import React from 'react'
import { NavLink } from "react-router-dom";
import dropdownStyles from "./Dropdown.module.css"
import { HiComputerDesktop } from "react-icons/hi2";
import { HiMagnifyingGlassCircle } from "react-icons/hi2";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { HiGlobeAlt } from "react-icons/hi2";

const Dropdown = () => {
  return (
    <div className={[dropdownStyles.dropdownContainer, "d-inline-block align-items-start"].join(" ")}>
      <div className={[dropdownStyles.textContainer, "d-flex flex-column p-4 pb-3 pt-3"].join(" ")}>
        <NavLink to="/services" className={[dropdownStyles.services, "mb-1"].join(" ")}>
          All Services
        </NavLink>
        <NavLink to="/services">
          <HiComputerDesktop/>&nbsp; Website Design/Development
        </NavLink>
        <NavLink to="/services">
          <HiMagnifyingGlassCircle />&nbsp; Search Engine Optimization
        </NavLink>
        <NavLink to="/services">
          <HiChatBubbleLeftRight />&nbsp; Social Media Management
        </NavLink>
        <NavLink to="/services">
          <HiClipboardDocumentList />&nbsp; Content Creation/Management
        </NavLink>
        <NavLink to="/services">
          <HiGlobeAlt />&nbsp; Online Advertising
        </NavLink>
      </div>
    </div>
  )
}

export default Dropdown