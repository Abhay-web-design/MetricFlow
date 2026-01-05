import React from 'react'

const UsersLists = () => {
  return (
    <>
      <div className=" border-b border-[#1F2937] py-2 flex justify-between  gap-2">
        <div className="flex items-center gap-3">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6"
            alt=""
          />
          <div>
            <p className="text-[#F9FAFB] font-medium">Admin</p>
            <p className="text-sm text-[#9CA3AF] truncate">
              amit@gmail.com
            </p>
          </div>
        </div>
        <div className='sm:flex items-center gap-5'>
          <span className="inline-flex rounded-lg text-[#F9FAFB] bg-[#22C55E] px-4 py-2 text-md font-medium">
            Active
          </span>
          <p className=" mt-4 text-sm text-[#9CA3AF]">
            10 minutes ago
          </p>
          </div>
      </div>
         </>
  )
}

export default UsersLists 