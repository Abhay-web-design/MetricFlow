import React from 'react'

const Card = () => {
  return (
      <div className=' min-w-70 px-7 py-2  flex  gap-4 flex-col border border-[#1F2937]  bg-[#111827] rounded-lg'>
        <p className='text-[#9CA3AF] text-2xl font-medium'>Total Users</p>
        <p className='text-[#F9FAFB] text-3xl font-bold'>1258</p>
        <p className='text-xl font-medium text-[#22C55E]'><i className="ri-arrow-up-fill"></i>24.5%</p>
        {/* <p className='text-xl font-medium text-[#EF4444]'><i className="ri-arrow-up-fill"></i>24.5%</p> */}
      </div>
  )
}

export default Card