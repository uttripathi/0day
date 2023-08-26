import React from 'react'
import Button from './Button'

const Wrapper9 = () => {
  return (
    <div className=' bg-[#1F4A58]   '>
        <h2 className=' text-[36px] text-[#2FBAE9]  flex justify-center m-6'>
            CONTACT US
        </h2>
        <h2 className=' text-[20px] text-[#2FBAE9]  flex justify-center mx-14 my-4'>
        Got a question ? We’d love to hear from you. Send us a message and we’ll respond as soon as possible
        </h2>
        <h3 className='text-[20px] text-[#2FBAE9] m-8'>
         NAME
        </h3>
        <input className='w-[80%] h-[47px] mx-4' type="text" />
        <h3 className='text-[20px] text-[#2FBAE9] m-8'>
         EMAIL
        </h3>
        <input className=' w-[80%] h-[47px] mx-4' type="text" />
        <h3 className='text-[20px] text-[#2FBAE9] m-8'>
         MESSAGE
        </h3>
        <input className=' w-[80%] h-[121px] mx-4' type="text" />
        <div className='m-20 p-10 w-[200px]'>
      <Button title= 'submit'/>

        </div>
      
    </div>
  )
}

export default Wrapper9
