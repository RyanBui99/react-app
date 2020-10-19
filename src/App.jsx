import React, {useState, useEffect} from 'react'
import './App.scss';
import NavBar from './components/navBar/NavBar'
import Work from './components/workPage/Work'
import AboutMe from './components/aboutMePage/AboutMe'
import Contact from './components/contactPage/Contact'
import Home from './components/homePage/HomePage'

function App() {
  return (
    
        <div className="App">
          <Cursor />
          <NavBar/>
          <Home />
          <Work/>
          <AboutMe/>
          <Contact/>
        </div>  
     
  );
}

const Cursor = () => {
  const [position, setPosition] = useState({x: 0, y: 0})

  useEffect(() => {
      addEventListener()
      return () => removeEventListener()
  }, [])

  const addEventListener = () => {
      document.addEventListener('mousemove', onMouseMove)
  }

  const removeEventListener = () => {
      document.removeEventListener('mousemove', onMouseMove)
  }

  const onMouseMove = (e) => {
      setPosition({x: e.clientX, y: e.clientY})
  }


  return (
    <div className="cursor" id="cursor"    
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`
        }}/>
  )
}

export default App
