import React from 'react'
import styles from "./HomeTestimonials.module.css"
import Review from "./Review/Review"
import ProfileExample from "../../Images/ProfileExample.png"

const HomeTestimonials = () => {
  return (
    <div className={[styles.container, "d-flex justify-content-center mt-5"].join(" ")}>
      <div className="d-flex row col-xl-8 col-lg-12 col-md-12 col-sm-12 justify-content-between">
        <Review
          title="Title Lorum Ipsum Dolor"
          description="Lorum ipsum dolor sit amet consectetur atit, sed do eiusmod tempor labore labore labore et dolor."
          name="John Doe"
          company="Company Company"
          profile={ProfileExample}
        />
        <Review
          title="Title Lorum Ipsum Dolor"
          description="Lorum ipsum dolor sit amet consectetur atit, sed do eiusmod tempor labore labore labore et dolor."
          name="John Doe"
          company="Company Company"
          profile={ProfileExample}
        />
        <Review
          title="Title Lorum Ipsum Dolor"
          description="Lorum ipsum dolor sit amet consectetur atit, sed do eiusmod tempor labore labore labore et dolor."
          name="John Doe"
          company="Company Company"
          profile={ProfileExample}
        />
      </div>
    </div>
  )
}

export default HomeTestimonials