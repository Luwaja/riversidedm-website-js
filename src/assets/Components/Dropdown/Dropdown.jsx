import React from 'react'
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
        <p className={[dropdownStyles.services, "mb-1"].join(" ")}>All Services</p>
        <a href="#Services">
          <HiComputerDesktop/>&nbsp; Website Design/Development
        </a>
        <a href="#Services">
          <HiMagnifyingGlassCircle />&nbsp; Search Engine Optimization
        </a>
        <a href="#Services">
          <HiChatBubbleLeftRight />&nbsp; Social Media Management
        </a>
        <a href="#Services">
          <HiClipboardDocumentList />&nbsp; Content Creation/Management
        </a>
        <a href="#Services">
          <HiGlobeAlt />&nbsp; Online Advertising
        </a>
      </div>
    </div>
  )
}

export default Dropdown