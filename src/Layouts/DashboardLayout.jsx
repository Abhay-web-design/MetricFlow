import React from 'react'
import Dashboard from "../Pages/Dashboard"
import Analytics from '../Pages/Analytics'
import Users from '../Pages/Users'
import Settings from '../Pages/Settings'
import ProfileLayout from './ProfileLayout'


const DashboardLayout = () => {
  return (
    <div className='relative'>
  <Dashboard />
  <Analytics />
  <Users />
  <Settings />
  
    </div>
  )
}

export default DashboardLayout