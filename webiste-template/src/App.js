import React from "react";
import "./style.css";
import NavBar from "./Navbar";
import MastHead from "./Masthead";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact"
import Footer from "./Footer"

const App = () => {
    return(
        <div> 
            <h1>Hello World!!</h1>
            <NavBar />
            <MastHead />
            <Portfolio />
            <About />
            <Contact />
            <Footer />
        </div>
    )
}

export default App;