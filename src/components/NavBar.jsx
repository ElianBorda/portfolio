import { motion } from 'motion/react'
import React from 'react'

const NavBar = () => {
  return (
    <nav className='nav'>
        <ul>
          <li><button className='default-btn-style nav-button'><span className='gradient-text shw'>Proyectos</span></button></li>
          <li><button className='default-btn-style nav-button'><span className='gradient-text shw'>Experiencia</span></button></li>
          <li><button className='default-btn-style nav-button'><span className='gradient-text shw'>Contacto</span></button></li>
        </ul>
    </nav>
    )
}

export default NavBar