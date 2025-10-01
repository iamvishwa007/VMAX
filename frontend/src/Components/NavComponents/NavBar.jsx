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
  exploreRef
}) => {
  
  return (
    <div className={`navbar-ctn ${theme}`}>
      <div className='navlogo-ctn'><h1>VMAX</h1></div>
      <form onSubmit={handleSearch} className='navsearch-ctn'>
        <div className='search-ctn'>
           <svg
            className="search-icon"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="7" stroke="currentColor" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" />
          </svg>
          <input type='text'
           placeholder='Search movies...'
           value={searchTerm}
           onChange={(e)=>setSearchTerm(e.target.value)}
           className='search-input'
          />
           {searchTerm && (
            <button
              type="button"
              onClick={clearSearch}
              className="clear-button"
              title="Clear Search"
            >
             <i className="bi bi-x-lg"></i>
            </button>
          )}
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
