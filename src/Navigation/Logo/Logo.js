import React from 'react'
import classes from './Logo.module.css'
import bookImg from '../../assets/images/book2.png'


const Logo= props=>{
    return (
        <div className={classes.logo}>
          <img src={bookImg} alt='rer' />
          <h2>Bookmark<span>@</span></h2>
        </div>
    )
}

export default Logo 