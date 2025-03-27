import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return (
        <header className="w-full lg:h-[93px] h-[66px] bg-[#1A1A1A] box-border lg:px-[50px] md:px-[40px] px-[30px] flex content-between items-center fixed top-0 z-100">
            <div>
                <Link className="flex items-center lg:gap-[22px] gap-[14px] decoration-none drag-none" href="/">
                    <div className="relative lg:w-[36px] w-[26px] lg:h-[53px] h-[43px]">
                        <Image src="/favicon.png"
                               alt="Psycholess logo"
                               fill
                               sizes="(max-width: 1024px) 26px, 36px"
                               className="select-none drag-none"
                        />
                    </div>
                    <div className="font-inknut lg:text-2xl text-lg leading-[100%] text-white decoration-none select-none">
                        psycho<span className="text-[#B0FE76]">less</span>
                    </div>
                </Link>
            </div>
        </header>
    )
}
