import React, { useState, useEffect } from 'react';
import '../cursor.css'; // Asegúrate de importar tu archivo CSS

const CustomCursor = () => {
    const [isPointer, setIsPointer] = useState(false);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  
    useEffect(() => {
      // Ocultamos el puntero por defecto
      document.body.style.cursor = 'none';
  
      // Actualiza la posición del puntero personalizado
      const handleMouseMove = (e) => {
        setCursorPos({
          x: e.clientX,
          y: e.clientY,
        });
      };
  
      // Detecta cuando el puntero entra en un elemento con "cursor: pointer"
      const handlePointerEnter = (e) => {
        if (e.target && (e.target.tagName === 'BUTTON' || e.target.tagName === 'A')) {
          setIsPointer(true);  // Activa el puntero grande
        }
      };
  
      // Detecta cuando el puntero sale de un botón
      const handlePointerLeave = (e) => {
        if (e.target && (e.target.tagName === 'BUTTON' || e.target.tagName === 'A')) {
          setIsPointer(false); // Vuelve al puntero normal
        }
      };
  
      // Agrega eventos globales para el movimiento del mouse
      document.addEventListener('mousemove', handleMouseMove);
  
      // Añadir eventos a los elementos interactivos
      document.querySelectorAll('button, a').forEach((el) => {
        el.addEventListener('pointerenter', handlePointerEnter);
        el.addEventListener('pointerleave', handlePointerLeave);
      });
  
      return () => {
        document.body.style.cursor = ''; // Restablece el puntero al salir del componente
        document.removeEventListener('mousemove', handleMouseMove);
        document.querySelectorAll('button, a').forEach((el) => {
          el.removeEventListener('pointerenter', handlePointerEnter);
          el.removeEventListener('pointerleave', handlePointerLeave);
        });
      };
    }, []);
  
    return (
      <>
        <div
          className={`custom-cursor ${isPointer ? 'large' : ''}`}
          style={{
            left: `${cursorPos.x}px`,
            top: `${cursorPos.y}px`,
            position: 'fixed', // Usamos fixed para mantener el círculo en su lugar en el viewport
            pointerEvents: 'none', // No interferir con otros elementos al hacer clic
          }}
        ></div>
      </>
    );
  };

export default CustomCursor;
