import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import Prodotti from './pages/Prodotti'
import ChiSiamo from './pages/ChiSiamo'
import MainLayout from './layout/mainLayout'


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<MainLayout/>}>
      <Route index element={<HomePage/>}/>
      <Route path='prodotti' element={<Prodotti/>}/>
      <Route path='chi_siamo' element={<ChiSiamo/>}/>
      <Route path='*' element={<NotFound/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
