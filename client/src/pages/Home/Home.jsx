import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { Contacts } from '../../components/Contacts/Contacts'

export const Home = () => {
  return (
    <div>
      <div><Navbar/></div>
      <div><Contacts /></div>
      <div><Sidebar />  </div>
      
        
      
    </div>
  )
}
