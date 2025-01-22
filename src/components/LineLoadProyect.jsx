import React, { useEffect, useRef, useState } from 'react'
import { motion, useSpring, useScroll, useTransform } from "framer-motion"

const LineLoadProyect = ({scrollProyect}) => {

  
  const sTransform = useTransform(scrollProyect, [1, 0], [0, 1151]);

  const scaleY = useSpring(sTransform, {
    stiffness: 500,
    damping: 50,
    // restDelta: 0.001,
})
  

  return (
        <div className='line'>
            <motion.div 
              className='line-load'
              style={{
                zIndex: 100,
                backgroundColor: 'red',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                originY: 0,
                scaleY 
              }} 
            />
        </div>
  )
}

export default LineLoadProyect