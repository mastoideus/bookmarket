import React from 'react'
import classes from './Searchbox.module.css'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';


const Searchbox = props=>{

     const classesAdded=[classes.searchbox, props.onShow && classes.searchbtn ].join(' ')

    return (
        <div className={classesAdded}>
          <input type='text' placeholder='Search Book'/>
          <div className={classes.searchIcon}>
              <SearchOutlinedIcon/>
           </div>   
         </div>
    )
}

export default Searchbox