import React from 'react' 
import BooksList from './BooksList/BooksList'
import './Books.css'
import {useGlobalContext} from '../../../genres-context'





const Books=props=>{
    const {bookList}= useGlobalContext()

    return (
        <section className='sect'>
             <BooksList books={bookList} /> 
        </section>
       
    )
    
    
}

export default Books

