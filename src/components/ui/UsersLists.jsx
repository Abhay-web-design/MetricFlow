import React from 'react'

const UsersLists = () => {
  return (
    <div className='grid grid-cols-4 mt-2 items-center text-lg text-[#F9FAFB] font-medium border-b border-gray-500 py-2'>
            <div className='flex items-center gap-3'>
            <img className='w-10 h-10 rounded-4xl object-center object-cover' src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <p className='text-lg font-light  cursor-pointer'>Admin</p>
           </div>
         <p>Amit@gmail.com</p>
         <p className='bg-[#22C55E] rounded-lg py-1 px-2 w-25'>Active</p>
         <p>10 minutes ago</p>
         </div>
  )
}

export default UsersLists