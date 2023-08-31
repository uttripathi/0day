import React from 'react'

const Wrapper3 = () => {
  return (
    <div className='flex justify-start my-10 items-center justify-center sm:justify-start lg:justify-end  flex-wrap'>
      <div className='border-2 border-[#00FFFF] mx-8 h-[150px] w-[150px] self-start lg:hidden flex justify-center items-center'>
      <img src="images/bug.png" alt="" />
      </div>
      <div className='text-[#2FBAE9] text-center sm:text-start text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px]'>
      BIG BOUNTY HUNTER 
      <h3 className='text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] xl:text-[32px] lg:w-[60vw] mt-4 sm:mt-0'>
        bug bounty hunters are hackers who are paid to find vulnerabilities in the software 
        of companies . in this hackers are paid money according to the bug found.
      </h3>
      </div>
      <div className='border-2 border-[#00FFFF] mx-8 h-[150px] w-[150px] hidden lg:flex justify-center items-center'>
      <img src="images/bug.png" alt="" />
      </div>
    </div>
  )
}

export default Wrapper3
