import React from 'react'
import classes from './NavigationLinks.module.css'
import {Link} from 'react-router-dom'


const NavigationLinks = props=>{
    return (
        <ul className={classes.navList}>
           
           <li><Link to='/'>Home</Link></li>
           <li><Link to='/about'>About</Link></li>
           <li><Link to='/contact'>Contact</Link></li>
           
        </ul>
    )
}

export default NavigationLinks