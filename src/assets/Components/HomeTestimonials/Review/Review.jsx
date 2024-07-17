import React from 'react'
import styles from "./Review.module.css"
import { RiDoubleQuotesL } from "react-icons/ri";

const Review = (props) => {
  return (
    <div className={[styles.container, "m-4 text-white"].join(" ")}>
      <div className="flex-col text-start">
        <RiDoubleQuotesL className={[styles.quotes, "mb-3"].join(" ")}/>
        <h5 style={{fontWeight: "600"}}>{props.title}</h5>
        <p>{props.description}</p>
      </div>
      <div className="d-flex flex-row text-end justify-content-end">
        <div className="pt-2">
          <p>{props.name}</p>
          <p style={{opacity: "75%"}}>{props.company}</p>
        </div>
        <img src={props.profile} alt="Profile" className={[styles.profileExample, ""].join(" ")}/>
      </div>
    </div>
  )
}

export default Review