import React from "react";
import About from "./About";
import Footer from "./Footer";
import Hero from "./Hero";
import ScrollTop from "./ScrollTop";
import Tools from "./Tools";
import Work from "./Work";


const Home = () => {

    return(
        <> 
            <Hero/>
            <About/>
            <Tools />
            <Work />
            <Footer />
            <ScrollTop />
        </>
    )
}

export default Home;