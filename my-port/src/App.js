import React from 'react'
import "./app.css"
import Navbar from './Component/Page/Navbar/Navbar'
import Home from './Component/Page/Home/Home';
import About from './Component/Page/About/About'

// import Skills from "./Componenent/Page/Skills/Skills"
// import Project from './Componenent/Page/Project/Project'
// import Footer from './Componenent/Page/Footer.js/Footer'
// import Contact from './Componenent/Page/Contact/Contact'

const App = () => {
  return (
    <>
    <Navbar/>
   <Home />
   <About />
    {/* <Skills/>
    <Project/>
    <Contact/>
    <Footer/> */}

    </>
  )
}

export default App
