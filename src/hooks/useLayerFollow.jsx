import { useScroll, useSpring, useTransform } from 'motion/react'
import React from 'react'

const useLayerFollow = (target, offset = ["end end", "start start"], inputRange = [0, 1], outputRange = [0, -800], objSpring = { stiffness: 1000, damping: 100, restDelta: 0.001 }) => {

    const { scrollYProgress } = useScroll({ target, offset }); 
    const transform = useTransform(scrollYProgress, inputRange, outputRange);
    const transformSpring = useSpring(transform, objSpring)


    return (
        {
            progress: scrollYProgress,
            transform,
            transformSpring
        }
    )
}

export default useLayerFollow