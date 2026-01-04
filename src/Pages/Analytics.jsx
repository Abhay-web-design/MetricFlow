import React from 'react'
import LineChart from '../components/ui/LineChart'

import SelectOption from '../components/ui/SelectOption'
import GraphCard from '../components/logic/GraphCard'

const Analytics = () => {
    const obj = {title:["Feature Usage","Retention Rate"]}
  return (
    <div className='p-8 flex flex-col gap-7'>
      <h2 className='text-[#F9FAFB] text-3xl font-medium' >Analytics</h2>
      <SelectOption />
       <div className=' border border-[#1F2937]  bg-[#111827]rounded-lg p-5 w-full '>
        <p className='text-2xl text-[#F9FAFB] font-medium'>Daily User Logged In </p>
      <LineChart />
      </div>
      <div className='flex items-center justify-between'>
       {obj.title.map((e)=>{
        return <GraphCard title={e} />
       })}
      </div>

    </div>
  )
}

export default Analytics