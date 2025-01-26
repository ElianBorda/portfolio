import React from 'react'
import { motion, useSpring, useScroll, useTransform } from "motion/react"
import '../bg2.css'
import useLayerFollow from '../hooks/useLayerFollow'

const BGAnimateCircle = ({ refC }) => {

    const { transform } = useLayerFollow(refC, ["end end", "start start"], [0.9, 1], [1, 0])
        

  return (
    <motion.div className="background-2"
        style={{
            opacity: transform
        }}>
        
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </motion.div>
  )
}

export default BGAnimateCircle