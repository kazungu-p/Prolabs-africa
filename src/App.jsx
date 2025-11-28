import React from "react"
import Navbar from "./components/Navbar"
import Landing from "./components/Landing"
import Section from "./components/Section"
import AboutUsData from "./assets/data/AboutUsData"
import Services from "./assets/data/Services"

function App() {

  return (
    <>
      <Navbar />
      <Landing />
      <Section title={"About Us"} data={AboutUsData}/>
      <Section title={"What we do"} data={Services} className={"services"}/>
    </>
  )
}

export default App
