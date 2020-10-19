import React, {useState, useEffect} from 'react'

export default function dotCursor() {
    const Cursor = () => {
        const [position, setPosition] = useState({x: 0, y: 0})

        useEffect(() => {
            addEventListener()
            return () => removeEventListener
        }, [])

        const addEventListener = () => {
            document.addEventListener('mousemove', onmousemove)
        }

        const removeEventListener = () => {
            document.addEventListener('mousemove', onmousemove)
        }

        const onmousemove = (e) => {
            setPosition({x: e.clientX, y: e.clientY})
        }
    }

    return (
        <div className="cursor" id="cursor">    
            style={{left: `${position.x}`, top: `${position.y}`}}
        </div>
    )
}
