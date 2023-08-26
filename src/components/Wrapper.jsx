import React from 'react'
import Button3 from './Button3'

const Wrapper = (props) => {
  return (
    <div className='w-[288px] h-[288px] bg-[#1F4A58]  mx-8 my-8 relative px-4'>
          <div>{props.title}</div>
          <div>{props.des}</div>
        <div className='absolute bottom-0 right-8 h-12'>
          <div className=''>

        <Button3 withDialog title="see more"/>   
          </div>
        </div>
      
    </div>
  )
}

export default Wrapper
