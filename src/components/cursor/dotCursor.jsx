import React, {useState, useEffect} from 'react'
import classNames from 'classnames'

const Cursor = () => {
    const [position, setPosition] = useState({x: 0, y: 0})
    const [hidden, setHidden] = useState(false)
  
    useEffect(() => {
        addEventListener()
        return () => removeEventListener()
    }, [])
  
    const addEventListener = () => {
        document.addEventListener('mousemove', onMouseMove)
        document.addEventListener('mouseenter', onMouseEnter)
        document.addEventListener('mouseleave', onMouseLeave)
    }
  
    const removeEventListener = () => {
        document.removeEventListener('mousemove', onMouseMove)
        document.removeEventListener('mouseenter', onMouseEnter)
        document.removeEventListener('mouseleave', onMouseLeave)
    }
  
    const onMouseMove = (e) => {
        setPosition({x: e.clientX, y: e.clientY})
    }
  
    const onMouseLeave = (e) => {
      setHidden(true)
    }
  
    const onMouseEnter = (e) => {
      setHidden(false)
    }

    const cursorClass = classNames(
        'cursor', {
            'cursor--hidden': hidden
        }
    )
  
    return (
      <div className={cursorClass} id="cursor"    
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`
          }}/>
    )
  }

  export default Cursor