"use client"
import React, {useState} from 'react'
import Image from "next/image"
import AnimatedToast from "@/app/ui/components/AnimatedToast"
import {AnimatePresence} from "motion/react"

interface IFact {
    icon: string
    title: string
    children?: React.ReactNode
}

const Fact: React.FC<IFact> = ({ icon, title, children }) => {
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
            className="flex items-center relative cursor-help">
            <AnimatePresence initial={false}>
                {children && hovered ? (
                    <AnimatedToast>
                        <div className="w-full flex justify-between items-center mb-2">
                            <Image
                                src={icon}
                                alt="icon"
                                className="select-none drag-none"
                                width={26}
                                height={26}
                            />
                            <button
                                onClick={handleMouseLeave}
                                className="rounded-xl text-red-600 hover:bg-[#2E2E2E] px-2 select-none cursor-pointer">Dismiss</button>
                        </div>
                        {children}
                    </AnimatedToast>
                ) : null}
            </AnimatePresence>
            <Image
                src={icon}
                alt="icon"
                className="select-none drag-none"
                width={20}
                height={20}
            />
            <div className="font-ubuntu text-sm text-[#88888C] mx-[6px] select-none">{title}</div>
            {children ? <Image
                src="icons/more-info.svg"
                alt="more info icon"
                className="select-none drag-none"
                width={15}
                height={15}
            /> : null}
        </div>
    )
}
export default Fact
