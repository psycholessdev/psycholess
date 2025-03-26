"use client"
import { AnimatePresence } from "motion/react"
import React, { useState } from "react"
import Image, { StaticImageData } from "next/image"
import AnimatedToast from "@/app/(pages)/components/AnimatedToast";

interface ISkill {
    image: StaticImageData | string
    name: string
    officialSite: string
}

const Skill: React.FC<ISkill> = ({ image, name, children, officialSite }) => {
    const [hovered, setHovered] = useState(false)

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative bg-[#1A1A1A] px-[16px] py-[10px] border-1 border-[#333333] rounded-full flex justify-center items-center cursor-help hover:border-[#595959]">
            <AnimatePresence initial={false}>
                {hovered ? (
                    <AnimatedToast>
                        <Image
                            src={image}
                            alt={`${name} icon`}
                            width={26}
                            height={26}
                            className="mb-2 rounded-lg select-none drag-none"
                        />
                        {children}
                        <br />
                        <a
                            className="text-[#4F772D] hover:underline"
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
            <div className="font-ubuntu text-lg text-white ml-[6px] box-border select-none">{name}</div>
        </div>
    )
}

export default Skill
