import React from 'react'
import appStyles from "../App.module.css"
import Hero from "../assets/Components/Hero/Hero"
import Services from "../assets/Components/Services/Services"
import Focus from "../assets/Components/Focus/Focus"

const Landing = () => {
  return (
    <div>
      <Hero/>
      <Services/>
      <Focus/>
    </div>
  )
}

export default Landing