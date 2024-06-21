"use client"
import { HoverEffect } from "./ui/CardHoverEffect";

export function TechStack() {
    return (
            <div className=" max-w-7xl relative flex-col mx-auto mt-10 py-32 " id="tech">
            <h1 className=' heading pb-10 '>
            <span className='text-purple'> Technical</span> Expertise
            </h1>
                <HoverEffect items={projects} />
            </div>
    );
}
export const projects = [
    {
        title: "ReactJs",
        img:
            "/react.webp",
        
    },
    {
        title: "NextJs",
        img: "/nextjs.jpeg",
        
    },
    {
        title: "JavaScript",
        img: "/js.jpg",
        
    },
    {
        title: "Redux",
        img: "/redux.jpg",
        
    },
    {
        title: "HTML/CSS",
        img: "/html.png",
        
    },
    {
        title: "NodeJS",
        img:
            "/node.png",
        
    },
    {
        title: "MongoDB",
        img:
            "/mongo.png",
        
    },
    {
        title: "MySQL",
        img:
            "/sql.png",
        
    },
    {
        title: "Tailwind",
        img:
            "/tailwind.png",
    },

   
];
