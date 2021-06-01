import React from 'react' 
import classes from './Header.module.css'
import regalImg from '../../assets/images/regal.jpeg'
import googlePlayImg from '../../assets/images/play.png'
import HeaderButton from './HeaderButton/HeaderButton'




const Header= props=>{
    return (
        <header className={classes.header}>
           <div className={classes.info}>
                <div className={classes.circle}></div>
               <h1 className={classes.title}>Buy and sell Books on the biggest online <span style={{color:'black', fontFamily: "'Montserrat', sans-serif",fontSize:'80px'}}>Bookmark<span style={{color:'red'}}>@</span></span></h1>
               
               <div className={classes.buttons}>
                <HeaderButton sub='GET IT ON' title='Google Play' image={googlePlayImg}/>
                <HeaderButton sub='Download on the' title='App Store' />
                
               </div>
           </div>
           <div className={classes.image}>
               <img src={regalImg} alt='hhh'/>
           </div>
        </header>
    )
}

export default Header