import React, {useState} from 'react'
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import mobileDropdownStyles from "./MobileDropdown.module.css"
import { HiChevronDown } from "react-icons/hi";
import MobileServices from "./MobileServices/MobileServices";

const MobileDropdown = ({ handleLinkClick: mobileLinkClick }) => {
  const [showServices, setShowServices] = useState(false);

  const handleServicesClick = () => {
    setShowServices(!showServices)
  }
  
  return (
    <div>
      <div className={[mobileDropdownStyles.background, "d-flex flex-column"].join(" ")}>
          
          <NavLink to="/"
          className={["d-flex justify-content-center align-items-center p-3"].join(" ")}
          onClick={() => mobileLinkClick("/")}>
            Home
          </NavLink>
          
          <div>
            <NavLink className={["d-flex justify-content-center align-items-center p-3"].join(" ")}
            onClick={handleServicesClick}>
              &nbsp;&nbsp;&nbsp;&nbsp;Services <HiChevronDown/>
            </NavLink>
            {showServices && <MobileServices handleLinkClick={mobileLinkClick}/>}
          </div>

          <NavLink to="/blog" 
          className={["d-flex justify-content-center align-items-center p-3"].join(" ")} 
          style={{borderBottom: "solid #1e282f 3px"}}
          onClick={() => mobileLinkClick("/blog")}>
            Blog
          </NavLink>

      </div>
    </div>
  )
}

MobileDropdown.propTypes = {
  handleLinkClick: PropTypes.func.isRequired,
};

export default MobileDropdown