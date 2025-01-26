import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import './bg.css'
import './about.css'
import './button.css'
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'
import CustomCursor from './components/CustomCursor'

function App() {

  return (
    <BrowserRouter>
      <CustomCursor/>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
