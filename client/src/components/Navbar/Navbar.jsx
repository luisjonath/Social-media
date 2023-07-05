import React from 'react'
import "./Navbar.css"
import { SearchBar } from '../SearchBar/SearchBar'
import roman from "../../../public/roman.jpg"
import { Sidebar } from '../Sidebar/Sidebar'

export const Navbar = () => {
  return (
    <div>
        <div className='container-navbar'>
        
        <div className='logo-navbar'>
            <p>Facebook</p>
        </div>
        
        <div className='container-search'>
        <SearchBar />
        </div>
                
        <div className='profile'>
            <div className='profile-message'><button className='btn-message'><i className="fa-sharp fa-solid fa-envelope"></i></button></div>
            <div className='profile-notifications'>
            <button className='btn-notifications'><i className="fa-solid fa-bell"></i></button>
            </div>
            
            <div><img src={roman} alt="" className='profile-img'/></div>
        </div>
    </div>
    </div>
  )
}
