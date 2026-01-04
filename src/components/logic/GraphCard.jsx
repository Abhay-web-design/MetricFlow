import React from 'react'
import BarChart from '../ui/BarChart'

const GraphCard = ({title}) => {
  
  return (
    <div className=' border border-[#1F2937]  bg-[#111827] rounded-lg p-5 w-[48%] '>
        <p className='text-2xl text-[#F9FAFB] font-medium'>{title}</p>
      <BarChart />
      </div>
  )
}

export default GraphCard