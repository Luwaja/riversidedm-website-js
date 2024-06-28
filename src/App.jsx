import appStyles from "./App.module.css"
import NavBar from "./assets/Components/NavBar/NavBar"
import HomePage from "./Pages/HomePage"
import Footer from "./assets/Components/Footer/Footer"

function App() {
  return (
    <>
      <body>
        <div className={appStyles.navBarContainer}>
          <NavBar/>
        </div>
        <div className={appStyles.pageContainer}>
          <HomePage/>
        </div>
        <div className={appStyles.footerContainer}>
          <Footer/>
        </div>
      </body>
    </>
  )
}

export default App