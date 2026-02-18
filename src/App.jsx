import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './pages/Home/Home'
import ProductList from './Pages/ProductList/ProductList'


const App = () => {
  return (
    <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products/:category" element={<ProductList/>} />
        </Routes>

        
  
    </>
  )
}

export default App