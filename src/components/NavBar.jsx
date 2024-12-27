import { motion } from 'motion/react'
import React from 'react'

const NavBar = () => {
  return (
    <motion.nav className='nav'>
        <ul>
          <li>Proyectos</li>
          <li>Experiencia</li>
          <li>Contacto</li>
        </ul>
    </motion.nav>
    )
}

export default NavBar