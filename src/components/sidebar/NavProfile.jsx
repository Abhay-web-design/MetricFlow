import React, { useContext } from 'react'
import { AppData } from '../../context/AppDatacontext'

const NavProfile = () => {
  const Data = useContext(AppData);
  
  return (
    <div onClick={()=>{(Data.profile)?Data.setprofile(false):Data.setprofile(true)}} className='flex items-center gap-3'>
        <img className='w-10 h-10 rounded-4xl object-center object-cover' src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <p className='text-lg font-light text-white cursor-pointer'>Admin <i className="ri-arrow-down-s-line"></i></p>
    </div>
  )
}

export default NavProfile