import React from 'react'
import styles from "./HomeQuote.module.css"
import { RiDoubleQuotesL } from "react-icons/ri";

const HomeQuote = () => {
  return (
    <div className={[styles.container, "d-flex justify-content-center"].join(" ")}>
      <div className={[styles.text, "col-md-10 col-lg-6"].join(" ")}>
        <RiDoubleQuotesL className={[styles.quotes, ""].join(" ")}/>
        <p>
          We are committed to providing top-notch digital marketing solutions that deliver actual results and help small businesses succeed in the digital world.
        </p>
        <p className={styles.source}>- Melanie James</p>
      </div>
    </div>
  )
}

export default HomeQuote