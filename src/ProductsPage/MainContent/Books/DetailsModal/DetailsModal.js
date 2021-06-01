import React, {useState} from 'react'
import classes from './DetailsModal.module.css'
import ReactDOM from 'react-dom'
import closeIcon from '../../../../assets/images/blackIcon.png'



const DetailsModal= props=>{
     const [readMore, setReadMore]= useState(false)

     const{img, title, author, synopsis, pages}= props.book
    
     const readMoreHandler=()=>{
         setReadMore(!readMore)
     }

     const classesModal= [classes.DetailsModal,  props.onShow==='entering'? classes.openModal: props.onShow==='exiting'? classes.closeModal : null].join(' ')
   

    const content = (
        <div className={classesModal}>
          <div className={classes.imgContainer}>
              <img className={classes.image} src={img}  alt='frt' />
          </div>
          <div className={classes.rightContent}>
             
             <strong>{author}</strong>
             <h3>{title}</h3>
             <p>{readMore? synopsis : `${synopsis.substring(0,153)}...`}<button style={{marginLeft:'5px'}} onClick={readMoreHandler}>{readMore? 'Read less':'Read More'}</button></p>
             <strong>Pages: {pages}</strong>
          </div>
          <img onClick={props.onClose} className={classes.image2} src={closeIcon} alt='sdsa'/>
        </div>
    )
    
    return ReactDOM.createPortal(content, document.getElementById('modalDetails-hook'))
}


export default DetailsModal