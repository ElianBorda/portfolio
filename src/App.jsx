import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import './bg.css'
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
