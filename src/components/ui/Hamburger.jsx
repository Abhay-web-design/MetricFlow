import React, { useContext } from 'react'
import { AppData } from '../../context/AppDatacontext'

const Hamburger = () => {
  const Data = useContext(AppData)
  
  return (
    <div onClick={()=>{
      Data.setsidebar(true);
    }} className='md:hidden'>
        <i className="text-[#F9FAFB] text-2xl cursor-pointer ri-menu-line"></i>
    </div>
  )
}

export default Hamburger