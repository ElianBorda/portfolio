import { map } from 'motion/react-client'
import React from 'react'

const SimpleProyectAtom = ({proy}) => {
  return (
        <div className='proyect-atom'>
            <h2>{proy.title}</h2>
            <p className='desc-proy'>{proy.simpleDesc}</p>
            <div>{proy.lang.map((tec, index) => <span key={index}>{tec}</span>)}</div>
            <button>Ver detalle</button>
        </div>
    )
}

export default SimpleProyectAtom