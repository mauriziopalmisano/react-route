import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import Prodotti from './pages/Prodotti'
import ChiSiamo from './pages/ChiSiamo'


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path='prodotti' element={<Prodotti/>}/>
      <Route path='chi_siamo' element={<ChiSiamo/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
