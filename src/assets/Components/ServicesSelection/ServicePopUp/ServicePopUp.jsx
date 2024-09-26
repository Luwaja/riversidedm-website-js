import React from 'react'
import styles from "./ServicePopUp.module.css"

const ServicePopUp = (props) => {
  return (
    <div className="d-flex flex-md-row flex-column col-10 col-md-10 col-lg-8 justify-content-center">
      <div className="d-flex flex-column col-lg-8">
        <h1 className={styles.title}>{props.title}</h1>
        <div className={styles.description}>{props.description}</div>
      </div>
      <div className={[styles.iconContainer, "d-flex"].join(" ")}>
        <img src={props.icon} className={styles.icon}/>
      </div>
    </div>
    
  )
}

export default ServicePopUp