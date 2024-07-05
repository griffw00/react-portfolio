// src/App.js
import React, { useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import {
  ThreeDots,
  SpinningCircles,
  Rings,
  Circles,
  Hearts,
  Puff,
  BallTriangle,
  Bars,
} from "react-loading-icons";

function App() {
  // Import Open-Sans font
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  // Bring page view to the top after upon refresh
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  // Implement Loading Screen
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  // Animations for fade-ins
  useEffect(() => {
    // Ensure that all the elements are on the DOM before creating observer
    if (!isLoading) {
      // Create an observer
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Intersecting:", entry.target);
            entry.target.classList.add("show");
          }
        });
      });

      // Assign observer to all hidden elements
      const hiddenElements = document.querySelectorAll(".hidden");
      console.log("Hidden elements:", hiddenElements);
      hiddenElements.forEach((el) => observer.observe(el));
    }
  }, [isLoading]); // Ensure that this function runs when isLoading changes

  if (isLoading) {
    return (
      <ChakraProvider>
        <div className="loading">
          <SpinningCircles fill="#5c28d7" />
          <h1> Loading...</h1>
        </div>
      </ChakraProvider>
    );
  }

  return (
    <ChakraProvider>
      <div className="App">
        <div className="container">
          <Navbar />
          <Hero />
          <div className="hidden">
            <About />
          </div>
          <div className="hidden">
            <Projects />
          </div>
          <div className="hidden">
            <Contact />
          </div>
        </div>
        <footer>
          <p>&copy; 2024 Griff Wong. Made with love 💜.</p>
        </footer>
      </div>
    </ChakraProvider>
  );
}

export default App;
