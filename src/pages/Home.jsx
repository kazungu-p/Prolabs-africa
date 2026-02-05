import React from "react";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Team from "../components/Team";
import TechStack from "../components/TechStack";

function Home() {
    return (
        <>
            <Hero />
            <AboutUs/>
            <Services/>
            <Team/>
            <TechStack/>
        </>
    )
}
export default Home;