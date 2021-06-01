import React, {useState, useEffect} from 'react'
import {newReleases} from '../../data'
import classes from './Slider.module.css'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


const Slider=()=>{
    const [newBooks, setNewBooks]= useState(newReleases)
    const [index, setIndex]= useState(0)

   
  
   
   
    const checkNextIndex=(nextIndex)=>{
       if(nextIndex> newBooks.length-1 ){
           return 0
       } 
      
       return nextIndex
    }
    const checkPrevIndex=(prevIndex)=>{
        if(prevIndex<0){
            return newBooks.length-1
        }
        return prevIndex
    }


    const nextBookHandler=()=>{
       setIndex(()=>{
          const nextIndex=index+1
          return checkNextIndex(nextIndex)
      })
      console.log(index)
    }
    const prevBookHandler=()=>{
       const prevIndex=index-1

       setIndex(checkPrevIndex(prevIndex))
       console.log(index)
    }
    
    return (
             <section className={classes.section}>
               <div className={classes.title}>
                 <h2>NEW RELEASES</h2>
                 <hr className={classes.line}></hr>
                </div>
                <div className={classes.sectionCenter}>
                  {newBooks.map((book,bookIndex)=>{
                     const {id,title,author,price,img} = book

                    
                    let position=classes.nextSlide
                     if(bookIndex===index){
                        position=classes.activeSlide
                     }
                      if(bookIndex===index-1 || (index===0 && bookIndex=== newBooks.length-1)){
                        position=classes.lastSlide
                      } 
                    

                     return <article key={id} className={position}>
                         <img src={img} alt='vbn' className={classes.image}/>
                         <h3 style={{color:'red'}}>{title}</h3>
                         <h4>{author}</h4>
                         <h4>${price}</h4>
                     </article>
                  })}
                  <button className={classes.prevBtn} onClick={prevBookHandler}>
                      <NavigateBeforeIcon style={{color:'white'}}/>
                  </button>
                  <button className={classes.nextBtn} onClick={nextBookHandler}>
                      <NavigateNextIcon style={{color:'white'}}/>
                  </button>
                </div>
             </section>
    )
}


export default Slider