import React, { useRef, useState } from 'react'
import Herotxt from '../components/Herotxt'
import Text1 from '../components/Text1'
import Text2 from '../components/Text2'
import Button1 from '../components/Button1'
import Wrapper from '../components/Wrapper'
import Text3 from '../components/Text3'
import Wrapper2 from '../components/Wrapper2'
import Wrapper3 from '../components/Wrapper3'
import Wrapper4 from '../components/Wrapper4'
import Text4 from '../components/Text4'
import Wrapper5 from '../components/Wrapper5'
import Wrapper6 from '../components/Wrapper6'
import Wrapper7 from '../components/Wrapper7'
import Wrapper8 from '../components/Wrapper8'
import Wrapper9 from '../components/Wrapper9'
import AnnouncementData from '../constants/AnnouncementData'
import Button from '../components/Button'
import Button2 from '../components/Button2'

const Homepg = () => {
  const contactusRef = useRef()
  const [showMenu,setShowMenu] = useState(false)
  const handleClick = ()=>{
    contactusRef.current?.scrollIntoView({behavior:'smooth'})
  }
  const [dialog,setDialog] = useState(false)
  return (
    <div  className=''>
          <div className='flex items-center justify-between pt-4 h-[3rem] mx-4' >
        
        <img src='images/logo.png' className=''/>
        <div className=''>
        <div className={`w-[10rem] flex flex-col gap-3 p-2 bg-slate-600 absolute ${showMenu?"block":"hidden"}`}>
          {/* <h3 onClick={()=>{setDialog(true)}}>Resources</h3> */}
          <Button2 withDialog title="resources"/>
          <div onClick={handleClick}>
         <Button title="contact us"/>
        </div>
        <Button withDialog title="commitee"/>
        <Button link={`https://docs.google.com/forms/d/e/1FAIpQLSc6pY9b8cL2f8puGBwOZ0Ka7jJEHzoRGMDAVUATdSbm7o0OGw/viewform`} title="registration"/> 
           </div>

        </div>
        <div className=' gap-2 hidden lg:flex'>
        <Button2 withDialog title="resources"/>
        <div onClick={handleClick}>
         <Button title="contact us"/>
        </div>
        <Button withDialog title="commitee"/>
        <Button link={`https://docs.google.com/forms/d/e/1FAIpQLSc6pY9b8cL2f8puGBwOZ0Ka7jJEHzoRGMDAVUATdSbm7o0OGw/viewform`} title="registration"/> 
        </div>
        <div className='flex gap-4'>
          <a href="https://instagram.com/0day_nitj?igshid=MzRlODBiNWFlZA==">
          <img src='images/Instagram circle (1).png'/>
          </a>
          <img src='images/Twitter (1).png'/>
          <img src='images/GitHub (1).png'/>
        </div>
        <img onClick={()=>{setShowMenu(!showMenu)}} className='lg:hidden block h-[3rem]' src="images/menu.png" alt="" />
      </div>
      <div onClick={()=>{setShowMenu(false)}} className=''>

        <Herotxt/>
        <Text1/>
        <Text2/>
        <Button1/>
      </div>
        <div className=' flex justify-between flex-wrap'>
          {
            AnnouncementData.map((announcement,index)=>(
              <Wrapper details={announcement.details} title={announcement.title} des={announcement.des}/>
            ))
          }

        </div>
        <Text3/>
        <h3 className='px-12 text-[16px] text-white  sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[36px] font3 mb-16'>
        Explore and learn many in demand skills and activitys which are in 
demand in hacking and web security industry
        </h3>
        
        <Wrapper2/>
        <Wrapper3/>
        <Wrapper4/>
        <Text4/>
        <div className='flex flex-col gap-10'>
        <Wrapper5 imgno={1} title={'HACKATHON'} des={'The objective is to bring bright minds together and surround them by industry experts to come up with a solution to an identified problem within 24 hours of intensive work.'}/>
        <Wrapper5 imgno={2} end title={'SEMINARS'} des="Hacking and network security experts and working proffesional are invited to guide students about latest advancement in industry and work place manners"/>
        <Wrapper5 imgno={3} title={'LECTURES'} des={'Students are taught latest hacking techniques and technology by committee .Student are provided resources and guided to get placement in cybersecurity sector'}/>
        </div>
        <h3 className='text-[48px] text-[#2FBAE9] mx-8 mt-16 mb-12'>CHOOSE YOUR SIDE</h3>
        <h3 className='text-white text-[24px] mx-8 max-w-[60rem]'>Clubs provided teams to chose a team based on there interest and dive deep into the technology of there interest</h3>
        <div className='flex justify-center mt-16'>
        <img src="images/redvsblue.png" alt="" />
               
        </div>
        <div className='flex justify-center lg:flex-row flex-col'>
        <Wrapper6/>
        <h3 className='text-[60px] text-center flex justify-center text-white my-12'>
         VS
        </h3>
        <Wrapper7/>


        </div>
      
<div ref={contactusRef} className='flex lg:flex-row flex-col  gap-16 items-center justify-center'>
  <Wrapper8/>
  <Wrapper9/>

</div>
        
    </div>
  )
}

export default Homepg
