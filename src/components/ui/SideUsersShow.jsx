
import { useContext } from 'react'
import SideUserList from './SideUserList'
import { AppData } from '../../context/AppDatacontext'

const SideUsersShow = () => {
  const Data = useContext(AppData)
  
  return (
   <div className='grid mt-2'>
         <div className='grid grid-cols-2 text-[#9CA3AF] text-lg font-medium items-center'>
          <p>Name</p>
         <p>Status</p>
         </div>
        {Data.Data.dashboard.recentUsers.map((e)=>{ 
          return <SideUserList key={e.id} data = {e} />
        })}
         
        </div>
  )
}

export default SideUsersShow