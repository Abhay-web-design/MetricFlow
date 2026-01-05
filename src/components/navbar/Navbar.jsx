import React from 'react'
import Logo from '../ui/Logo'
import SidebarItem from '../sidebar/SidebarItem'
import NavProfile from '../sidebar/NavProfile'
import Hamburger from '../ui/Hamburger'

const Navbar = () => {
  return (
    <div className=' w-full bg-[#0F172A] flex items-center justify-between px-4  shadow-md'>
   <div className='flex items-center '>
       <Hamburger />
      <Logo />
   </div>
      <SidebarItem />
      <NavProfile />
    </div>
  )
}

export default Navbar