"use client"
import * as motion from "motion/react-client"
import React, { useRef } from "react"

interface IDragAnimation {
    children: React.ReactNode
}

const DragAnimation: React.FC<IDragAnimation> = ({ children }) => {
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
export default DragAnimation
