import React, { useContext } from 'react'
import LineChart from '../components/ui/LineChart'

import SelectOption from '../components/ui/SelectOption'
import GraphCard from '../components/logic/GraphCard'
import { AppData } from '../context/AppDatacontext' 


const Analytics = () => {
  const Data = useContext(AppData)
    const {labels,data} = Data.analytics.dailyLogins;
    
  return (
    <div className='p-4 flex flex-col gap-7'>
      <h2 className='text-[#F9FAFB] text-3xl font-medium' >Analytics</h2>
      <SelectOption />
       <div className=' border border-[#1F2937]  bg-[#111827] rounded-lg p-5 w-full  '>
        <p className='text-2xl text-[#F9FAFB] font-medium'>Daily User Logged In </p>
      <LineChart labels = {labels} data = {data} />
      </div>
      <div className='grid gap-5 md:grid-cols-2'>
       {Data.analytics.usageGraph.map((e)=>{
        console.log(e);
        return <GraphCard title={e.title} graph={e.graph}/>
       })}
      </div>

    </div>
  )
}

export default Analytics