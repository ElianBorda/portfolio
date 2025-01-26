import React from 'react'
import { motion, useSpring, useScroll, useTransform } from "motion/react"



const SimpleProyectAtom = ({proy, style}) => {
  return (
        <motion.div 
            initial={initialProp}
            whileInView={whileInViewProp}
            transition={transitionProp}
            viewport={viewportProp}
            className={`simple-proyect ${style} gradient-text`}>
            <h2>{proy.title}</h2>
            <p className='desc-proy'>{proy.simpleDesc}</p>
            <div>{proy.lang.map((tec, index) => <span key={index}>{tec}</span>)}</div>
            <button className='default-btn-style border-primary-btn'>
                <span className='gradient-text'>Ver detalle</span>
            </button>
        </motion.div>
    )
}

const initialProp = {
    opacity: 0,
    x: -20
}

const transitionProp = {
    duration: 0.5,
    ease: 'easeInOut'
}

const whileInViewProp = {
    opacity: 1,
    x: 0
}

const viewportProp = {
    amount: 0.7,
    once: false
}

export default SimpleProyectAtom