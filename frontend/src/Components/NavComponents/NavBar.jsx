import React, { useState } from 'react'
import './NavBar.css'

const NavBar = ({
  theme,
  setTheme,
  searchTerm,
  setSearchTerm,
  handleSearch,
  searching,
  clearSearch,
}) => {
  
  return (
    <div className={`navbar-ctn ${theme}`}>
      <div className='navlogo-ctn'><h1>VMAX</h1></div>
      <form onSubmit={handleSearch} className='navsearch-ctn'>
        <div className='search-ctn'>
          <input type='text'
          placeholder='Search movies...'
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
          />
           {!searching &&(
          <button onClick={handleSearch}><i className="bi bi-search"></i></button>
          )
          }
          {searching &&(
           <button onClick={clearSearch}><i className="bi bi-x-lg"></i></button>
          )
          }
        </div>
      </form>
      <div className='navtheme-ctn'>
        <button onClick={setTheme}>
          {theme=="dark"?(
            <span><i className="bi bi-emoji-sunglasses-fill"></i></span>
          ):
          (<span><i className="bi bi-emoji-sunglasses"></i></span>)}
        </button>
      </div>
    </div>
  )
}

export default NavBar
