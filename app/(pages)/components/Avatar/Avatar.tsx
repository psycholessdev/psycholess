import React from 'react'
import Image from "next/image"
import DragAnimation from "./DragAnimation"
import MeImage from "./MeImage"

export default function Avatar() {
    return (
        <div
            className="md:px-[50px] px-[25px] py-[50px] overflow-visible relative z-10">
            <div className="absolute -top-[75px] -right-[85px] lg:w-[610px] md:w-[520px] sm:w-[410px] w-[340px] lg:h-[610px] md:h-[520px] sm:h-[410px] h-[340px] bg-[radial-gradient(circle,rgba(176,254,118,1)_0%,rgba(176,254,118,0.29735644257703087)_10%,rgba(37,36,39,0)_70%)]" />
            <div className="lg:w-[433px] md:w-[300px] w-[170px] lg:h-[553px] md:h-[420px] h-[290px] absolute top-0 right-0">
                <Image
                    className="select-none drag-none"
                    src="/images/bkg-purple-circle.svg"
                    fill
                    sizes="(max-width: 768px) 170px, (max-width: 1024px) 300px, 433px"
                    alt="Circle background"
                />
            </div>
            <div className="lg:w-[350px] md:w-[280px] sm:w-[200px] w-[150px] lg:h-[350px] md:h-[280px] sm:h-[200px] h-[150px] bg-white flex justify-center items-center rounded-full relative">
                <DragAnimation>
                    <MeImage />
                </DragAnimation>
            </div>
        </div>
    )
}
