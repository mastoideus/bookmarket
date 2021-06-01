
import {createSlice} from '@reduxjs/toolkit'


const booklistSlice= createSlice({
   name:'booklist',
   initialState: {
      items:[],
      totalQuantity:0
   },
   reducers:{
       addBookToList(state, action){
          const newBook= action.payload
          const existingBook= state.items.find((item)=>item.id === newBook.id)
          if(!existingBook){
              state.totalQuantity++
              state.items.push({
                  id:newBook.id,
                  title: newBook.title,
                  stars: newBook.stars,
                  author:newBook.author,
                  price: newBook.price,
                  totalPrice: newBook.price,
                  quantity: 1,
                  genre: newBook.genre,
                  img: newBook.img
              })
          }else {
             state.totalQuantity++
             existingBook.quantity++
             existingBook.totalPrice= existingBook.totalPrice+ newBook.price
          }
       },
       removeBook(state, action){
           const {id,price}= action.payload
           const existingBook=state.items.find(item=>item.id===id)
           if(existingBook.quantity===1){
               state.items=state.items.filter(item=>item.id !== id)
               state.totalQuantity--
               
           } else {
               state.totalQuantity--
               existingBook.quantity--
               existingBook.totalPrice= existingBook.totalPrice-price
           }
       }
   }
})

export const booklistActions= booklistSlice.actions

export default booklistSlice