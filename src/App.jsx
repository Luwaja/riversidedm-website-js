import appStyles from "./App.module.css"
import { Routes, Route } from "react-router-dom"
import ScrollToTop from "./assets/Components/ScrollToTop/ScrollToTop"
import NavBar from "./assets/Components/Navbar/Navbar"
import Home from "./Pages/HomePage"
import Services from "./Pages/ServicesPage"
import Testimonials from "./Pages/TestimonialsPage"
import Blog from "./Pages/BlogPage/BlogPage"
import Footer from "./assets/Components/Footer/Footer"

function App() {
  return (
    <>
      <ScrollToTop/>
      <div className={appStyles.navBarContainer}>
        <NavBar/>
      </div>
      <div className={appStyles.pageContainer}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/testimonials" element={<Testimonials/>} />
          <Route path="/blog" element={<Blog/>} />
        </Routes>
      </div>
      <div className={appStyles.footerContainer}>
        <Footer/>
      </div>
    </>
  )
}

export default App