import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./MovingBorder";
import { BackgroundGradientAnimation } from "./GradientBg";

export const HoverEffect = ({
  items,
  className,
  
}: {
  items: {
    title: string;
    img: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-2 md:grid-cols-2  lg:grid-cols-3 gap-0 md:gap-8  py-1 ",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative  group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.05 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.05, delay: 0.02 },
                }}
              />
            )}
          </AnimatePresence>
          <Card idx={idx} className="flex items-center justify-center" >
             

            <img className="object-cover  size-[100px] rounded-full  " src={item.img} alt={item.title} />
              
            <CardTitle className="text-center  tracking-wide leading-relaxed">{item.title}</CardTitle>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
  idx
}: {
  className?: string;
  children: React.ReactNode;
  idx : number
}) => {
  return (
   
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden  bg-slate-900/[0.8]  group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      {<BackgroundGradientAnimation /> } 
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>

  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
