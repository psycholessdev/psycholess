"use client"
import Image from "next/image"

const MeImage = () => {
    return (
        <div
            className="relative overflow-hidden lg:w-[325px] md:w-[255px] sm:w-[175px] w-[135px] lg:h-[325px] md:h-[255px] sm:h-[175px] h-[135px] hover:cursor-grab active:cursor-grabbing">
            <Image
                className="rounded-full select-none drag-none"
                src="/images/avatar.jpg"
                fill
                sizes="(max-width: 640px) 135px, (max-width: 768px) 175px, (max-width: 1024px) 255px, 325px"
                alt="Avatar"
                onContextMenu={(event) => event.preventDefault()}
            />
        </div>
    )
}
export default MeImage
