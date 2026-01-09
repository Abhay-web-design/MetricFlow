import React, { useContext } from 'react'
import { AppData } from '../context/AppDatacontext'

const ProfileLayout = () => {
  const Data = useContext(AppData)
  return (
    <div className={`absolute top-0 right-0 ${(Data.profile)?"":"hidden"}  w-60 h-55 rounded-lg p-5 text-[#F9FAFB] border border-[#1F2937]  bg-[#111827]`}>
            <p className='text-xl text-center'>Personal Info</p>
         <p>Name: <span className='text-[#9CA3AF]'>Admin</span></p>
        <p>Email: <span className='text-[#9CA3AF]'>Admin@gmail.com</span></p>
     
          <p>Role: <span className='text-[#9CA3AF]'>Analyst</span></p>
        <p>Company: <span className='text-[#9CA3AF]'>Taskpro</span></p>
     
    
        <button className='py-2 mt-6 px-4 rounded-lg bg-[#2d2dd5] text-lg cursor-pointer'>Log Out</button>
      
    </div>
  )
}

export default ProfileLayout