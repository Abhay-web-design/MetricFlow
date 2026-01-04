import React from 'react'
import UsersLists from './UsersLists'

const ShowUsers = () => {
    
  return (
   <div className='grid mt-2'>
         <div className='grid grid-cols-4 border-b text-[#9CA3AF] text-2xl font-medium items-center'>
          <p>Name</p>
         <p>Email</p>
         <p>Status</p>
         <p>Last Active</p>
         </div>
        <UsersLists />
        <UsersLists />
        <UsersLists />
        <UsersLists />
        <UsersLists />
        <UsersLists />
        <UsersLists />
        <UsersLists />
        <UsersLists />
        <UsersLists />
        <UsersLists />
        <UsersLists />
        <UsersLists />
        <UsersLists />
         
        </div>
  )
}

export default ShowUsers