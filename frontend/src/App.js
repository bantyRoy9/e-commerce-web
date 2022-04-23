import React from 'react'
import LoginSignup from './components/LoginSignup'
import Products from './components/Products'
import Login from './components/Login';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddProduct from './components/AddProduct'
import { HomePage } from './components/HomePage';

const App = () => {
  return (
    <div>
    <Navbar/>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<LoginSignup />} />
        <Route path='/product' element={<Products />} />
        <Route path='/getproduct' element={<AddProduct/>}/>
      </Routes>
    </div>
  )
}

export default App