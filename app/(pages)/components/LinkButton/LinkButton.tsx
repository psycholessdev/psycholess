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
            className="flex items-center bg-[#4F772D] px-[20px] py-[10px] rounded-2xl cursor-pointer outline-[#B0FE76] hover:outline active:opacity-85">
            <Image
                className="mr-[8px] select-none drag-none"
                src={icon}
                width={32}
                height={32}
                alt="tg icon" />
            <div className="font-ubuntu text-white text-xl">{label}</div>
            <Image
                className="ml-[8px] select-none drag-none"
                src="/icons/open_in_new.svg"
                width={14}
                height={14}
                alt="open in new icon" />
        </Link>
    )
}
