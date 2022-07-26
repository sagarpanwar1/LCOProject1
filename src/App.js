import React from "react";
import NavBar from "./Navbar";
import HeroSection from "./HeroSection";
import AppSection from "./AppSection";
import Cards from "./Cards";
import Footer from "./Footer";

const App = () => {
    return (
        <div>
            <NavBar/>
            <HeroSection/>
            <AppSection/>
            <Cards/>
            <Footer/>
        </div>
    )
}

export default App;
