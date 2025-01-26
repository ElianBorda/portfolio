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
                I am a FullStack Developer with experience in web development, I have knowledge in technologies such as React, Node.js, Express, MongoDB, among others. I am passionate about programming and I am always looking to learn new technologies and improve my skills.
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
          
          
          
          {/* <div className='base-body' ref={ref}>
              <motion.div className='base-content'>
                
                <div className='content-tech'>
                  <h1>Tecnologias que trabajo</h1>
                  <Carrousel/>
                </div>
                <Proyects scrollProyect={scrollYProgress}/>
                <motion.div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "black",
                    zIndex: -1,
                    pointerEvents: "none", 
                    opacity: backgroundOpacity,
                  }}
                />
              </motion.div>
          </div>         */}
      </div>
    </>
  )
}

export default HomePage