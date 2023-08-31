import React from 'react'

const ResourcesWrapper = (props) => {
  return (
    <div className='flex justify-between mt-6'>
        <div className='flex'>
            <h6>{props.seq}. </h6>
            <h3>{props.title}</h3>
        </div>
            <a className='border-[1px] border-[#2fbae9] px-4 py-1' href={props.link}>Open</a>
    </div>
  )
}

export default ResourcesWrapper
