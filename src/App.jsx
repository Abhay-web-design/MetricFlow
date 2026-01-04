import React from 'react'
import Navbar from './components/navbar/Navbar'
import DashboardLayout from './Layouts/DashboardLayout'

const App = () => {
  return (
    <div className='relative bg-[#0B1220] w-full min-h-screen'>
        <Navbar />
        <DashboardLayout />
    </div>
  )
}

export default App