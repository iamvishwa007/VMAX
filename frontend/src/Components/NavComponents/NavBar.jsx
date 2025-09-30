import React, { useState } from 'react'
import './NavBar.css'

const NavBar = () => {
  
  return (
    <div className='navbar-ctn'>
      <div className='navlogo-ctn'><h1>VMAX</h1></div>
      <div className='navsearch-ctn'>
        <input type='text'
               placeholder='Enter to search something...'
               value={search}
               onChange={(e)=>{setSearch(e.target.value)}}/>
      </div>
      <div className='navtoggle-ctn'>toggle</div>
    </div>
  )
}

export default NavBar
