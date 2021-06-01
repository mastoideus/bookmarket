import React from 'react'
import classes from './OrdersHeader.module.css'
import HeaderLeft from './HeaderLeft/HeaderLeft'
import HeaderRight from './HeaderRight/HeaderRight'


const OrdersHeader=(props)=>{
    return (
        <div className={classes.ordersHeader}>
          <HeaderLeft/>
          <HeaderRight/>
        </div>
    )
}

export default OrdersHeader