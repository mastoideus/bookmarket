import React from 'react'
import classes from './BookBasket.module.css'
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';
import BusketList from '../BookBasket/BusketList'
import {useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {useGlobalContext} from '../../genres-context'


const BookBasket= props=>{
    const bookNumber= useSelector(state=>state.bklist.totalQuantity)
    const {totalP}= useGlobalContext()
    const books=useSelector(state=>state.bklist.items)

     
     const booksList=books.map(book=>{
         return <BusketList
             id={book.id}
             author={book.author}
             price={book.totalPrice}
             title={book.title}
             key={book.id}
             quantity={book.quantity}

         />
     })
     
     

    return (
        <div className={classes.container}>
        <NavLink to='/orders'><button className={classes.btn}>
           <div className={classes.number}>
           <ShoppingCartTwoToneIcon/>
           <span>{bookNumber}</span>
           </div>
           <span className={classes.booklist}>My Booklist</span>
        </button></NavLink>
        <ul className={classes.list}>
            <div className={classes.books}>
             {booksList}
            </div>
            <h3 style={{color:'darkred'}}>Total: ${totalP.toFixed(2)}</h3>
        </ul>
        </div>
    )
}

export default BookBasket