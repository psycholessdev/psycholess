import React from 'react'
import {motion} from "motion/react"

const AnimatedToast: React.FC = ({ children }) => {
    return (
        <motion.div
            initial={{opacity: 0, scale: 0.8, y: 30}}
            animate={{opacity: 1, scale: 1, y: 0}}
            exit={{opacity: 0, scale: 0.8, y: 30}}
            transition={{ duration: 0.15 }}
            className="font-ubuntu absolute bottom-[60px] h-auto[50px] w-[300px] p-3 rounded-lg bg-[#1A1A1A] border-[1px] border-[#333333] text-white cursor-auto"
            key="box"
        >{children}</motion.div>
    )
}
export default AnimatedToast
