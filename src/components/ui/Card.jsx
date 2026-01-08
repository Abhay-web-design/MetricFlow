import React, { useState } from 'react'

const Card = ({obj}) => {
  const [Growth, setGrowth] = useState(obj.growth);
  return (
      <div className=' min-w-70 px-7 py-2  flex  gap-4 flex-col border border-[#1F2937]  bg-[#111827] rounded-lg'>
        <p className='text-[#9CA3AF] text-2xl font-medium'>{obj.title}</p>
        <p className='text-[#F9FAFB] text-3xl font-bold'>{obj.value}</p>
        <p className={`text-xl font-medium ${(Growth > 0)? "text-[#22C55E]" : "text-[#EF4444]" }`}><i className={`${(Growth > 0)? "ri-arrow-up-fill" : "ri-arrow-down-fill" }`}></i>{obj.growth}%</p>
      </div>
  )
}

export default Card