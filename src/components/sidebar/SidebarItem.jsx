import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SidebarItem = () => {

  return (
    <>
    <div className={`md:flex items-center gap-10 hidden`}>
       <Link to={'/'} className='text-[#F9FAFB] text-lg font-light active:border-b-4 border-blue-600 active:text-blue-600 py-4 ' >Dashboard</Link>
      <Link to={'/Analytics'} className='text-[#F9FAFB] text-lg font-light active:border-b-4 border-blue-600 active:text-blue-600 py-4 ' >Analytics</Link>
       <Link to={'/Users'} className='text-[#F9FAFB] text-lg font-light active:border-b-4 border-blue-600 active:text-blue-600 py-4 ' >Users</Link>
      <Link to={'/Settings'} className='text-[#F9FAFB] text-lg font-light active:border-b-4 border-blue-600 active:text-blue-600 py-4 ' >Settings</Link>
    </div>
    </>
  )
}

export default SidebarItem
