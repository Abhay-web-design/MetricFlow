
import SideUserList from './SideUserList'

const SideUsersShow = () => {
  return (
   <div className='grid mt-2'>
         <div className='grid grid-cols-2 text-[#9CA3AF] text-lg font-medium items-center'>
          <p>Name</p>
         <p>Status</p>
         </div>
        <SideUserList />
        <SideUserList />
        <SideUserList />
        <SideUserList />
        <SideUserList />
        <SideUserList />
         
        </div>
  )
}

export default SideUsersShow