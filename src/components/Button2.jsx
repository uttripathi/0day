import React, { useState } from 'react'
import resourcesData from '../constants/resourcesData'
import ResourcesWrapper from './ResourcesWrapper'


const Button2 = (props) => {
  const [dialog,setDialog] = useState(false)
  return (
    <div className='sm:border-[2px] sm:border-[#2FBAE9] sm:text-[#2FBAE9] rounded-full px-3 h-full'>
    <a href={props.link} onClick={()=>{props.withDialog&&setDialog(true)}} className=' hover:cursor-pointer'>
      {props.title}
      <div className='w-[900px] h-[] bg-white absolute left-1/3'>
      </div>
    </a>
      <div  className={` ${dialog?"block":"hidden"} w-[80vw] h-[20rem] sm:h-[30rem] bg-blue-950 absolute z-10 left-[-4.5rem] sm:left-[10vw] top-[10vh]`}>
        <div className='hover:cursor-pointer text-2xl px-4' onClick={()=>{setDialog(false)}}>
          x
        </div>
        <div className='sm:px-32 px-4 py-8'>
          <h4 className='text-xl'>CONTENTS</h4>
          {
            resourcesData.map((resource,index)=>(
              <ResourcesWrapper key={index} seq={resource.seq} title={resource.title} link={resource.link}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Button2
