import React, {useState} from 'react'
import './Toolbar.css'
import Logo from '../Logo/Logo'
import Searchbox from '../Searchbox/Searchbox'
import NavigationLinks from '../NavigationLinks/NavigationLinks'
import BookBasket from '../BookBasket/BookBasket'
import {Link} from 'react-router-dom'



const  Toolbar= props=>{
     const [openSearchbox, setOpenSearchbox]= useState(false)
     const [openNav, setOpenNav]= useState(false)

     const toggleSearchHandler=()=>{
       setOpenSearchbox(!openSearchbox)
     }
     const toggleNavHandler=()=>{
       setOpenNav(!openNav)
     }

    return (
      <React.Fragment>
        <div className='toolbar'>
           <Logo/>
           <Searchbox onShow={openSearchbox}/>
           <button className='toolbar__searchboxBtn' onClick={toggleSearchHandler}>Searchbox</button>
           <button className='toolbar__toggleNavBtn'onClick={toggleNavHandler}>Navigate</button>
           <nav>
             <NavigationLinks/>
           </nav>
           <BookBasket/>
        </div>
        <div className='toolbar__mobileNav' style={{transform: openNav? 'translateY(0)':'translateY(-100%)', opacity: openNav? '1':'0'}}>
            <li><Link to='/'>Home</Link></li>
           <li><Link to='/about'>About</Link></li>
           <li><Link to='/contact'>Contact</Link></li>
        </div>
        </React.Fragment>
    )
}


export default Toolbar