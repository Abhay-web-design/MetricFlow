import React, { useState } from 'react'

const SidebarItem = () => {

  return (
    <>
    <div className={`md:flex items-center gap-10 hidden`}>
      <a href='#' className='text-[#F9FAFB] text-lg font-light active:border-b-4 border-blue-600 active:text-blue-600 py-4 ' >Dashboard</a>
      <a href='#' className='text-[#F9FAFB] text-lg font-light active:border-b-4 border-blue-600 active:text-blue-600 py-4 ' >Analytics</a>
      <a href='#' className='text-[#F9FAFB] text-lg font-light active:border-b-4 border-blue-600 active:text-blue-600 py-4 ' >Users</a>
      <a href='#' className='text-[#F9FAFB] text-lg font-light active:border-b-4 border-blue-600 active:text-blue-600 py-4 ' >Settings</a>
    </div>
    </>
  )
}

export default SidebarItem
