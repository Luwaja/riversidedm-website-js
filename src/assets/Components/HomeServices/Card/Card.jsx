import React from 'react'
import cardStyles from "./Card.module.css"

const Card = (props) => {
  return (
    <div className={[cardStyles.container, "d-flex flex-column align-items-center"].join(" ")}>
      <div className={cardStyles.iconContainer}>
        <div className={cardStyles.icon}>{props.icon}</div>
      </div>
      <h1 className={cardStyles.title}>{props.title}</h1>
      <p className={cardStyles.description}>{props.description}</p>
    </div>
  )
}

export default Card