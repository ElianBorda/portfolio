import React, { useEffect, useRef, useState } from 'react'
import { motion, useSpring, useScroll, useTransform } from "motion/react"
import LineLoadProyect from './LineLoadProyect'
import SimpleProyectAtom from './SimpleProyectAtom';
import { desc, video } from 'motion/react-client';

const Proyects = ({scrollProyect}) => {

    const [jsonProyects, setJsonProyects] = useState([
        {
            title: 'MOTOR DE BUSQUEDA DE INMOBILIARIAS',
            desc: 'Desarrollo de una plataforma especializada en la búsqueda de propiedades para venta y alquiler. El proyecto centraliza información actualizada de múltiples fuentes, ofreciendo a los usuarios una experiencia unificada y eficiente para explorar propiedades inmobiliarias. Incluye funcionalidades como filtros avanzados de búsqueda, integración con APIs REST, y un diseño responsivo orientado a mejorar la experiencia del usuario en cualquier dispositivo.',
            lang: ['React', 'Node', 'MongoDB'],
            visual: {
                img: [
                    'https://i.ibb.co/7Y0rWf4/1.png',
                    'https://i.ibb.co/7Y0rWf4/2.png',
                    'https://i.ibb.co/7Y0rWf4/3.png'
                ],
                video: [
                    'https://www.youtube.com/watch?v=7e90gBu4pas',
                ]
            },
            date: '2021',
            simpleDesc: 'Plataforma especializada en la búsqueda de propiedades para venta y alquiler.',
        },
        {
            title: 'MOTOR DE BUSQUEDA DE INMOBILIARIAS',
            desc: 'Desarrollo de una plataforma especializada en la búsqueda de propiedades para venta y alquiler. El proyecto centraliza información actualizada de múltiples fuentes, ofreciendo a los usuarios una experiencia unificada y eficiente para explorar propiedades inmobiliarias. Incluye funcionalidades como filtros avanzados de búsqueda, integración con APIs REST, y un diseño responsivo orientado a mejorar la experiencia del usuario en cualquier dispositivo.',
            lang: ['React', 'Node', 'MongoDB'],
            visual: {
                img: [
                    'https://i.ibb.co/7Y0rWf4/1.png',
                    'https://i.ibb.co/7Y0rWf4/2.png',
                    'https://i.ibb.co/7Y0rWf4/3.png'
                ],
                video: [
                    'https://www.youtube.com/watch?v=7e90gBu4pas',
                ]
            },
            date: '2021',
            simpleDesc: 'Plataforma especializada en la búsqueda de propiedades para venta y alquiler.',
        },
        {
            title: 'MOTOR DE BUSQUEDA DE INMOBILIARIAS',
            desc: 'Desarrollo de una plataforma especializada en la búsqueda de propiedades para venta y alquiler. El proyecto centraliza información actualizada de múltiples fuentes, ofreciendo a los usuarios una experiencia unificada y eficiente para explorar propiedades inmobiliarias. Incluye funcionalidades como filtros avanzados de búsqueda, integración con APIs REST, y un diseño responsivo orientado a mejorar la experiencia del usuario en cualquier dispositivo.',
            lang: ['React', 'Node', 'MongoDB'],
            visual: {
                img: [
                    'https://i.ibb.co/7Y0rWf4/1.png',
                    'https://i.ibb.co/7Y0rWf4/2.png',
                    'https://i.ibb.co/7Y0rWf4/3.png'
                ],
                video: [
                    'https://www.youtube.com/watch?v=7e90gBu4pas',
                ]
            },
            date: '2021',
            simpleDesc: 'Plataforma especializada en la búsqueda de propiedades para venta y alquiler.',
        },
        {
            title: 'MOTOR DE BUSQUEDA DE INMOBILIARIAS',
            desc: 'Desarrollo de una plataforma especializada en la búsqueda de propiedades para venta y alquiler. El proyecto centraliza información actualizada de múltiples fuentes, ofreciendo a los usuarios una experiencia unificada y eficiente para explorar propiedades inmobiliarias. Incluye funcionalidades como filtros avanzados de búsqueda, integración con APIs REST, y un diseño responsivo orientado a mejorar la experiencia del usuario en cualquier dispositivo.',
            lang: ['React', 'Node', 'MongoDB'],
            visual: {
                img: [
                    'https://i.ibb.co/7Y0rWf4/1.png',
                    'https://i.ibb.co/7Y0rWf4/2.png',
                    'https://i.ibb.co/7Y0rWf4/3.png'
                ],
                video: [
                    'https://www.youtube.com/watch?v=7e90gBu4pas',
                ]
            },
            date: '2021',
            simpleDesc: 'Plataforma especializada en la búsqueda de propiedades para venta y alquiler.',
        },
    ])
    

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({target: ref, offset: ["end end", "start start"]});
    const transform = useTransform(scrollProyect, [0, 1], [2700, 0]);
    const y = useSpring(transform, {
        stiffness: 1000,
        damping: 100,
        restDelta: 0.001,
    })

  return (
        <motion.div 
            className='base-content padding-default proyects' 
            style={{
                position: 'absolute',
                y
            }}
            ref={ref}>
            <h1>Proyectos</h1>
            <div className='flex'>
                <div className='proyect-content'>
                    {
                        jsonProyects.map((proyect, index) => {
                            return (
                                <SimpleProyectAtom
                                    key={index}
                                    proy={proyect}
                                />
                            )
                        })
                    }
                </div>
                <LineLoadProyect scrollProyect={scrollYProgress}/>
                <div className='proyect-content'>
                    {
                        jsonProyects.map((proyect, index) => {
                            return (
                                <SimpleProyectAtom
                                    key={index}
                                    proy={proyect}
                                />
                            )
                        })
                    }
                </div>
            </div>
            
        </motion.div>
    )
}

export default Proyects