"use client"
import { AnimatePresence } from "motion/react"
import React, { useState } from "react"
import Image, { StaticImageData } from "next/image"
import AnimatedToast from "@/app/ui/components/AnimatedToast"

interface ISkill {
    image: StaticImageData | string
    name: string
    officialSite: string
    children: React.ReactNode
}

const Skill: React.FC<ISkill> = ({ image, name, children, officialSite }) => {
    const [hovered, setHovered] = useState(false)

    const handleMouseEnter = () => {
        setHovered(true)
    }

    const handleMouseLeave = () => {
        setHovered(false)
    }

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative lg:px-[16px] px-[12px] lg:h-[50px] md:h-[40px] h-[40px] border-1 border-[#333333] rounded-full flex justify-center items-center cursor-help ${hovered ? 'border-[#595959]' : ''}`}>
            <AnimatePresence initial={false}>
                {hovered ? (
                    <AnimatedToast>
                        <div className="w-full flex justify-between items-center">
                            <Image
                                src={image}
                                alt={`${name} icon`}
                                width={26}
                                height={26}
                                className="mb-2 rounded-lg select-none drag-none"
                            />
                            <button
                                onClick={handleMouseLeave}
                                className="rounded-xl text-red-600 hover:bg-[#2E2E2E] px-2 select-none cursor-pointer">Dismiss</button>
                        </div>
                        {children}
                        <br />
                        <a
                            className="text-[#4F772D] hover:underline select-none"
                            href={officialSite}
                            target="_blank">Learn more</a>
                    </AnimatedToast>
                ) : null}
            </AnimatePresence>
            <Image
                src={image}
                alt={`${name} icon`}
                width={26}
                height={26}
                className="select-none drag-none"
            />
            <div className="font-ubuntu lg:text-lg md:text-base text-sm text-white ml-[6px] box-border select-none">{name}</div>
        </div>
    )
}

export default Skill
