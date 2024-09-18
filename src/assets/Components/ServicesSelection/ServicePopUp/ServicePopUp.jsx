import React from 'react'
import styles from "./ServicePopUp.module.css"

const ServicePopUp = (props) => {
  return (
    <div className="d-flex flex-row col-md-10 col-lg-8">
      <div className="d-flex flex-column col-lg-9">
        <h1 className={styles.title}>{props.title}</h1>
        <div className={styles.description}>{props.description}</div>
      </div>
      <div className="d-flex">
        <img src={props.icon} style={{marginLeft: "60px"}}/>
      </div>
    </div>
    
  )
}

export default ServicePopUp