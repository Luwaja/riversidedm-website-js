import React from 'react'
import styles from "./Footer.module.css"
import { MdEmail } from "react-icons/md"
import { AiFillInstagram } from "react-icons/ai"
import { FaLinkedin } from "react-icons/fa";
import { MdWater } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <div className={[styles.background, "d-flex align-items-center"].join(" ")}>
        <div className="d-flex col-6 justify-content-start ps-5 text-white ">
          <h5 className={[styles.text,"mb-0"].join(" ")}>© 2023 Riverside Digital Marketing, LLC</h5>
        </div>
        <div className="d-flex col-6 justify-content-end flex-row text-white pe-5">
          <MdEmail className={[styles.icons, "me-4"].join(" ")}/>
          <AiFillInstagram className={[styles.icons, "me-4"].join(" ")}/>
          <FaLinkedin className={[styles.icons, "me-4"].join(" ")}/>
        </div>
      </div>
    </div>
  )
}

export default Footer