import heroStyles from "./Hero.module.css"

const Hero = () => {
  return (
      <div className={[heroStyles.heroContainer, "position-relative"].join(" ")}>
        <div className={[heroStyles.backgroundContainer, "d-flex justify-content-center align-items-center"].join(" ")}>
          <div id="contentContainer" className="container row d-flex justify-content-center align-items-center mb-5">

            <div id="textContainer" className="col-lg-10 col-10-md col-12 text-center">
              <h1 className={[heroStyles.h1, "mb-2 lh-1 text-white"].join(" ")}>Let us help make your business <span className={heroStyles.flow}>flow</span>!</h1>
              <p className={[heroStyles.p, "mb-5 fw-medium fst-italic text-white"].join(" ")}>Discover, create, and optimize your digital presence.</p>
            </div>
            <div id="buttonContainer" className="col-12 d-flex flex-row justify-content-center align-items-center mb-5">
                <button
                  type="button"
                  className={[heroStyles.contactButton, "me-3 justify-content-center align-items-center"].join(" ")}>
                    Contact Us
                </button>
                <button
                  type="button"
                  className={[heroStyles.servicesButton, "justify-content-center align-items-center"].join(" ")}>
                    Services
                </button>
            </div>

          </div> 
        </div>
      </div>
  )
}

export default Hero