import React, { useState } from 'react'
import Option from '../components/logic/Option';
import ToggleBtn from '../components/ui/ToggleBtn';

const Settings = () => {
  
  const obj ={
      data1:[{value:7,text:"Last 7 Days"},
        {value:30,text:"Last 30 Days"},
        {value:3,text:"Last 3 Months"},
        {value:6,text:"Last 6 Months"},
        {value:12,text:"Last 12 Months"}
],
data2:[
    {value:"User Signed Up",text:"User Signed Up"},
        {value:"User Logged In",text:"User Logged In"},
        {value:"Active Users",text:"Active Users"},
        {value:"Task Created",text:"Task Created"},
        {value:"Task Completed",text:"Task Completed"}]
  }
  return (
  <div className='px-8 py-6 flex flex-col gap-5'>
      <h2 className='text-3xl text-[#F9FAFB] font-medium py-2 border-b' >Settings</h2>
     <div className='grid lg:grid-cols-2 gap-6'>
        {/* theme settings  */}
      <div className='py-2 px-4 rounded-lg border border-[#1F2937]  bg-[#111827] w-full'>
      <p className='text-xl text-[#F9FAFB] font-medium border-b'>Theme</p>
       <div className=' mt-4 flex items-center justify-between gap-3'>
        <span className='text-[#F9FAFB] font-medium text-md'>Dark</span>
       <ToggleBtn />
      </div>

     </div>

     {/* Analytic settings  */}
      <div className=' w-full rounded-lg border border-[#1F2937]  bg-[#111827] p-4 flex flex-col gap-5'>
             <p className='text-xl text-[#F9FAFB] font-medium border-b'>Analytics Defaults</p>
            <div className='w-full flex items-center justify-between'>
              <span className='text-[#F9FAFB] font-medium text-md'>Default Data Range:</span>
        <div className='text-md py-2 px-4 rounded-lg  border border-[#1F2937]  bg-[#111827]'>
        <select className='text-[#F9FAFB] bg-[#111827] rounded-lg focus:ring-none focus:outline-none' name="Data Range">
         {obj.data1.map((e,index)=>{
            return <Option key={index} value={e.value} text={e.text} />// giving key as index is not a good way..
          })}
        </select>
        </div>
            </div>
            <div className='w-full flex items-center justify-between'>
                <span className='text-[#F9FAFB] font-medium text-md'>Default Events:</span>
            <div className='text-md py-2 px-4 rounded-lg border border-[#1F2937]  bg-[#111827]'>
            <select className='text-[#F9FAFB] bg-[#111827] rounded-lg focus:ring-none focus:outline-none' name="Events">
             {obj.data2.map((e,index)=>{
            return <Option key={index} value={e.value} text={e.text} />// giving key as index is not a good way..
          })}
            </select>
            </div>
            </div>
      </div>
     

     {/* Dashboard Settings  */}
     <div className='w-full rounded-lg border border-[#1F2937]  bg-[#111827] p-4'>
      <p className='text-xl text-[#F9FAFB] font-medium border-b'>Dashboard Prefrences</p>
      <div className=' mt-4 flex items-center justify-between gap-3'>
        <span className='text-[#F9FAFB] font-medium text-md'>Display Growth Percentage</span>
       <ToggleBtn />
      </div>
     </div>
     

     {/* notification settings  */}
       <div className='w-full rounded-lg border border-[#1F2937]  bg-[#111827] p-4'>
      <p className='text-xl text-[#F9FAFB] font-medium border-b'>Notification</p>
      <div className=' mt-4 flex items-center justify-between gap-3'>
        <span className='text-[#F9FAFB] font-medium text-md'>Notify monthly Summary Data</span>
      <ToggleBtn />
      </div>
     </div>


      </div>
 

   </div>

  )
}

export default Settings