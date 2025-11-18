import { useState } from 'react'
import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Infaltables from './components/Infaltables'
import Ofertas from './components/Ofertas'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' 




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/administracion" element={<administracion />} />
        <Route path="/infaltables" element={<Infaltables />} />
        <Route path="/ofertas" element={<Ofertas />} />
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
