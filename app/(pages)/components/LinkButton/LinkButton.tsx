import React from 'react'
import Image from "next/image"
import Link from "next/link"

interface ILinkButton {
    href: string
    label: string
    icon: string
    newTab: boolean
}

export default function LinkButton({ href, icon, label, newTab}: ILinkButton) {
    return (
        <Link
            href={href}
            target={newTab ? "_blank" : undefined}
            className="flex items-center bg-[#B0FE76] lg:px-[20px] px-[12px] lg:py-[10px] py-[5px] rounded-2xl select-none cursor-pointer hover:opacity-80 active:opacity-60">
            <Image
                className="mr-[8px] select-none drag-none"
                src={icon}
                width={28}
                height={28}
                alt="tg icon" />
            <div className="font-ubuntu text-black lg:text-xl select-none">{label}</div>
            <Image
                className="ml-[8px] select-none drag-none"
                src="/icons/open_in_new.svg"
                width={14}
                height={14}
                alt="open in new icon" />
        </Link>
    )
}
