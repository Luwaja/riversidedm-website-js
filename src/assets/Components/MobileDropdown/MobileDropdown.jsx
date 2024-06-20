import React, {useState} from 'react'
import mobileDropdownStyles from "./MobileDropdown.module.css"
import { HiChevronDown } from "react-icons/hi";
import MobileServices from "./MobileServices/MobileServices";

const MobileDropdown = () => {
  const [showServices, setShowServices] = useState(false);

  const handleServicesClick = () => {
    setShowServices(!showServices)
  }
  
  return (
    <div className={[mobileDropdownStyles.background, "d-flex flex-column"].join(" ")}>
        <a href="#About" className={["d-flex justify-content-center align-items-center p-3"].join(" ")}>About</a>
        <div>
          <a className={["d-flex justify-content-center align-items-center p-3"].join(" ")} onClick={handleServicesClick}>&nbsp;&nbsp;&nbsp;&nbsp;Services <HiChevronDown/> </a>
          {showServices && <MobileServices />}
        </div>
        <a href="#Blog" className={["d-flex justify-content-center align-items-center p-3"].join(" ")} style={{borderBottom: "solid #1e282f 3px"}}>Blog</a>
    </div>
  )
}

export default MobileDropdown