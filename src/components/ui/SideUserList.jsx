import { useState } from "react"

const SideUserList = ({data}) => {
  const [color, setcolor] = useState(data.status)
  return (
       <div className='grid grid-cols-2 mt-2 items-center text-lg text-white font-medium border-b border-gray-500 py-2'>
           <div className='flex items-center gap-3'>
        <img className='w-15 h-15 rounded-4xl' src={`${data.avatar}`} alt="User's image" />
        <p>{data.name}</p>
    </div>
         <p className={` ${(color === "Active")?"bg-[#22C55E]":"bg-[#EF4444]"} rounded-lg py-1 px-2 w-25`}>{data.status}</p>
         </div>
  )
}

export default SideUserList