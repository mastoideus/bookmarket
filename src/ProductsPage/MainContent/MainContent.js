import React from 'react'
import './MainContent.css'
import Aside from './Aside/Aside'
import Books from './Books/Books'


const MainContent=props=>{
    return (
        <main className='main'>
           <Aside/>
           <Books/>
        </main>
    )
}

export default MainContent