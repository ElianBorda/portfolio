import React, { useEffect, useRef, useState } from 'react'
import { motion, useSpring, useScroll, useTransform } from "motion/react"
import Introduction from './Introduction'
import BGAnimate from './BGAnimate'
import Carrousel from './Carrousel'
import elianImg from '../imgs/elian.webp'
import Proyects from './Proyects'
import Presentation from './Presentation'
import BlocksFollow from './BlocksFollow'
import BGAnimateCircle from './BGAnimateCircle'
import Layer from './Layer'

const HomePage = () => {

  const ref = useRef(null)
  const ref2 = useRef(null);

  const { scrollYProgress } = useScroll({
    container: ref
  })

  
  const yTransform = useTransform(scrollYProgress, [0, 1], [0, 0])
  const backgroundOpacity = useTransform(scrollYProgress, [0, 800], [0, 800])
  const rotateTransform = useTransform(scrollYProgress, [0, 1], [-40, 40])

  const scaleX = useSpring(scrollYProgress, {
      stiffness: 1000,
      damping: 100,
      restDelta: 0.001,
  })

  const rotate = useSpring(rotateTransform, {
      stiffness: 200,
      damping: 50,
      restDelta: 0.001,
  })

  return (
    <>
      <Introduction />
      <div className='base-content base-page'>
          <BGAnimate />
          <Presentation /> 
          <div className='base-content padding-default about'>
            <div className='about-info'>
              <h2>About me</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem maxime corrupti molestias dolor, illo in deleniti consequatur similique esse! In culpa laudantium voluptas quasi nostrum deleniti aspernatur odit quae praesentium.
              </p>  
            </div>
            <div className='img-perfil'>
              <motion.img 
                src={elianImg} 
                alt="img-perfil" 
                style={{
                  y: yTransform,
                  rotate,
                }}/>
                <BlocksFollow scroll={scrollYProgress}/>
            </div>
          </div>
          <div className='content-tech'>
              <h1>Tecnologias que trabajo</h1>
              <Carrousel/>
          </div>
          <Proyects refC={ref2}/>
          
          <Layer refC={ref2}>
            
            <h1> HOLA COMO ESTAS</h1>
            <h1> HOLA COMO ESTAS</h1>
            <h1> HOLA COMO ESTAS</h1>
            <h1> HOLA COMO ESTAS</h1>
            <h1> HOLA COMO ESTAS</h1>
            <h1> HOLA COMO ESTAS</h1>
            <h1> HOLA COMO ESTAS</h1>
            <h1> HOLA COMO ESTAS</h1>
            <h1> HOLA COMO ESTAS</h1>
            <h1> HOLA COMO ESTAS</h1>
            <h1> HOLA COMO ESTAS</h1>
            <h1> HOLA COMO ESTAS</h1>
            
            
          </Layer>
      </div>
    </>
  )
}

export default HomePage