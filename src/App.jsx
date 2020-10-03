import React from 'react';
import './App.scss';
import NavBar from './components/navBar/NavBar'
import Work from './components/workPage/Work'
import AboutMe from './components/aboutMePage/AboutMe'
import Contact from './components/contactPage/Contact'
import Home from './components/homePage/HomePage'


function App() {
  return (
    
        <div className="App">
          <Home />
          <NavBar/>
          <Work/>
          <AboutMe/>
          <Contact/>
          
        </div>  
     
  );
}

export default App
