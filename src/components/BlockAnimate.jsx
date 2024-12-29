import React, { useEffect, useRef, useState } from 'react'
import { motion, useSpring, useScroll, useTransform } from "motion/react"

const BlockAnimate = ({scroll, initY, endY, initR, endR}) => {

    const yTransform = useTransform(scroll, [1, 0], [initY, endY])
    const rotateTransform = useTransform(scroll, [0, 1], [initR, endR])
    const y = useSpring(yTransform, {
        stiffness: 200,
        damping: 50,
        restDelta: 0.001,
    })
    const rotate = useSpring(rotateTransform, {
          stiffness: 200,
          damping: 50,
          restDelta: 0.001,
      })

  return (
        <motion.div
            className='circle'
            style={{
                y,
                rotate,
            }}
        />
  )
}

export default BlockAnimate