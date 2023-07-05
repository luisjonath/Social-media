import React from 'react'
import "./SearchBar.css"

export const SearchBar = () => {
  return (
    <div className='searchbar-container'>
        <input type="text" className='input-searchbar'/>
        <button className='btn-searchbar'><i className="fa-sharp fa-solid fa-magnifying-glass"></i></button>

    </div>
  )
}
