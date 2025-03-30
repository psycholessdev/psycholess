import React, {useEffect, useRef, useState} from 'react'
import {motion} from "motion/react"

interface IAnimatedToast {
    children: React.ReactNode
}

const AnimatedToast: React.FC<IAnimatedToast> = ({ children }) => {
    const toastRef = useRef<HTMLDivElement | null>(null)
    const [left, setLeft] = useState(0)

    useEffect(() => {
        // preventing edge overflow
        if (toastRef.current) {
            const rect = toastRef.current!.getBoundingClientRect()
            const width = 300
            const viewportWidth = window.innerWidth
            let corrected = 0

            if (rect.x<0) {
                corrected = rect.x*-1
            }

            if ((rect.x+width-viewportWidth) >0) {
                corrected = (rect.x+width-viewportWidth)*-1
            }

            setLeft(corrected)
        }
    }, [])

    return (
        <motion.div
            ref={toastRef}
            initial={{opacity: 0, scale: 0.8, y: 30}}
            animate={{opacity: 1, scale: 1, y: 0}}
            exit={{opacity: 0, scale: 0.8, y: 30}}
            transition={{ duration: 0.15 }}
            className="font-ubuntu absolute bottom-[50px] h-auto w-[300px] p-3 rounded-lg bg-[#1A1A1A] border-[1px] border-[#333333] text-white cursor-auto z-100"
            key="box"
            style={{left}}
        >{children}</motion.div>
    )
}
export default AnimatedToast
