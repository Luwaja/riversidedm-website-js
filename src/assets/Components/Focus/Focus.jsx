import React from 'react'
import focusStyles from "./Focus.module.css"
import Background from "../../Images/FocusBackground.svg"

const Focus = () => {
  return (
    <div className={focusStyles.focusContainer}>   
    <div className={[focusStyles.backgroundContainer, "d-flex flex-row align-items-center"].join(" ")}>
        <div className={[focusStyles.whoContainer, "d-flex col-5 p-2 flex-column align-items-start text-white"].join(" ")}>
          <h2 className={[focusStyles.title, "d-flex justify-content-start"].join(" ")}>Who We Are</h2>
          <div className={[focusStyles.titleLine, "w-50"].join(" ")}/>
          <p className={[focusStyles.description, "mt-3"].join(" ")}>We are a small digital marketing firm that focuses on helping businesses build an online presence with website design, SEO, and online advertising.</p>
          <button className={[focusStyles.button, "mt-3"].join(" ")}>Our Story</button>
        </div>
        
        <div className={[focusStyles.middleLine, ""].join(" ")}/>
        
        <div className={[focusStyles.whatContainer, "d-flex col-5 p-2 flex-column align-items-start text-white"].join(" ")}>
          <h2 className={[focusStyles.title, "d-flex"].join(" ")}>What We Do</h2>
          <div className={[focusStyles.titleLine, "w-50"].join(" ")}/>
          <p className={[focusStyles.description, "mt-3"].join(" ")}>We focus on helping businesses establish a robust online presence through a range of services catered towards your needs.</p>
          <button className={[focusStyles.button, "mt-3"].join(" ")}>Services</button>
        </div>
      </div>

    </div>
  )
}

export default Focus