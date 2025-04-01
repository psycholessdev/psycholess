import React from 'react'
import Image from "next/image"
import * as motion from "motion/react-client"

const AnimeSketch = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.99 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: 'easeOut' }}
            className="absolute sm:left-0 -left-5 lg:-bottom-15 md:-bottom-10 -bottom-8 lg:w-[490px] md:w-[360px] sm:w-[310px] w-[240px] lg:h-[490px] md:h-[360px] sm:h-[310px] h-[240px]">
            <Image
                src="/images/sketch_effect.png"
                fill
                sizes="(max-width: 640px) 250px, (max-width: 768px) 330px, (max-width: 1024px) 360px, 490px"
                alt="Anime sketch"
                className="drag-none select-none opacity-15"
            />
        </motion.div>
    )
}
export default AnimeSketch
