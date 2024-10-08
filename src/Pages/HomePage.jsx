import Hero from "../assets/Components/Hero/Hero"
import HomeServices from "../assets/Components/HomeServices/HomeServices"
import HomeTestimonials from "../assets/Components/HomeTestimonials/HomeTestimonials"
import HomeQuote from "../assets/Components/HomeQuote/HomeQuote"
import HomeAbout from "../assets/Components/HomeAbout/HomeAbout"


const HomePage = () => {
  return (
    <div>
      <Hero/>
      <HomeServices/>
      {/* <HomeTestimonials/> */}
      <HomeQuote/>
      <HomeAbout/>
    </div>
  )
}

export default HomePage