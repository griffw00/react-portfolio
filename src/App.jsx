// src/App.js
import React, { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import "./App.css"; 
import Hero from "./components/Hero"; 
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar'; 

function App() {

    // Load page to top at refresh
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }

    // Fade in animations
    useEffect(() => {

    // Create an observer 
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('Intersecting:', entry.target); // Debug log
          entry.target.classList.add('show');
        }
      });
    });

    // Assign observer to all hidden elements
    const hiddenElements = document.querySelectorAll('.hidden');
    console.log('Hidden elements:', hiddenElements); // Debug log
    hiddenElements.forEach((el) => observer.observe(el));

  }, []);

  // Import open sans font
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);


  return (
    <ChakraProvider>
       <div className="App">
          <div className="container">
            <Navbar/>
            <Hero/>
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
            <p>&copy; 2024 Griff Wong. All rights reserved.</p>
          </footer>
      </div>
    </ChakraProvider>
  );
}

export default App;
