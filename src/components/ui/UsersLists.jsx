import React, { useState } from 'react'

const UsersLists = ({data}) => {
  const [color, setcolor] = useState(data.status)  
  return (
    <>
      <div className=" border-b border-[#1F2937] py-2 flex justify-between  gap-2">
        <div className="flex items-center gap-3">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src={`${data.avatar}`}
            alt="User's image"
          />
          <div>
            <p className="text-[#F9FAFB] font-medium">{data.name}</p>
            <p className="text-sm text-[#9CA3AF] truncate">
             {data.email}
            </p>
          </div>
        </div>
        <div className='sm:flex items-center gap-5'>
          <span className={`inline-flex rounded-lg text-[#F9FAFB] ${(color === "Active")?"bg-[#22C55E]":"bg-[#EF4444]"}  px-4 py-2 text-md font-medium`}>
            {data.status}
          </span>
          <p className=" mt-4 text-sm text-[#9CA3AF]">
            {data.lastActive}
          </p>
          </div>
      </div>
         </>
  )
}

export default UsersLists 