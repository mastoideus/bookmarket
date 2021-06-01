import React, { useContext, useState } from 'react'
import books from './data'
import {useSelector} from 'react-redux'


const GenreContext= React.createContext()


export const GenreProvider= (props)=>{
    const items=useSelector(state=>state.bklist.items)
    const [bookList, setBookList] = useState(books)
    
    const filterBooks= (genre)=>{
        
        if(genre !== 'all'){
            const filteredBooks= books.filter(book=>{
                return book.genre === genre
            })
            setBookList(filteredBooks)
        } else if(genre==='all') {
            setBookList(books)
        }
        
    }

    const totalP=items.map(book=>{
         return book.totalPrice
     }).reduce((sum,el)=>{
        return sum+el   
     },0)


    return <GenreContext.Provider value={{filterBooks, bookList, totalP}}>
         {props.children}
    </GenreContext.Provider>
}


export const useGlobalContext= ()=>{
    return useContext(GenreContext)
}