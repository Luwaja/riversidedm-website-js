/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom"
import styles from "./ServicesSelection.module.css"
import WDDIconDark from "../../Images/Icons/Dark/WDDIconDark.svg"
import SEOIconDark from "../../Images/Icons/Dark/SEOIconDark.svg"
import OAIconDark from "../../Images/Icons/Dark/OAIconDark.svg"
import SMMIconDark from "../../Images/Icons/Dark/SMMIconDark.svg"
import CCIconDark from "../../Images/Icons/Dark/CCIconDark.svg"
import ServicePopUp from "./ServicePopUp/ServicePopUp"

const ServicesSelection = () => {
  const location = useLocation();
  const [activeIcon, setActiveIcon] = useState('WDD');

  useEffect(() => {
    console.log("Location state:", location.state);
    let activeService = location.state?.activeService;
    if (!activeService) {
      activeService = sessionStorage.getItem('activeService');
    } 
    if (activeService) {
      setActiveIcon(activeService);
      sessionStorage.removeItem('activeService');
    }
  }, [location.state]);

  const handleIconClick = (icon) => {
    setActiveIcon(icon);
  };

  return (
    <div className={[styles.container, ""].join(" ")}>
      
      <div className="d-flex justify-content-center">
        <h1 className={[styles.title, "d-flex col-10 justify-content-center"].join(" ")}>
          Learn more about our services
        </h1>
      </div> 
      
      <div>
        {/* Web Design and Development */}
        <div className="d-flex flex-md-row flex-column align-items-center justify-content-center ps-2 pe-2">
          <div className={[styles.serviceContainer, "d-flex flex-column align-items-center"].join(" ")}>
            <div className={styles.serviceImageContainer}>
              <img 
                src={WDDIconDark} 
                className={[styles.serviceIcon, activeIcon === 'WDD' ? styles.serviceIconActive: ""].join(" ")} 
                onClick={() => handleIconClick('WDD')}
                />
            </div>
            <div className={styles.serviceTitleContainer}>
              <h2 className={styles.serviceTitle}>Web Design and Development</h2>
            </div>
          </div>

          <div className={styles.line}/>

          {/* Search Engine Optimization */}
          <div className={[styles.serviceContainer, "d-flex flex-column align-items-center"].join(" ")}>
            <div className={styles.serviceImageContainer}>
              <img 
                src={SEOIconDark} 
                className={[styles.serviceIcon, activeIcon === 'SEO' ? styles.serviceIconActive: ""].join(" ")} 
                onClick={() => handleIconClick('SEO')}
              />
            </div>
            <div className={styles.serviceTitleContainer}>
              <h2 className={styles.serviceTitle}>Search Engine Optimization</h2>
            </div>
          </div>

          <div className={styles.line}/>

          {/* Online Advertising */}
          <div className={[styles.serviceContainer, "d-flex flex-column align-items-center"].join(" ")}>
            <div className={styles.serviceImageContainer}>
              <img 
                src={OAIconDark} 
                className={[styles.serviceIcon, activeIcon === 'OA' ? styles.serviceIconActive: ""].join(" ")} 
                onClick={() => handleIconClick('OA')}
              />
            </div>
            <div className={styles.serviceTitleContainer}>
              <h2 className={styles.serviceTitle}>Online Advertising</h2>
            </div>
          </div>

          <div className={styles.line}/>

          {/* Social Media Management */}
          <div className={[styles.serviceContainer, "d-flex flex-column align-items-center"].join(" ")}>
            <div className={styles.serviceImageContainer}>
              <img 
                src={SMMIconDark} 
                className={[styles.serviceIcon, activeIcon === 'SMM' ? styles.serviceIconActive: ""].join(" ")} 
                onClick={() => handleIconClick('SMM')}
              />
            </div>
            <div className={styles.serviceTitleContainer}>
              <h2 className={styles.serviceTitle}>Social Media Management</h2>
            </div>
          </div>

          <div className={styles.line}/>

          {/* Content Creation */}
          <div className={[styles.serviceContainer, "d-flex flex-column align-items-center ms-4"].join(" ")}>
            <div className={styles.serviceImageContainer}>
              <img 
                src={CCIconDark} 
                className={[styles.serviceIcon, activeIcon === 'CC' ? styles.serviceIconActive: ""].join(" ")} 
                onClick={() => handleIconClick('CC')}
              />
            </div>
            <div className={styles.serviceTitleContainer}>
              <h2 className={styles.serviceTitle}>Content Creation</h2>
            </div>
          </div>
      </div>

      {/* ============== POP UPS ============== */}
      <div id="services" className={[styles.popUpContainer, "d-flex flex-column justify-content-center align-items-center"].join(" ")}>
        
        {activeIcon === 'WDD' && (
          <ServicePopUp
          id="web-design-development" 
          icon={WDDIconDark} 
          title="Web Design and Development" 
          description={
          <>
            <p>
              We design and develop professional, user-friendly websites tailored to your business needs. With a focus on optimizing search engines and ensuring compatibility across various mobile devices, we create a seamless user experience. This solid foundation is vital for establishing credibility and effectively attracting potential customers to your website.
              <br /> <br />
              Our Web Design and Development services include:
              <br/> <br/>
              • Visualizing and creating your website
              <br/>
              • Fixing/updating an old website
              <br/>
              • Developing and managing your website
            </p>
          </>
          }
          />
        )}

        {activeIcon === 'SEO' && (
          <ServicePopUp
          id="search-engine-optimization" 
          icon={SEOIconDark} 
          title="Search Engine Optimization" 
          description={
            <p>
              Search engine optimization (SEO) plays a pivotal role in enhancing your website's prominence on search engines.
              <br/><br/>
              Our SEO services include:
              <br/><br/>
              • Conducting thorough keyword research
              <br/>
              • Optimizing your website's content and structure
              <br/>
              • Implementing SEO techniques
              <br/><br/>
              By securing higher rankings in search engine results, your business can drive organic traffic and amplify its online visibility.
            </p> 
            }
          />
        )}

        {activeIcon === 'OA' && (
          <ServicePopUp
          id="online-advertising" 
          icon={OAIconDark} 
          title="Online Advertising" 
          description={<p>Online advertising provides an exceptional opportunity for businesses to reach their target audience and maximize visibility in a competitive market.
          <br/><br/>
          Online Advertising Services we offer:
          <br/><br/>
          • Strategic development of tailored advertising campaigns <br/>
          • Precise targeting across various digital platforms <br/>
          • Ongoing performance analysis and optimization <br/>
          • Effective budget management to ensure maximum ROI
          <br/><br/>
          This well-rounded approach boosts brand exposure, generates high-quality leads, and drives measurable results for your business.</p>}
          />
        )}

        {activeIcon === 'SMM' && (
          <ServicePopUp
          id="social-media-management" 
          icon={SMMIconDark} 
          title="Social Media Management" 
          description={
            <p>
              Social media platforms offer a remarkable avenue for businesses to engage with their audience and establish a robust online presence.
              <br/><br/>
              Our Social Media Services include:
              <br/><br/>
              • The creation and management of your social media profiles <br/>
              • Curation of captivating content <br/>
              • Execution of targeted ad campaigns <br/>
              • Active interaction with your followers.
              <br/><br/>
              This comprehensive approach enhances brand awareness, nurtures valuable relationships, and drives substantial traffic to your website.
            </p>
          }
          />
        )}

        {activeIcon === 'CC' && (
          <ServicePopUp
          id="content-creation" 
          icon={CCIconDark} 
          title="Content Creation and Management" 
          description={
            <p>
              Creating valuable content is essential in establishing a strong online presence.
              <br/><br/>
              We work to create top-notch content, ranging from informative blog posts and articles to engaging videos and captivating social media updates. This content is tailored to resonate with your target audience, effectively showcasing your expertise and driving significant traffic to your website. By leveraging high-quality content, we elevate your company's visibility and solidify your online reputation.
            </p> 
          }
          />
        )}

      </div>

      </div>
    </div>
  )
}

export default ServicesSelection