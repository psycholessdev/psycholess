import React from 'react'
import circle from './bkg-purple-circle.svg'
import Image from "next/image"
import ImageAnimationFrame from "./ImageAnimationFrame"

export default function Avatar() {
    return (
        <div className="px-[50px] py-[50px] overflow-visible relative z-10">
            <div className="absolute -top-[75px] -right-[85px] lg:w-[610px] md:w-[520px] sm:w-[440px] w-[470px] lg:h-[610px] md:h-[520px] sm:h-[440px] h-[470px] bg-[radial-gradient(circle,rgba(176,254,118,1)_0%,rgba(176,254,118,0.29735644257703087)_10%,rgba(37,36,39,0)_70%)]" />
            <div className="lg:w-[433px] md:w-[300px] w-[270px] lg:h-[553px] md:h-[420px] h-[390px] absolute top-0 right-0">
                <Image
                    className="select-none drag-none"
                    src={circle}
                    fill
                    sizes="(max-width: 768px) 270px, (max-width: 1024px) 300px, 433px"
                    alt="Circle background"
                />
            </div>
            <div className="lg:w-[350px] md:w-[280px] sm:w-[200px] w-[230px] lg:h-[350px] md:h-[280px] sm:h-[200px] h-[230px] bg-white flex justify-center items-center rounded-full relative">
                <ImageAnimationFrame>
                    <div className="relative overflow-hidden lg:w-[325px] md:w-[255px] sm:w-[175px] w-[205px] lg:h-[325px] md:h-[255px] sm:h-[175px] h-[205px] hover:cursor-grab active:cursor-grabbing">
                        <Image
                            className="rounded-full select-none drag-none"
                            src="/images/avatar.jpg"
                            fill
                            sizes="(max-width: 640px) 205px, (max-width: 768px) 175px, (max-width: 1024px) 255px, 325px"
                            alt="Avatar"
                        />
                    </div>
                </ImageAnimationFrame>
            </div>
        </div>
    )
}
