import React from 'react'
import classes from './HeaderLeft.module.css'


const HeaderLeft=(props)=>{
    return (
       <div className={classes.headerLeft}>
         <h1>Become a <span style={{color:'goldenrod'}}>Premium</span> member of the <span style={{color:'black'}}>Bookmark</span><span style={{color:'red'}}>@</span> community</h1>
         <button>Go to Membership Page</button>

       </div>
    )
}


export default HeaderLeft