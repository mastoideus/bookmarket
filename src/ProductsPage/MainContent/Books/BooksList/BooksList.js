import React from 'react'
import classes from './BooksList.module.css'
import bookmarkImg from '../../../../assets/images/bookmark.png'
import BookItem from './BookItem'


const BooksList= (props)=>{
   
     const booksList= props.books.map(book=>{
         return <BookItem
            id={book.id}
            key={book.id}
            title={book.title}
            author={book.author}
            img={book.img}
            price={book.price}
            stars={book.stars}
            synopsis={book.synopsis}
            pages={book.pages}
         />
     })
   
   
    return (
       <React.Fragment>
        <div className={classes.header}>
          <h3>Find your favorite book and <span className={classes.bookmark}>Bookmark<span style={{color:'red'}}>@</span></span> us!</h3>
          <img className={classes.img} src={bookmarkImg} alt='hhh'/>
        </div>
          <ul className={classes.booklist}>
           {booksList}
          </ul>
       </React.Fragment>
      
    
     
   )
}


export default BooksList 