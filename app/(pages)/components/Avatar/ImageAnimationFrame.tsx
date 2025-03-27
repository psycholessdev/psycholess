"use client"
import * as motion from "motion/react-client"
import React, { useRef } from "react"

interface IImageAnimationFrame {
    children: React.ReactNode
}

const ImageAnimationFrame: React.FC<IImageAnimationFrame> = ({ children }) => {
    const constraintsRef = useRef<HTMLDivElement | null>(null)

    return (
        <motion.div
            ref={constraintsRef}>
            <motion.div
                drag
                dragConstraints={constraintsRef}
                dragElastic={0.05}
                whileTap={{ scale: 0.9 }}
            >
                {children}
            </motion.div>
        </motion.div>
    )
}
export default ImageAnimationFrame
