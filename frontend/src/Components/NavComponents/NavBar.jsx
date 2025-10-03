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
  exploreRef,
  language,
  setLanguage
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
      <div className='language-ctn'>
         <select 
          value={language} 
          onChange={(e) => setLanguage(e.target.value)}
          className="language-select"
        >
          <option value="">Select Language</option>
          <option value="ta">Tamil</option>
          <option value="kn">Kannada</option>
          <option value="hi">Hindi</option>
          <option value="te">Telugu</option>
          <option value="ml">Malayalam</option>
          <option value="en">English</option>
        </select>
      </div>
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
