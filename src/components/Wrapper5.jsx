import React from 'react'

const Wrapper5 = ({end,title,des,imgno}) => {
  return (
    <div className={`flex justify-${end?'end':'start'}`}>

    <div className={`border-2 border-[#00FFFF] mx-8 lg:h-[291px] overflow-hidden w-[60rem] justify-${end?'end':'start'} flex lg:flex-row flex-col `}>
      <div className='flex flex-col sm:flex-row justify-between'>

      <div className='sm:mx-10'>
        <div className='text-[24px] text-center sm:text-start sm:text-[36px] text-[#2FBAE9] my-8 '>
         {title}
        </div>
         <h3 className='text-white lg:text-[18px] text-center sm:text-start sm:text-[16px] mx-3 sm:mx-0 text-[16px] lg:h-[150px] lg:w-[400px] mb-6 lg:mb-0'>
            {des}
         </h3>
      </div>
      <div className='w-full lg:w-auto'>
       <img src={`images/img${imgno}.png`} className='w-full'/> 
      </div>
      </div>
    </div>
        </div>
  )
}

export default Wrapper5
