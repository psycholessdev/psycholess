import React from 'react'
import circle from './bkg-purple-circle.svg'
import Image from "next/image"
import ImageAnimationFrame from "./ImageAnimationFrame"

export default function Avatar() {
    return (
        <div className="px-[50px] py-[50px] overflow-visible relative z-10">
            <div className="absolute -top-[75px] -right-[85px] w-[610px] h-[610px] bg-[radial-gradient(circle,rgba(176,254,118,1)_0%,rgba(176,254,118,0.29735644257703087)_10%,rgba(37,36,39,0)_70%)]" />
            <Image
                className="absolute top-0 select-none drag-none"
                src={circle}
                width="433"
                height="553"
                alt="Circle background"
            />
            <div className="w-[350px] h-[350px] bg-white flex justify-center items-center rounded-full relative">
                <ImageAnimationFrame>
                    <Image
                        className="rounded-full hover:cursor-grab active:cursor-grabbing select-none drag-none"
                        src="/images/avatar.jpg"
                        width="325"
                        height="325"
                        alt="Avatar"
                    />
                </ImageAnimationFrame>
            </div>
        </div>
    )
}
