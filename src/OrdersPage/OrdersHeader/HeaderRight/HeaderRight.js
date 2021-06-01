import React  from 'react'
import classes from './HeaderRight.module.css'
import {useGlobalContext} from '../../../genres-context'
import {useSelector} from 'react-redux'
import {booklistActions} from '../../../store/booklist-slice'
import {useDispatch} from 'react-redux'


const HeaderRight=(props)=>{
    const dispatch=useDispatch()
    const books=useSelector(state=>state.bklist.items)
    const {totalP} = useGlobalContext()

    const removeBtnHandler=(info)=>{
       dispatch(booklistActions.removeBook(info))
    }
    const addBtnHandler=(book)=>{
        dispatch(booklistActions.addBookToList(book))
    }

    return (
       <div className={classes.headerRight}>
         <div className={classes.line}>
            <div className={classes.listBox}>
                <h3>YOUR BOOKLIST</h3>
                <ul className={classes.list}>
                {books.map(book=>{
                    return <li className={classes.listItem} key={book.id}>
                       <div>
                           <h4 style={{color:'red'}}>{book.title}</h4>
                           <small>{book.author}</small>
                       </div>
                       <div>
                           <p style={{fontSize:'15px'}}><small style={{color:'red'}}>Price:</small> ${book.totalPrice.toFixed(2)}</p>
                           <h5><span style={{color:'red'}}>Quantity:</span> {book.quantity}</h5>
                           <div className={classes.btn}>
                             <button onClick={()=>removeBtnHandler({id:book.id, price:book.price})} >-</button>
                           <button onClick={()=>addBtnHandler(book)}>+</button>
                           </div>
                           
                       </div>
                    </li>
                })}
                </ul>
                <div className={classes.purchase}>
                   <h3 style={{color:'red', textAlign:'left', paddingLeft:'20px'}}>Total: <span style={{color:'white'}}>${totalP.toFixed(2)}</span></h3>
                   <button>Purchase books</button>
                </div>
               
            </div>
         </div>
       </div>
    )
}


export default HeaderRight