import React, { useState } from 'react'


const Button = (props) => {
  const [dialog,setDialog] = useState(false)
  return (
    <div className='sm:border-[2px] sm:border-[#2FBAE9] sm:text-[#2FBAE9] rounded-full px-3 h-full'>
    <a href={props.link} onClick={()=>{props.withDialog&&setDialog(true)}} className=' hover:cursor-pointer'>
      {props.title}
      <div className='w-[900px] h-[] bg-white absolute left-1/3'>
      </div>
    </a>
      <div  className={` ${dialog?"block":"hidden"} w-[80vw] h-[20rem] sm:h-[30rem] bg-blue-950 absolute left-[-4.5rem] sm:left-[10vw] top-[10vh]`}>
        <div className='hover:cursor-pointer text-2xl px-4' onClick={()=>{setDialog(false)}}>
          x
        </div>
        <div className='sm:p-16 p-8 text-lg sm:text-2xl'>
          <h5>
          Lead: Kshitin Bhushan
          </h5>
          <h5>Co Lead : Govind</h5>
          <h5>WEB MANAGEMENT TEAM :</h5>
          <h5>Utkarsh</h5>
          <h5>Harshit</h5>
          <h5>Content Development :</h5>
          <h5>Sakirti</h5>
          <h5>Veeraj</h5>
        </div>
      </div>
    </div>
  )
}

export default Button
