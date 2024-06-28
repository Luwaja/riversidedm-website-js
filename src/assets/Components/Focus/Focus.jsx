import React from 'react'
import focusStyles from "./Focus.module.css"
import Background from "../../Images/FocusBackground.svg"

const Focus = () => {
  return (
    <div className={focusStyles.focusContainer}>   
      <div className={focusStyles.backgroundContainer}>
        <div className={focusStyles.whoContainer}>
          <h2 className={focusStyles.whoTitle}>Who We Are</h2>
          <div className={focusStyles.whoLine}/>
          <p className={focusStyles.whoDescription}>We are a small digital marketing firm that focuses on helping businesses build an online presence with website design, SEO, and online advertising.</p>
          <button className={focusStyles.whoButton}>Our Story</button>
        </div>
        
        <div className={focusStyles.middleLine}/>
        
        <div className={focusStyles.whatContainer}>
          <h2 className={focusStyles.whatTitle}>What We Do</h2>
          <div className={focusStyles.whatLine}/>
          <p className={focusStyles.whatDescription}>We focus on helping businesses establish a robust online presence through a range of services catered towards your needs.</p>
          <button className={focusStyles.whatButton}>Services</button>
        </div>
      </div>

    </div>
  )
}

export default Focus