import React, { useEffect, useRef, useState } from 'react'
import { motion, useSpring, useScroll, useTransform } from "motion/react"

const Presentation = () => {
  return (
    <div className='presentation'>
        <div>
            <motion.h2
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 9.5, duration: 1}}
            >
            Hi, i'am
            </motion.h2>
            <h1>
            Elian Borda
            </h1>
            <motion.p
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 9.5, duration: 1}}>
                FullStack Developer
            </motion.p>
        </div> 
    </div>
  )
}

export default Presentation