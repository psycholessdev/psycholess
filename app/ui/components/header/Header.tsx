import Image from "next/image"
import favicon from '@/public/favicon.png'
import Link from "next/link"

export default function Header() {
    return (
        <header className="w-full h-[93px] bg-[#1A1A1A] box-border px-[50px] flex content-between items-center fixed top-0 z-100">
            <div>
                <Link className="flex items-center gap-[22px] decoration-none drag-none" href="/">
                    <Image src={favicon}
                           alt="Psycholess logo"
                           width={36}
                           height={53}
                           className="select-none drag-none"
                    />
                    <div className="font-inknut text-2xl leading-[100%] text-white decoration-none select-none">
                        psycho<span className="text-[#B0FE76]">less</span>
                    </div>
                </Link>
            </div>
        </header>
    )
}
