"use client"
import React, { useEffect, useState } from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import SocialContact from './ui/SocialContact'
import { Options } from 'react-lottie'
import animationData from '@/data/Confetti.json'
import dynamic from 'next/dynamic'

const Hero = () => {
  const [copied,setCopied] = useState(true)
  const [reload,setReload] = useState(false)
  const defaultOptions : Options = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const LottieComponent = dynamic(() => import('./ui/LottieAnimation'), { ssr: false })

  useEffect(()=>{
    console.log(copied)
    setCopied(false)
  },[copied])

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false)
    }, 4000);
  };
  return (
    <div className='h-screen '>
      <div className=' absolute top-20 z-[1000] right-4 lg:block hidden '>
        <SocialContact className='  flex-col ' iconClassName='size-16' />
      </div>

      <Spotlight className='-top-40 -left-40 md:-left-32 md:-top-20 h-screen' fill='white' />
      <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
      <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.0 3] bg-grid-black/[0.2]  flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      
<div className='flex justify-center h-full  relative z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <h2 className='uppercase tracking-widest text-xs text-blue-100 max-w-80'>Portfolio build with Next.js</h2>
          <TextGenerateEffect
            className='text-center text-[40px] md:text-5xl lg:text-6xl  '
            words='Transforming Concepts into Seamless User Experiences'
          />
          <p className='text-center tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>Hi,I&apos;am <span className="text-purple font-semibold">Naved Khan</span>,  a Software Developer at Agicent </p>
          <a className='relative' href="/Navedweb.pdf" download={"/Navedweb.pdf" } target="_blank" rel="noopener noreferrer">
          <div className="absolute -bottom-5 -right-0 ">
            <LottieComponent options={defaultOptions} />
          </div>
            <MagicButton
            title="Download Resume"
            icon={<FaLocationArrow />}
            position={"right"}
            handleClick={handleCopy}
          /></a>
        </div>
      </div>
    </div>
  )
}

export default Hero