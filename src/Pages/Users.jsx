import React from 'react'
import ShowUsers from '../components/ui/ShowUsers'
const Users = () => {
  return (
    <div className='p-8 flex flex-col gap-7'>
      <h2 className='text-3xl text-[#F9FAFB] font-medium' > Users</h2>
      <div className='border border-[#1F2937]  bg-[#111827] py-2 px-4 rounded-lg flex items-center gap-2'>
        <span><i className="ri-search-line text-lg text-gray-400"></i></span>
        <input className='w-full focus:outline-none text-lg placeholder:text-lg border-r border-gray-500 placeholder:text-[#9CA3AF]' placeholder='Search Users' type="text" />
           <span><i className="ri-filter-2-fill text-lg cursor-pointer text-gray-400"></i></span>
      </div>
      
      <div className='rounded-lg border border-[#1F2937]  bg-[#111827] p-5 '>
        <ShowUsers />
      </div>

    </div>
  )
}

export default Users