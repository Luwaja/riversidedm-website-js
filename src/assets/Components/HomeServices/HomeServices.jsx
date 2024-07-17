import React from 'react'
import styles from "./HomeServices.module.css"
import Card from "./Card/Card"
import { HiPaintBrush } from "react-icons/hi2";
import { BiCodeBlock } from "react-icons/bi";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { HiGlobeAlt } from "react-icons/hi2";
import { HiChatAlt2 } from "react-icons/hi";
import { HiClipboardDocumentList } from "react-icons/hi2";

const HomeServices = () => {
  return (
    <div data-id="services container" className="d-flex flex-column justify-content-center align-items-center">
      <h5 className="pt-5 fw-bold fs-4">Get Started With</h5>
      <h1 className="" style={{color: "#2B6F7E", fontWeight: "800"}}>Our Services</h1>
      <h5 className="p-4 ps-5 pe-5 text-center">Looking to jumpstart your business? Choose the features that work best for you, and we can make it happen.</h5>
      <div className="container col-12 justify-content-center align-items-center">
        <div className="row ps-3 pe-3 justify-content-center">
          <Card
            icon={<HiPaintBrush/>}
            title="Web Design"
            description="Design a complete user experience that aligns with your brand."
            />
          <Card
            icon={<BiCodeBlock/>}
            title="Web Development"
            description="Develop a professional, user-friendly website."
          />
          <Card
            icon={<FaMagnifyingGlassChart/>}
            title="Search Engine Optimization"
            description="Enhance your website's prominence on search engines."
          />
        </div>
        <div className="row ps-3 pe-3 justify-content-center">
          <Card
            icon={<HiGlobeAlt style={{scale: "1.4"}}/>}
            title="Online Advertising"
            description="Expand your clientele with advertisements that attract ideal customers."
          />
          <Card
            icon={<HiChatAlt2 style={{scale: "1.2"}}/>}
            title="Social Media Management"
            description="Engage with your audience and establish an online presence."
          />
          <Card
            icon={<HiClipboardDocumentList style={{scale: "1.1"}}/>}
            title="Content Creation"
            description="Create valuable content that showcases your expertise."
          />
        </div>
      </div>
      <button className={[styles.button].join(" ")}>Learn More</button>
    </div>
  )
}

export default HomeServices