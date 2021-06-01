import React from 'react'
import classes from './HeaderButton.module.css'
import AppleIcon from '@material-ui/icons/Apple';



const HeaderButton=(props)=>{
    return (
        <button className={classes.btn}>
                    <span className={classes.playImg}>
                    {props.sub === 'Download on the'? <AppleIcon style={{fontSize:'38px'}}/>: <img src={props.image} alt='der'/>}
                    </span>
                    <span className={classes.rightbtn}>
                        <small>{props.sub}</small>
                        <h3>{props.title}</h3>
                        
                    </span>
                </button>
    )
}

export default HeaderButton