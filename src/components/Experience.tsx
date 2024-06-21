import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorder'

export const Experience = () => {
    return (
        <div className='py-20 flex flex-col items-center' id="experience">
            <h1 className='heading'>
                Recent
                <span className='text-purple'> Experience</span>
            </h1>
            <div className='w-full md:w-[85vw]   mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10 items-center '>
                {workExperience.map((card) => (
                    <Button borderRadius='1.75rem'
                        duration={Math.floor(Math.random() * 10000) + 10000 }
                        className='flex-1 text-white-100 border-neutral-200  dark:border-slate-800 ' key={card.id}>
                        <div className='flex lg:flex-row flex-col lg:items-center px-3  py-6 md:p-5 lg:p-10 gap-2'>
                            <img src={card.thumbnail} alt={card.thumbnail} className='object-cover lg:max-w-32 md:w-20 w-16' />
                            <div className='lg:ms-2'>
                                <h1 className='text-start text-xl md:text-2xl font-bold'>{card.title}</h1>
                                <p className='text-start text-white-100 mt-3 h-10 font-semibold '>{card.desc}</p>
                            </div>
                        </div>
                    </Button>
                ))}
            </div>
        </div>
    )
}
