import React, { useContext, useState } from 'react'
import UsersLists from '../components/ui/UsersLists'
import { AppData } from '../context/AppDatacontext'
const Users = () => {
  const Data = useContext(AppData)


 function Userfilter(e){
Data.setinput(e.target.value);
 }
  
  return (
    <div className='p-8 flex flex-col gap-7'>
      <h2 className='text-3xl text-[#F9FAFB] font-medium' > Users</h2>
      <div className='border border-[#1F2937]  bg-[#111827] py-2 px-4 rounded-lg flex items-center gap-2'>
        <span><i className="ri-search-line text-lg text-gray-400"></i></span>
        <input onChange={(e)=>{
          Userfilter(e);
        }} 
        value={Data.input}
        className='w-full text-[#F9FAFB] focus:outline-none text-lg placeholder:text-lg border-r border-gray-500 placeholder:text-[#9CA3AF]' placeholder='Search Users' type="text" />
           <span><i className="ri-filter-2-fill text-lg cursor-pointer text-gray-400"></i></span>
      </div>
      
      <div className='rounded-lg border border-[#1F2937]  bg-[#111827] p-4 sm:p-5 overflow-x-auto '>
    {Data.Userdata.map((e)=>{
     return <UsersLists key={e.id} data={e} />
    })}
      </div>

    </div>
  )
}

export default Users