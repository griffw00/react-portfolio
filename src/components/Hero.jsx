import { React } from "react";
import heroImage from "../assets/cat-yarn.gif";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Import icons from react-icons library
import "./styles/hero.css";

const Hero = () => {

    const [text] = useTypewriter({
        words: ['Developer', 'Cat Owner', 'Scientist', 'Gamer', 'Soccer Player', 'Boba Lover'],
        loop: 0,
        typeSpeed: 75,
        deleteSpeed: 100,
    });
    
    return(
        <div className="hero-container" id = "hero">
            <div className="hero-text">
                <h2>Hello, my name is</h2>
                <h1>GRIFF</h1>
                <h2 style = {{color: '#5c28d7'}}> A {text} <Cursor/></h2>
            </div>
            <div className="hero-image">
                <img src={heroImage} alt= "Hero" />
            </div>
        </div>
    );
}

export default Hero; 

