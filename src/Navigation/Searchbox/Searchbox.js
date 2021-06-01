import React from 'react'
import classes from './Searchbox.module.css'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';


const Searchbox = props=>{
    return (
        <div className={classes.searchbox}>
          <input type='text' placeholder='Search Book'/>
          <div className={classes.searchIcon}>
              <SearchOutlinedIcon/>
           </div>   
         </div>
    )
}

export default Searchbox