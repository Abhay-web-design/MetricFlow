import React from 'react'
import Option from '../logic/Option'

const SelectOption = () => {
const obj ={ title:"Data Range:",
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
        {value:"Task Completed",text:"Task Completed"}
]
}
   
  return (
    <div className='flex items-center justify-around'>
        <div className='text-lg py-2 px-4 rounded-lg  border border-[#1F2937]  bg-[#111827]'>
          <span className='text-[#F9FAFB]'>{obj.title}</span>
        <select className='text-[#F9FAFB] bg-[#111827] rounded-lg focus:ring-none focus:outline-none pr-11' name="Data Range">
          {obj.data1.map((e)=>{
            return <Option value={e.value} text={e.text} />
          })}
        </select>
        </div>
        <div className='text-lg py-2 px-4 rounded-lg  border border-[#1F2937]  bg-[#111827]'>
           <span className='text-[#F9FAFB]'>Events:</span>
         <select className='text-[#F9FAFB] bg-[#111827] rounded-lg focus:ring-none focus:outline-none pr-85' name="Events">
          {obj.data2.map((e)=>{
            return <Option value={e.value} text={e.text} />
          })}
        </select>
        </div>
      </div>
  )
}

export default SelectOption