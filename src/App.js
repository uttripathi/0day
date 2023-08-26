import React from 'react'
import Navbar from './components/Navbar'
import Homepg from './screens/Homepg'

const App = () => {
  return (
    <div className='bg-black  text-white  '>
    <div className='border-x-2 border-[#00FFFF] mx-10  '>
      <Navbar/>
      <Homepg/>
    </div>
    </div>
  )
}

export default App
