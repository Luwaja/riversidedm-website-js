import heroStyles from "./Hero.module.css"

const Hero = () => {
  return (
      <div className={[heroStyles.heroContainer, "position-relative"].join(" ")}>
        <div className={[heroStyles.backgroundContainer, "d-flex justify-content-center align-items-center"].join(" ")}>
          <div className={[heroStyles.contentContainer, "container row d-flex justify-content-center align-items-center mb-5"].join(" ")}>

            <div aria-label="text container" className="col-lg-6 col-md-12 col-12 text-center text-sm-center text-md-start pb-md-0 pb-2">
              <h1 className={[heroStyles.h1, "mb-3"].join(" ")}>Let us help make your business <span className={heroStyles.flow}>flow</span>!</h1>
              <p className={[heroStyles.p, "mb-4"].join(" ")}>Discover, create, and optimize your digital presence.</p>
            </div>
            <div className={[heroStyles.buttonContainer, "col-lg-4 col-md-12 col-12 d-flex flex-lg-column flex-row justify-content-center align-items-center"].join(" ")}>
                <button
                  type="button"
                  className={[heroStyles.contactButton, "mb-lg-5 mb-sm-0 me-lg-0 me-3 justify-content-center align-items-center fs-1"].join(" ")}>
                    Contact Us
                </button>
                <button
                  type="button"
                  className={[heroStyles.servicesButton, "justify-content-center align-items-center fs-1"].join(" ")}>
                    Services
                </button>
            </div>

          </div> 
        </div>
      </div>
  )
}

export default Hero