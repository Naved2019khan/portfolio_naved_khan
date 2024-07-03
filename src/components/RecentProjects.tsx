
import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'

const RecentProjects = () => {
  return (
    <div className='py-20' id="projects">
        <h1 className='heading'>
            A small selection{' '}
            <span className='text-purple'>recent projects</span>
        </h1>
        <div className='flex flex-wrap items-center gap-20 justify-center p-4 mt-10'>
        { projects.map(({id,title,des,img,iconLists,link})=>(
          
          <div className='lg:min-h-[30rem] h-[28rem] flex items-center justify-center md:w-[450px] w-[90vw]' key={id}>
            <PinContainer title={title} href={link} >
            <div className=' relative flex items-center justify-center sm:w-[450px] w-[80vw] overflow-hidden  mb-10'>
              <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162b]'>
              <img src="/bg.png" alt="bg-img" />
              </div>
              <img 
              src={img}
              alt={title}
              className='z-10 absolute w-[90%] max-h-[90%] rounded-md aspect-auto bottom-0 rotate-3'
              />
            </div>
            <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1 '>{title}</h1>
            <p className='lg:font-normal lg:text-xl font-light text-sm line-clamp-1'>{des}</p>
           
            <div className='flex items-center justify-between mt-7 mb-3 '>
              <div className='flex items-center'>
                {iconLists.map((icon,index)=>(
                  <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10  size-8 flex items-center justify-center'
                  style={{ transform : `translateX(-${5 * index * 2 }px)`}}
                  >
                    <img src={icon} alt={icon} className='p-2'/>
                  </div>
                ))}
              </div>
            </div>

            <div className='flex items-center justify-center'>
              <p  className='flex lg:text-xl text-sm text-purple'>Check Live Site </p>
              <FaLocationArrow className='ms-3' color='#CBACF9' />
            </div>
          </PinContainer>
          </div>
        ))}
        </div>
    </div>
  )
}

export default RecentProjects

{/* <div className='flex flex-wrap items-center gap-20 justify-center p-4 mt-10'>
        { projects.map(({id,title,des,img,iconLists,link})=>(
          
          <div className='lg:min-h-[30rem] h-[28rem] flex items-center justify-center md:w-[450px] w-[90vw] ' key={id}>
            <PinContainer title={link} href={link} >
            <div className=' relative flex items-center justify-center sm:w-[450px] w-[80vw] overflow-hidden h-[20vh] lg:h-[42vh] mb-10'>
              <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162b]'>
              <img src="/bg.png" alt="bg-img" />
              </div>
              <img 
              src={img}
              alt={title}
              className='z-10 absolute bottom-0'
              />
            </div>
            <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1 '>{title}</h1>
            <p className='lg:font-normal lg:text-xl font-light text-sm line-clamp-1'>{des}</p>
           
            <div className='flex items-center justify-between mt-7 mb-3 '>
              <div className='flex items-center'>
                {iconLists.map((icon,index)=>(
                  <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10  size-8 flex items-center justify-center'
                  style={{ transform : `translateX(-${5 * index * 2 }px)`}}
                  >
                    <img src={icon} alt={icon} className='p-2'/>
                  </div>
                ))}
              </div>
            </div>

            <div className='flex items-center justify-center'>
              <p className='flex lg:text-xl text-sm text-purple'>Check Live Site </p>
              <FaLocationArrow className='ms-3' color='#CBACF9' />
            </div>
          </PinContainer>
          </div>
        ))}
        </div> */}