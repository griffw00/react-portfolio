// src/App.js
import React, { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import './App.css';
import Hero from "./components/Hero"; 
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar'; 

function App() {

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
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Contact />
          </div>
          <footer>
            <p>&copy; 2024 Griff Wong. All rights reserved.</p>
          </footer>
      </div>
    </ChakraProvider>
  );
}

export default App;
