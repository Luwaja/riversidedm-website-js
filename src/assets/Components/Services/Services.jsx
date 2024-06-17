import React from 'react'
import servicesStyles from "./Services.module.css"
import CardBackground from "../../Images/CardBackground.svg"
import WebDDIcon from "../../Images/Icons/WebDDIcon.svg"
import SEOIcon from "../../Images/Icons/SEOIcon.svg"
import SMMIcon from "../../Images/Icons/SMMIcon.svg"
import FullCircle from "../../Images/FullCircle.svg"
import HollowCircle from "../../Images/HollowCircle.svg"
import LeftArrow from "../../Images/LeftCircleArrow.svg"
import RightArrow from "../../Images/RightCircleArrow.svg"

const Services = () => {
  return (
    <div className={servicesStyles.servicesContainer}>
      <div className={servicesStyles.cardContainer}>
        {/*LeftCard*/}
        <div className={servicesStyles.leftCard}>
          <img src={CardBackground}/>
          <img src={SEOIcon} className={servicesStyles.icon}/>
          <h5 className={servicesStyles.titleText}>Search Engine Optimization</h5>
          <p className={servicesStyles.descriptionText}>Enhance your website's prominence on search engines.</p>
          <button className={servicesStyles.learnMoreButton}>Learn More</button>
        </div>
        
        {/*CenterCard*/}
        <div className={servicesStyles.centerCard}>
          <img src={CardBackground}/>
          <img src={WebDDIcon} className={servicesStyles.icon}/>
          <h5 className={servicesStyles.titleText}>Website Design and Development</h5>
          <p className={servicesStyles.descriptionText}>Design and develop a professional, user-friendly website.</p>
          <button className={servicesStyles.learnMoreButton}>Learn More</button>
        </div>
        
        {/*RightCard*/}
        <div className={servicesStyles.rightCard}>
          <img src={CardBackground}/>
          <img src={SMMIcon} className={servicesStyles.icon}/>
          <h5 className={servicesStyles.titleText}>Social Media Management</h5>
          <p className={servicesStyles.descriptionText}>Engage with your audience and establish an online presence.</p>
          <button className={servicesStyles.learnMoreButton}>Learn More</button>
        </div>
      </div>

      <img src={LeftArrow} className={servicesStyles.leftArrow}/>
      <img src={RightArrow} className={servicesStyles.rightArrow}/>

      <div className={servicesStyles.circleContainer}>
        <img src={HollowCircle} className={servicesStyles.circleOne}/>
        <img src={HollowCircle} className={servicesStyles.circleTwo}/>
        <img src={FullCircle} className={servicesStyles.circleThree}/>
        <img src={HollowCircle} className={servicesStyles.circleFour}/>
        <img src={HollowCircle} className={servicesStyles.circleFive}/>
      </div>
    </div>
  )
}

export default Services