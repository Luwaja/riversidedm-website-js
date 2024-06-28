// import React from 'react'
import cardStyles from "./Card.module.css"

const Card = (props) => {
  return (
      <div className={[cardStyles.card, "d-flex flex-column align-items-center"].join(" ")}>
        <div data-id="IconContainer" className={[cardStyles.iconContainer, "row d-flex justify-content-center"].join(" ")}>
          <img src={props.cardImage} className={[cardStyles.icon, ""].join(" ")} alt="CardIcon"/>
        </div>
        <div data-id="TextContainer" className={[cardStyles.textContainer,"row"].join(" ")}>
          <h5 className={[cardStyles.titleText, ""].join(" ")}>{props.title}</h5>
          <p className={cardStyles.descriptionText}>{props.description}</p>
          <button className={cardStyles.learnMoreButton}>Learn More</button>
        </div>
      </div>
  )
}

export default Card