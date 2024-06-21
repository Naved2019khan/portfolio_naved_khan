import React from 'react'
import { socialMedia } from '@/data'
import { cn } from '@/utils/cn'


const SocialContact = ({ className, iconClassName }: { className?: string, iconClassName?: string }) => {
    return (
        <div className={`flex  items-center md:gap-3 gap-5' ${className}`}>
            {/* <div className= {cn('flex items-center md:gap-3 gap-6',className)}> */}
            {socialMedia.map((profile, idx) => (
                <a href={profile.link} key={profile.id} className={cn("relative flex h-12  w-full  items-center justify-center  overflow-hidden rounded-lg  p-[1px] focus:outline-none  backdrop-filter backdrop-blur-3xl md:mx-0 mx-2", iconClassName)}>
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg px-5 gap-2 bg-slate-950 text-sm font-medium text-white backdrop-blur-3xl`}>
                        <img src={profile.img} width={20} height={20} className={iconClassName} alt={String(profile.id)} />
                    </span>
                </a>

            ))}
        </div>
    )
}

export default SocialContact