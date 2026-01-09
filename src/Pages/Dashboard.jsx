import React, { useContext } from 'react'
import Card from '../components/ui/Card'
import LineChart from '../components/ui/LineChart'
import SideUsersShow from '../components/ui/SideUsersShow'
import { AppData } from '../context/AppDatacontext'

const Dashboard = () => {
 const Data =  useContext(AppData);
 
 const {labels, data} = Data.Data.dashboard.userGrowth

 
 
  return (
    <div className='p-5 flex flex-col gap-7'>
      <h2 className='text-[#F9FAFB] text-3xl font-medium'>Dashboard <span className='font-light'>Overview</span></h2>
     <div className='w-full grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-between'>
      {Data.Data.dashboard.cards.map((e,index)=>{
        return <Card key={index} obj ={e} /> //giving the key as index is not a good way...
      })}
      </div>
      <div className='grid md:grid-cols-2 gap-8 '>
        <div className='h-fit border border-[#1F2937] bg-[#111827] rounded-lg p-5 w-full '>
        <p className='text-2xl font-medium text-[#F9FAFB]'>User Growth</p>
        <LineChart labels = {labels} data = {data} />
      </div>
      <div className='rounded-lg  border border-[#1F2937]  bg-[#111827] p-5 w-full'>
        <p className='text-2xl text-[#F9FAFB] font-medium border-b border-gray-500' >Recent Users</p>
        <SideUsersShow />
      </div>
      </div>
    </div>
  )
}

export default Dashboard