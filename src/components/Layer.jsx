import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView, useScroll, useSpring, useTransform } from "motion/react"
import useLayerFollow from '../hooks/useLayerFollow'

const Layer = ({ children, refC }) => {
  const [isView, setIsView] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref)
  useEffect(() => {
    setIsView(inView)
  }, [inView])
    // const { scrollYProgress } = useScroll({ refC, offset: ["end end", "start start"] }); 
    // const transform = useTransform(scrollYProgress, [0, 0.285], [0,-800]);
    // const transformSpring = useSpring(transform, { stiffness: 2000, damping: 100 })

  return (
    <>
    <div className='base-content op0 transform-elem layer-content' ref={ref}>
      { children }
    </div>
    <motion.div className={`base-content obscure layer-content ${isView ? 'fixed-elem' : 'relative-elem'}`}>
        
        { children }
    
    </motion.div>
    </>
  )
}

export default Layer