import React from 'react'
import servicesStyles from "./Services.module.css"
import "./Services.css"
import CardBackground from "../../Images/CardBackground.svg"
import WebDDIcon from "../../Images/Icons/WebDDIcon.svg"
import SEOIcon from "../../Images/Icons/SEOIcon.svg"
import SMMIcon from "../../Images/Icons/SMMIcon.svg"
import CCIcon from "../../Images/Icons/CCIcon.svg"
import OAIcon from "../../Images/Icons/OAIcon.svg"
import FullCircle from "../../Images/FullCircle.svg"
import HollowCircle from "../../Images/HollowCircle.svg"
import LeftArrow from "../../Images/LeftCircleArrow.svg"
import RightArrow from "../../Images/RightCircleArrow.svg"
import Card from "../Card/Card"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const NextArrow = (props) => {
  const { className, style, onClick} = props;
  return (
    <div
      className={className}
      style={{ ...style, scale: "0.75", marginTop: "-35px", marginRight: "-20px"}}
      onClick={onClick}
    >
      <img src={RightArrow}/>
    </div>
  )
}

const PrevArrow = (props) => {
  const { className, style, onClick} = props;
  return (
    <div
      className={className}
      style={{ ...style, scale: "0.75", marginTop: "-35px", marginLeft: "-60px"}}
      onClick={onClick}
    >
      <img src={LeftArrow}/>
    </div>
  )
}

const Services = () => {
  
  const settings = {
    className: "center",
    centerMode: true,
    initialSlide: 2,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    appendDots: dots => (
      <div
        style={{
          marginBottom: "-40px",
        }}
      >
        <ul style={{ margin: "0px" }} className="custom-dots"> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '40px',
          height: '40px'
        }}
      >
        <img src={FullCircle} alt={`dot-${i}`}/>
      </div>
    )
  }

  
  return (
    <div className={[servicesStyles.servicesContainer,"flex-column d-flex justify-content-center align-items-center"].join(" ")}>
        <h1 className="pb-1">Services</h1>
        <Slider {...settings} className={[servicesStyles.cardsContainer,"col-lg-8 d-flex justify-content-center align-items-center"].join(" ")}>
          <div className={servicesStyles.cardContainer}>
            <Card
              cardImage={CCIcon}
              title="Content Creation"
              description="Create valuable content that showcases your expertise."
            />
          </div>
          <div className={servicesStyles.cardContainer}>
            <Card
              cardImage={SEOIcon}
              title="Search Engine Optimization (SEO)"
              description="Enhance your website's prominence on search engines."
            />
          </div>
          <div className={servicesStyles.cardContainer}>
            <Card
              cardImage={WebDDIcon}
              title="Website Development and Design"
              description="Develop and design a professional, user-friendly website."
            />
          </div>
          <div className={servicesStyles.cardContainer}>
            <Card
              cardImage={SMMIcon}
              title="Social Media Management"
              description="Engage with your audience and establish an online presence."
            />
          </div>
          <div className={servicesStyles.cardContainer}>
            <Card
              cardImage={OAIcon}
              title="Online Advertising"
              description="Expand your clientele with advertisements that attract ideal customers."
            />
          </div>
        </Slider>
    </div>
  )
}

export default Services