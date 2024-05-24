import {useEffect, React} from "react";
import heroImage from "../assets/landing.png";
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Import icons from react-icons library
import "./styles/hero.css";

const Hero = () => {

    // useEffect(() => {
    //     const { hash } = window.location;
    
    //     if (hash === '#hero') {
    //       const homeSection = document.getElementById('hero');
    //       if (homeSection) {
    //         homeSection.scrollIntoView({ behavior: 'smooth' });
    //       }
    //     }
    //   }, []);
    
    return(
        <div className="hero-container" id = "hero">
            <div className="hero-text">
                <h2>Hello, my name is</h2>
                <h1>GRIFF</h1>
                <div className="hero-icons">
                {/* LinkedIn icon with link */}
                <a href="https://www.linkedin.com/in/griff-wong" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="icon"/>
                </a>
                {/* GitHub icon with link */}
                <a href="https://github.com/griffw00" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="icon"/>
                </a>
            </div>
            </div>
            <div className="hero-image">
                <img src={heroImage} alt= "Hero" />
            </div>
        </div>
    );
}

export default Hero; 

