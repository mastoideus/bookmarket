import React, {useState} from 'react'
import classes from './BookItem.module.css'
import DetailsModal from '../DetailsModal/DetailsModal'
import Transition from 'react-transition-group/Transition'
import {booklistActions} from '../../../../store/booklist-slice'
import {useDispatch} from 'react-redux'


const BookItem= ({id,img,title,author,price,stars,synopsis,pages,genre})=>{
     
    const dispatch= useDispatch()
    const [showDetailsModal, setShowDetailsModal]= useState(false)

     const showDetailHandler=()=>{
         setShowDetailsModal(true)
     }
     const closeDetailHandler=()=>{
         setShowDetailsModal(false)
     }

     const addBookHandler=()=>{
        dispatch(booklistActions.addBookToList({id,img,title,author,price,stars,genre}))
     }


    return (
        <React.Fragment>
             <Transition 
             mountOnEnter
             unmountOnExit
             timeout={400}
             in={showDetailsModal}>
               {state=>(
                   <DetailsModal onShow={state} onClose={closeDetailHandler} book={{id, img, title, author,synopsis,pages}}/>
               )}
             </Transition>
            
            <li className={classes.book}>
             <div className={classes.image}>
              <img src={img} alt='cvb'/>
             </div>
             <button className={classes.details} onClick={showDetailHandler}>Synopsis</button>
             <div className={classes.info}>
              <h3>{title}</h3>
              <small>{author}</small>
              <span>{stars}</span>
              <strong>Price: ${price}</strong>
             </div>
             <button className={classes.btn} onClick={addBookHandler}>ADD TO BOOKLIST</button>
          </li>
        </React.Fragment>
       
    )
}


export default BookItem