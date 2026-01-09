import React, { useContext } from 'react'
import { AppData } from '../../context/AppDatacontext'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const Data = useContext(AppData);
    
  return (
    <div className={`absolute top-0 left-0 ${(Data.sidebar)?"":"hidden"} flex flex-col py-2 px-5 bg-[#0B1220] w-full z-50`}>
        <div className='flex items-center justify-end '><i onClick={()=>{
            Data.setsidebar(false);
        }} className="ri-close-large-line cursor-pointer text-2xl text-[#F9FAFB]"></i></div>
        <Link to={'/'} className='text-[#F9FAFB] text-2xl font-light active:border-b-4 border-blue-600 active:text-blue-600 py-4 ' >Dashboard</Link>
       <Link to={'/Analytics'} className='text-[#F9FAFB] text-2xl font-light active:border-b-4 border-blue-600 active:text-blue-600 py-4 ' >Analytics</Link>
       <Link to={'/Users'} className='text-[#F9FAFB] text-2xl font-light active:border-b-4 border-blue-600 active:text-blue-600 py-4 ' >Users</Link>
       <Link to={'/Settings'} className='text-[#F9FAFB] text-2xl font-light active:border-b-4 border-blue-600 active:text-blue-600 py-4 ' >Settings</Link>
    </div>
  )
}

export default Sidebar