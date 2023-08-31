import React from 'react'
import Button3 from './Button3'

const Wrapper = (props) => {
  return (
    <div className='p-4 w-[288px] h-[288px] bg-[#1F4A58] flex flex-col justify-between  mx-8 my-8 px-4'>
      <div>
          <div>{props.title}</div>
          <div>{props.des}</div>
      </div>
        <div className=''>
          <div className=' flex justify-end items-end'>
          <Button3 details={props.details} withDialog title="see more"/>   
          </div>
        </div>
      
    </div>
  )
}

export default Wrapper
