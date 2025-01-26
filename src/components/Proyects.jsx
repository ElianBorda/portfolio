import React, { useEffect, useRef, useState } from 'react'
import { motion, useSpring, useScroll, useTransform } from "motion/react"
import LineLoadProyect from './LineLoadProyect'
import SimpleProyectAtom from './SimpleProyectAtom';
import { desc, video } from 'motion/react-client';
import BGAnimateCircle from './BGAnimateCircle';
import useLayerFollow from '../hooks/useLayerFollow';
import proyects from '../data/proyects.json'

const Proyects = ({ refC }) => {
    // const refC = useRef(null);
    
    const { transformSpring } = useLayerFollow(refC, ["start end", "end start"], [0, 1], [0, -800])

  return (
        <>
            <motion.div 
                className='base-content padding-default proyects' 
                style={{
                    // position: 'absolute',
                    y: transformSpring
                }}
                ref={refC}>
                <h1 className='gradient-text'>Proyectos</h1>
                <div className='flex'>
                    <div className='proyect-content'>
                        {
                            proyects.proyLeft.map((proyect, index) => {
                                return (
                                    <>
                                        <SimpleProyectAtom
                                            key={index}
                                            proy={proyect}
                                        />
                                        <SimpleProyectAtom
                                            key={index}
                                            proy={proyect}
                                            style='void'
                                        />

                                    </>
                                )
                            })
                        }
                    </div>
                    <LineLoadProyect refC={refC}/>
                    <div className='proyect-content'>
                        {
                            proyects.proyRight.map((proyect, index) => {
                                return (
                                    <>
                                        <SimpleProyectAtom
                                            key={index}
                                            proy={proyect}
                                            style='void'
                                        />
                                        <SimpleProyectAtom
                                            key={index}
                                            proy={proyect}
                                        />                                        
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </motion.div>
            <BGAnimateCircle refC={ refC }/>
        </>
    )
}

export default Proyects