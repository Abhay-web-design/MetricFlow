import React from 'react'
import BarChart from '../ui/BarChart'

const GraphCard = ({title,graph}) => {
  const {labels,value} = graph;
  
  
  return (
    <div className='w-full border border-[#1F2937]  bg-[#111827] rounded-lg p-5  '>
        <p className='text-2xl text-[#F9FAFB] font-medium'>{title}</p>
      <BarChart label={labels} value={value} />
      </div>
  )
}

export default GraphCard