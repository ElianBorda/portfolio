import React, { useEffect, useRef, useState } from 'react'
import { motion, useSpring, useScroll, useTransform } from "motion/react"
import LineLoadProyect from './LineLoadProyect'

const Proyects = () => {
  return (
        <div className='fullscreen proyects'>
            <div></div>
            <LineLoadProyect />
            <div></div>
        </div>
    )
}

export default Proyects