import React from 'react'
import footerStyles from "./Footer.module.css"
import { MdEmail } from "react-icons/md"
import { AiFillInstagram } from "react-icons/ai"
import { FaLinkedin } from "react-icons/fa";
import { MdWater } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <div className={[footerStyles.background, "d-flex align-items-center"].join(" ")}>
        <div className="d-flex col-6 justify-content-start ps-5 text-white ">
          <h5 className={[footerStyles.text,"mb-0"].join(" ")}>Copyright ©2023 Riverside Digital Marketing, LLC</h5>
        </div>
        <div className="d-flex col-6 justify-content-end flex-row text-white pe-5">
          <MdEmail className="me-4" style={{scale: "2"}}/>
          <AiFillInstagram className="me-4" style={{scale: "2"}}/>
          <FaLinkedin className="me-4" style={{scale: "2"}}/>
        </div>
      </div>
    </div>
  )
}

export default Footer