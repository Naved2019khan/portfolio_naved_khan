"use client"
import {  frameworks } from "@/data";
import { HoverEffect } from "./ui/CardHoverEffect";

export function TechStack() {
    return (
        <div>
            <div className=" max-w-5xl relative flex-col mx-auto py-10 md:py-20 " id="tech">
                <h1 className=' heading pb-10 md:pb-20 '>
                    Technical
                    <span className='text-purple'> Expertise</span>
                </h1>
                <HoverEffect items={projects} />
            </div >

            <div className="mt-20 w-full">

                <h1 className=' heading pb-0  md:pb-10 '>
                    Framework &
                    <span className='text-purple'> Library </span>
                </h1>

                {/* grid-flow-row grid-cols-2 place-items-center place-content-center  lg:grid-rows-2 lg:grid-flow-col */}
                <div className="grid grid-flow-row  grid-cols-2 place-content-center md:flex md:flex-wrap items-center   mt-10  gap-12  max-lg:mt-10">
                    {frameworks.map((framework) => (
                        <div className="flex justify-end" key={framework.id}>
                            <div className="flex items-center w-48 md:w-full max-w-60  gap-2">
                                <img
                                    src={framework.img}
                                    alt={framework.name}
                                    className="md:w-10 w-10 rounded-full object-cover  "
                                />
                                <h1 className="ml-2 font-semibold text-sm text-nowrap text-white-200 tracking-widest">{framework.name}</h1>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
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
