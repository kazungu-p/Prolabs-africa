import React from "react";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Team from "../components/Team";

function Home() {
    return (
        <>
            <Hero />
            <AboutUs/>
            <Services/>
            <Team/>
        </>
    )
}
export default Home;