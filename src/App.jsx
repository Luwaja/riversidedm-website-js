import appStyles from "./App.module.css"
import { Routes, Route } from "react-router-dom"
import ScrollToTop from "./assets/Components/ScrollToTop/ScrollToTop"
import Navbar from "./assets/Components/Navbar/Navbar"
import Home from "./Pages/HomePage"
import Services from "./Pages/ServicesPage"
import Testimonials from "./Pages/TestimonialsPage"
import Blog from "./Pages/BlogPage/BlogPage"
import BlogCategory from "./Pages/BlogPage/BlogCategory"
import BlogArchive from "./Pages/BlogPage/BlogArchive"
import BlogDetail from "./Pages/BlogPage/BlogDetail"
import Footer from "./assets/Components/Footer/Footer"

function App() {
  return (
    <>
      <ScrollToTop/>
      <div className={appStyles.navBarContainer}>
        <Navbar/>
      </div>
      <div className={appStyles.pageContainer}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/testimonials" element={<Testimonials/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/blog/category/:id" element={<BlogCategory/>} />
          <Route path="/blog/archive/:year/:month" element={<BlogArchive/>} />
          <Route path="/blog/:id" element={<BlogDetail/>} />
        </Routes>
      </div>
      <div className={appStyles.footerContainer}>
        <Footer/>
      </div>
    </>
  )
}

export default App