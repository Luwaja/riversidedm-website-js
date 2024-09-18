import { Link } from "react-router-dom"
import heroStyles from "./ServicesHero.module.css"

const ServicesHero = () => {
  return (
      <div className={[heroStyles.heroContainer, "position-relative"].join(" ")}>
        <div className={[heroStyles.backgroundContainer, "d-flex justify-content-center align-items-center"].join(" ")}>
          <div id="contentContainer" className="container row d-flex justify-content-center align-items-center pt-5 mb-5">

            <div id="textContainer" className="col-lg-10 col-10-md col-10 text-center">
              <h1 className={[heroStyles.h1, ""].join(" ")}>Services tailored to <span className={heroStyles.accentedText}>you</span>!</h1>
              <p className={[heroStyles.p, "fw-medium text-white"].join(" ")}>See how we can cater to your needs.</p>
            </div>
            <div id="buttonContainer" className="col-12 d-flex justify-content-center align-items-center pb-5">
                <a href="https://us17.list-manage.com/contact-form?u=bbe8864caefa63631e1f85b35&form_id=98852831aa6815bd8fce274a3294f0b2" target="_blank" rel="noopener noreferrer">
                  <button
                    type="button"
                    className={[heroStyles.contactButton, "justify-content-center align-items-center"].join(" ")}>
                      Get a Quote
                  </button>
                </a>
            </div>

          </div> 
        </div>
      </div>
  )
}

export default ServicesHero