import React, { useEffect, useRef, useState } from 'react'
import { motion, useSpring, useScroll, useTransform } from "motion/react"
import Introduction from './Introduction'
import BGAnimate from './BGAnimate'
import Carrousel from './Carrousel'
import elianImg from '../imgs/elian.webp'
import BlockAnimate from './BlockAnimate'

const HomePage = () => {

  const ref = useRef(null)

  const { scrollYProgress } = useScroll({container: ref})

  const yTransform = useTransform(scrollYProgress, [0, 1], [600, -700])
  const backgroundOpacity = useTransform(scrollYProgress, [0, 800], [0, 800])
  const rotateTransform = useTransform(scrollYProgress, [0, 1], [-100, 100])

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
      <motion.div
                id="scroll-indicator"
                style={{
                    scaleX,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 5,
                    originX: 0,
                    backgroundColor: "#ff0088",
                }}
            />
      <div className='base-page'>
          <Introduction />
          <BGAnimate />
          <div className='base-nav'></div>
          <div className='base-body' ref={ref}>
              <div className='base-content'>
                <div className='presentation'>
                    <div>
                      <motion.h2
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 9.5, duration: 1}}
                      >
                        Hi, i'am
                      </motion.h2>
                      <h1>
                        Elian Borda
                      </h1>
                      <motion.p
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 9.5, duration: 1}}>
                          FullStack Developer
                        </motion.p>
                    </div> 
                </div>
                <div className='about'>
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
                      <BlockAnimate scroll={scrollYProgress} initY={800} endY={-400} initR={-50} endR={100}/>
                      <BlockAnimate scroll={scrollYProgress} initY={800} endY={-400} initR={-50} endR={100}/>
                      <BlockAnimate scroll={scrollYProgress} initY={800} endY={-400} initR={-50} endR={100}/>
                      <BlockAnimate scroll={scrollYProgress} initY={800} endY={-400} initR={-50} endR={100}/>
                      <BlockAnimate scroll={scrollYProgress} initY={800} endY={-400} initR={-50} endR={100}/>
                      <BlockAnimate scroll={scrollYProgress} initY={800} endY={-400} initR={-50} endR={100}/>
                  </div>
                </div>
                  
                <div className='content-tech'>
                  <Carrousel/>
                </div>
                <div className='fullscreen'>

                </div>
                <motion.div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "black",
                    zIndex: -1,
                    pointerEvents: "none", // Permitir interactuar con el contenido subyacente
                    opacity: backgroundOpacity,
                  }}
                />
              </div>
          </div>        
      </div>
    </>
  )
}

export default HomePage