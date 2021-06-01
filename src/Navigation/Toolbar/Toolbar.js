import React from 'react'
import './Toolbar.css'
import Logo from '../Logo/Logo'
import Searchbox from '../Searchbox/Searchbox'
import NavigationLinks from '../NavigationLinks/NavigationLinks'
import BookBasket from '../BookBasket/BookBasket'



const  Toolbar= props=>{
    return (
        <div className='toolbar'>
           <Logo/>
           <Searchbox/>
           <nav>
             <NavigationLinks/>
           </nav>
           <BookBasket/>
        </div>
    )
}


export default Toolbar