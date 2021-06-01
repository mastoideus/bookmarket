import React from 'react'
import classes from './Aside.module.css'
import BookGenres from './BookGenres/BookGenres'
import ButtonList from './ButtonList/ButtonList'


const Aside=props=>{
    return (
       
          
        <aside className={classes.aside}>
           <BookGenres/>
           <ButtonList/>
        </aside>
      
       
    )
}


export default Aside