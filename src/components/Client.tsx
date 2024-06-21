import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { companies, testimonials } from '@/data'

const Client = () => {
    return (
        <div className='py-20' id="testimonials">
            <h1 className='heading'>
                Kind words from{' '}
                <span className='text-purple'>satisfied clients</span>
            </h1>
            <div className='flex flex-col items-center justify-between max-lg:mt-10'>
                <div className='h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased relative overflow-hidden '>
                    <InfiniteMovingCards
                    items={testimonials}
                    direction='right'
                    speed='slow'
                    />
                </div>

                
                <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 '>
                    {companies.map(({id,name,img,nameImg})=>(
                   <div key={id} className='flex md:max-w-60 max-w-32 gap-2'>
                    <img src={img} 
                    className='md:w-10 w-5'
                    alt={img} />

                    <img src={nameImg} 
                    className='md:w-24 w-20'
                    alt={nameImg} />
                   </div> 
                ))}</div>
            </div>
        </div>
    )
}

export default Client 