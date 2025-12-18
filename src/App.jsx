import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import ContactUs from "./pages/ContactUs"

function App() {

  return (
    <>
      <div className="app">
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<ContactUs/>} />
          </Routes>
        </Router>

      </div>
      <Footer/>
    </>
  )
}

export default App
