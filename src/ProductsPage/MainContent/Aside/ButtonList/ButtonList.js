import React from 'react'
import classes from './ButtonList.module.css'
import {useGlobalContext} from '../../../../genres-context'


const ButtonList=props=>{
    const {filterBooks}= useGlobalContext()

 
    return (
        <div className={classes.btnlist}>
           <button onClick={()=>filterBooks('all')}>ALL</button>
           <button onClick={()=>filterBooks('sf')}>SF</button>
           <button onClick={()=>filterBooks('detective')}>DETECTIVE</button>
           <button onClick={()=>filterBooks('fantasy')}>FANTASY</button>
           <button onClick={()=>filterBooks('thriller')}>THRILLER</button>
           <button onClick={()=>filterBooks('romance')}>ROMANCE</button>
           <button onClick={()=>filterBooks('horror')}>HORROR</button>
           <button onClick={()=>filterBooks('classics')}>CLASSICS</button>
        </div>
    )
}

export default ButtonList 