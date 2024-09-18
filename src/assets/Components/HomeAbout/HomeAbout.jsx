import React from 'react'
import styles from "./HomeAbout.module.css"
import { FaScroll } from "react-icons/fa";
import { GiBullseye } from "react-icons/gi";
import { MdOutlineQuestionMark } from "react-icons/md";

const HomeAbout = () => {
  return (
    <div className={[styles.container, "d-flex justify-content-center"].join(" ")}>
      <div className="justify-content-center">
        <div className="justify-content-center text-center">
          <h5 className="fw-bold" style={{color: "#26323B"}}>Learn a little bit</h5>
          <h1 className={styles.aboutUs}>About Us</h1>
        </div>
        <div data-id="MainContent" className="d-flex flex-column justify-content-center align-items-center pt-5 ps-5 pe-5">
          <div data-id="HistoryContainer" className="d-flex flex-row col-lg-6 col-md-10 col-sm-12 align-items-center">
            <div data-id="HistoryImage" className={[styles.backBox, ""].join(" ")}>
              <div className={[styles.frontBox, "mt-2 ms-2"].join(" ")}>
                <FaScroll className={styles.boxIcon}/>
              </div>
            </div>
            <div className="d-flex flex-column ms-5">
              <h5 className={styles.ourTitle}>Our History</h5>
              <p className={styles.ourDescription}>
                In 2023, Melanie James founded Riverside Digital Marketing to help small businesses succeed online. With a background in computer programming and a Google Digital Marketing certification, Melanie entered the digital marketing world, combining technical expertise with a creative touch.
              </p>
            </div>
          </div>
          <div data-id="FocusContainer" className="d-flex flex-row mt-5 col-lg-6 col-md-10 col-sm-12 align-items-center">
            <div className="d-flex flex-column me-5 text-end">
              <h5 className={styles.ourTitle}>Our Focus</h5>
              <p className={[styles.ourDescription, "text-end"].join(" ")}>Riverside Digital Marketing focuses on helping small businesses build an online presence. We craft custom websites, enhance search engine optimization, and create engaging content specific to each client&apos;s needs. By implementing personalized strategies with industry best practices, we aim to drive growth, increase visibility, and foster meaningful connections between businesses and their customers.</p>
            </div>
            <div data-id="FocusImage" className={[styles.backBox,].join(" ")}>
              <div className={[styles.frontBox, "mt-2 ms-2"].join(" ")}>
                <GiBullseye className={styles.boxIcon}/>
              </div>
            </div>
          
          </div>
          <div data-id="ReasonContainer" className="d-flex flex-row mt-5 col-lg-6 col-md-10 col-sm-12 justify-content-center align-items-center">
            <div data-id="ReasonImage" className={styles.backBox}>
              <div className={[styles.frontBox, "mt-2 ms-2"].join(" ")}>
                <MdOutlineQuestionMark className={styles.boxIcon}/>
              </div>
            </div>
            <div className="d-flex flex-column ms-5">
              <h5 className={styles.ourTitle}>Our Reason</h5>
              <p className={styles.ourDescription}>Riverside Digital Marketing wants to help small businesses by providing exceptional digital marketing services that drive online growth. Our ultimate goal is to empower businesses to achieve measurable results, increase their market reach, and build lasting customer relationships in the digital world.</p>
            </div>
          </div>
          {/* <button className={[styles.button, "mt-5"].join(" ")}>Learn More</button> */}
        </div>
      </div>
      
    </div>
  )
}

export default HomeAbout