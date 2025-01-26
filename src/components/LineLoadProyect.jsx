import React, { useEffect, useRef, useState } from 'react'
import { motion, useSpring, useScroll, useTransform, transform } from "framer-motion"
import useLayerFollow from '../hooks/useLayerFollow';

const LineLoadProyect = ({refC}) => {

  const { transformSpring } = useLayerFollow(
    refC, 
    ["start end", "end start"], 
    [0.2, 0.579], 
    [0, 800], 
    { stiffness: 1000, damping: 100 })
  
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
                scaleY: transformSpring, 
              }} 
            />
        </div>
  )
}

export default LineLoadProyect