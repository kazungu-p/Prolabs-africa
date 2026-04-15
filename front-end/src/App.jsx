import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import ContactUs from "./pages/ContactUs"
import Portfolio from "./pages/Portfolio"
import Pricing from "./pages/Pricing"
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App
