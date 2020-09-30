import React  from 'react'
import './navBarStyle.scss'
import NavBarItems from './NavBarItems'



/**
 * navigation bar component.
 * 
 * Thing the it must include:
 * - Contact
 * - About me
 * - Projects
 * - Home
 * @param {*} props 
 */
let navBar = (props) => {
    const mapFunction = NavBarItems.map((item, id) => {
        return (
            <li key={id} >
                <a href={item.link} className={item.cName}>

                {item.name}
                </a>
            </li>
        )
    })

    return (
        <nav className='navBar'>
            <ul>  
            {mapFunction} 
            </ul>
        </nav>
    )
}

export default navBar