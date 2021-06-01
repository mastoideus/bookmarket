import React from 'react'
import classes from './BusketList.module.css'


const BusketList =(props)=>{
    return (
        <li className={classes.listItem}>
           <p className={classes.harry}>{props.title}</p><small>x{props.quantity}</small>
           <span className={classes.info}>
               <small>Author: {props.author}</small>
               <small>Price: ${props.price}</small>
           </span>

        </li>

    )
}

export default BusketList