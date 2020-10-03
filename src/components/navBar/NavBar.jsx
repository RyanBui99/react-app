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
import { Link, animateScroll as scroll} from 'react-scroll'

export default class NavBar extends Component {

    
    render() {
            /**
     * Map function to render out different links
     */
    
        const mapFunction = NavBarItems.map((item, id) => {
            return (
                <li key={id} >
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
        <nav className='flex'>
            <div className='navBar-contaioner'>
                <ul className='navigation-items'>  
                    {mapFunction} 
                </ul>
            </div>
        </nav>
    )
}
}




