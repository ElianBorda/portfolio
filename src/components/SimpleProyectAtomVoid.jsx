import React from 'react'

const SimpleProyectAtomVoid = ({proy, style}) => {
  return (
        <div
            className={`simple-proyect ${style}`}>
            <h2>{proy.title}</h2>
            <p className='desc-proy'>{proy.simpleDesc}</p>
            <div>{proy.lang.map((tec, index) => <span key={index}>{tec}</span>)}</div>
            <button className='default-btn-style border-primary-btn'>
                <span className='gradient-text'>Ver detalle</span>
            </button>
        </div>
  )
}

export default SimpleProyectAtomVoid