import React from 'react'

const SideUserList = () => {
  return (
       <div className='grid grid-cols-2 mt-2 items-center text-lg text-white font-medium border-b border-gray-500 py-2'>
           <div className='flex items-center gap-3'>
        <img className='w-15 h-15 rounded-4xl bg-amber-600' src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <p>Admin</p>
    </div>
         <p className='bg-green-500 rounded-lg py-1 px-2 w-25'>Active</p>
         </div>
  )
}

export default SideUserList