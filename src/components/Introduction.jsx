import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import React, { useEffect, useState } from 'react'

const Introduction = () => {

    const [visible, setVisible] = useState(true)
    const [visibleBack, setVisibleBack] = useState(true)
  
  
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);
  
  
    useEffect(() => {
  
      const control = animate(count, 100, { duration: 7 });
  
      
  
      const back = setTimeout(() => {
        setVisibleBack(false)
      }, 8500)
  
      const timer = setTimeout(() => {
        setVisible(false)
      }, 10000)
  
      return () => {
        clearTimeout(timer)
        clearTimeout(back)
        control.stop
      }
  
    }, [])

  return (
        <div className={`${visible ? 'transition' : 'none'}`}>
          <div className={`${visibleBack ? 'background-init' : 'none'}`}>
            <motion.h1
              animate={{ 
                scale: [1, 2.5, 0],
                rotate: [-75, 100, -45],
               }}
              transition={{ 
                duration: 7,
                ease: "easeInOut",
               }}
              style={{
                zIndex:0.5
              }}>{rounded}</motion.h1>
          </div>
          <div className='blocks b1'></div>
          <div className='blocks b2'></div>
        </div>
    )
}

export default Introduction