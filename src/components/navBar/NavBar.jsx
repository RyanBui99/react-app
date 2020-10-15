/**
 * navigation bar component.
 * 
 * Thing the it must include:
 * - Contact
 * - About me
 * - Projects
 * - Home
 */
import React, { Component }  from 'react'
import './navBarStyle.scss'
import NavBarItems from './navBarItems'
import { Link } from 'react-scroll'

export default class NavBar extends Component {

    
    render() {
            /**
     * Map function to render out different links
     */
    
        const mapFunction = NavBarItems.map((item, id) => {
            return (
                <li key={id}>
                    <Link
                    to={item.link} 
                    className={item.cName}
                    activeClass={item.activeClass}
                    spy={item.spy}
                    smooth={item.smooth}
                    offset={item.offset}
                    duration={item.duration}>
                    {item.name}
                    </Link>
                </li>
            )
        })


    return (
        <nav className='nav'>
            <div className='nav-wrapper'> 
                <div className='logo-link'>
                    <Link 
                    to='homePage'
                    activeClass='active'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                        RB
                    </Link>
                </div>

                <ul className='nav-links'>
                    {mapFunction}
                </ul>

            </div>   
        </nav>
    )
}
}




