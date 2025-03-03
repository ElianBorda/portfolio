import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import './bg.css'
import './about.css'
import './button.css'
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'
import CustomCursor from './components/CustomCursor'


// function updateScale() {
//   // Usamos window.devicePixelRatio como aproximación del nivel de zoom.
//   // NOTA: Esto es solo un ejemplo y puede variar según el navegador y la configuración.
//   const zoomFactor = window.devicePixelRatio;
//   // Calculamos la escala inversa para compensar el zoom:
//   const scale = 1 / zoomFactor;
//   const container = document.getElementById('body');
//   // Aplicamos la transformación inversa:
//   container.style.transform = 'scale(' + scale + ')';
//   container.style.transformOrigin = '0 0'; // Se ajusta el origen de la transformación.
// }

// // Actualizamos la escala al cargar la página y cuando se redimensiona la ventana.
// window.addEventListener('load', updateScale);
// window.addEventListener('resize', updateScale);
 

function App() {

  return (
    <BrowserRouter>
      <CustomCursor/>
      {/* <NavBar/> */}
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
