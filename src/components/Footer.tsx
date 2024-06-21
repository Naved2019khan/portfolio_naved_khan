import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import SocialContact from './ui/SocialContact'


const Footer = () => {
  return (
   <footer className='w-full pt-20 pb-10' id='contact'>
    <div className='flex flex-col items-center'>
        <h1 className='heading lg:max-w-[45vw]  '>Ready to Take <span className=' text-purple'>Your</span> Digital Presence to next Level</h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:naved2019khan@gmail.com">
            <MagicButton 
            title="Let's get in touch" 
            icon={<FaLocationArrow />}
            position={"right"}
            />
        </a>
         </div>
         <div className='flex  mt-16 md:flex-row flex-col justify-end items-center'>
            {/* <p className='md:text-base text-sm  md:font-normal font-light'>Copyright @ 2024 Naved</p> */}
         <SocialContact />
         </div>
   </footer>
  )
}

export default Footer