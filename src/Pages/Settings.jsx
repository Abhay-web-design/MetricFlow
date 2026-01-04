import React, { useState } from 'react'
import Option from '../components/logic/Option';

const Settings = () => {
  const [BtnToggle, setBtnToggle] = useState("right-0");
  const [BgColor,setBgColor]= useState("#5381e5");
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
     <div className='flex flex-col lg:flex-row gap-6'>
        {/* theme settings  */}
      <div className='py-2 px-4 rounded-lg border border-[#1F2937]  bg-[#111827] max-w-fit'>
      <p className='text-xl text-[#F9FAFB] font-medium border-b'>Theme</p>
       <div className=' mt-4 flex items-center gap-48'>
        <span className='text-[#F9FAFB] font-medium text-xl'>Dark</span>
       <div className=' relative w-15 h-8 rounded-3xl bg-blue-500'>
        <p className=' absolute right-0 w-8 h-full rounded-4xl bg-white'></p>
       </div>
      </div>

     </div>

     {/* Analytic settings  */}
      <div className=' max-w-fit rounded-lg border border-[#1F2937]  bg-[#111827] p-4 flex flex-col gap-5'>
             <p className='text-xl text-[#F9FAFB] font-medium border-b'>Analytics Defaults</p>
            <div className='flex items-center gap-20'>
              <span className='text-[#F9FAFB] font-medium text-xl'>Default Data Range:</span>
        <div className='text-lg py-2 px-4 rounded-lg  border border-[#1F2937]  bg-[#111827]'>
        <select className='text-[#F9FAFB] bg-[#111827] rounded-lg focus:ring-none focus:outline-none pr-11' name="Data Range">
         {obj.data1.map((e)=>{
            return <Option value={e.value} text={e.text} />
          })}
        </select>
        </div>
            </div>
            <div className='flex items-center gap-29'>
                <span className='text-[#F9FAFB] font-medium text-xl'>Default Events:</span>
            <div className='text-lg py-2 px-4 rounded-lg border border-[#1F2937]  bg-[#111827]'>
            <select className='text-[#F9FAFB] bg-[#111827] rounded-lg focus:ring-none focus:outline-none pr-11' name="Events">
             {obj.data2.map((e)=>{
            return <Option value={e.value} text={e.text} />
          })}
            </select>
            </div>
            </div>
      </div>
     

     {/* Dashboard Settings  */}
     <div className='max-w-fit rounded-lg border border-[#1F2937]  bg-[#111827] p-4'>
      <p className='text-xl text-[#F9FAFB] font-medium border-b'>Dashboard Prefrences</p>
      <div className=' mt-4 flex items-center gap-48'>
        <span className='text-[#F9FAFB] font-medium text-xl'>Display Growth Percentage</span>
       <div className=' relative w-15 h-8 rounded-3xl bg-blue-500'>
        <p className=' absolute right-0 w-8 h-full rounded-4xl bg-white'></p>
       </div>
      </div>
     </div>
      </div>
 {/* notification settings  */}
       <div className='max-w-fit rounded-lg border border-[#1F2937]  bg-[#111827] p-4'>
      <p className='text-xl text-[#F9FAFB] font-medium border-b'>Notification</p>
      <div className=' mt-4 flex items-center gap-48'>
        <span className='text-[#F9FAFB] font-medium text-xl'>Notify monthly Summary Data</span>
       <div onClick={()=>{
        if(BtnToggle === "right-0"){
          setBtnToggle(" ")
          setBgColor("#13213f")
        }
        else{
          setBtnToggle("right-0")
          setBgColor("#5381e5")
        }
       }} className={`relative w-15 h-8 rounded-3xl bg-[${BgColor}]`}>
        <p className={`absolute ${BtnToggle} w-8 h-full rounded-4xl bg-white`}></p>
       </div>
      </div>
     </div>

   </div>

  )
}

export default Settings