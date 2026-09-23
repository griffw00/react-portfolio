import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import SocialLinks from "./SocialLinks";
import "./styles/hero.css";

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Software Developer",
      "Cat Dad",
      "Microbiologist",
      "Gamer",
      "Burger Lover",
    ],
    loop: 0,
    typeSpeed: 75,
    deleteSpeed: 100,
  });

  return (
    <section className="hero" id="hero">
      <div className="hero-main">
        <div className="hero-intro">
          <h1 className="hero-name">
            Griff
            <br />
            Wong
          </h1>
          <p className="hero-typewriter">
            A {text}
            <Cursor cursorStyle="|" />
          </p>
        </div>
      </div>

      <div className="hero-bottom">
        <SocialLinks />
        <a href="#about" className="hero-scroll">
          Scroll <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
