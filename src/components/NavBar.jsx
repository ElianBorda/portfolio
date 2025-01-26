import { motion } from 'motion/react'
import React from 'react'

const NavBar = () => {
  return (
    <nav className='nav'>
        <ul>
          <li><button className='default-btn-style nav-button'><span className='gradient-text'>Proyectos</span></button></li>
          <li><button className='default-btn-style nav-button'><span className='gradient-text'>Experiencia</span></button></li>
          <li><button className='default-btn-style nav-button'><span className='gradient-text'>Contacto</span></button></li>
        </ul>
    </nav>
    )
}

export default NavBar