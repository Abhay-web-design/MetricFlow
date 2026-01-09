import React from 'react'
import Dashboard from "../Pages/Dashboard"
import Analytics from '../Pages/Analytics'
import Users from '../Pages/Users'
import Settings from '../Pages/Settings'
import ProfileLayout from './ProfileLayout'
import Sidebar from '../components/sidebar/Sidebar'
import {Routes, Route } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div className='relative'>
      <Sidebar />
      <ProfileLayout />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/Analytics' element={<Analytics />} />
          <Route path='/Users' element={<Users />} />
          <Route path='/Settings' element={<Settings />} />
        </Routes>
  

  
    </div>
  )
}

export default DashboardLayout