import React from 'react';
import Navbar from './components/NavBar/Navbar';
import Cart from './pages/Cart/Cart';
import Home from './pages/home/Home';
import PlaceOrder from './pages/PlaceHolder/PlaceOrder';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
const App = () => {
  return (
    <>
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/cart' element={<Cart/>} /> 
        <Route path='/cart' element={<PlaceOrder/>} /> 
      </Routes>
    </div>
    <Footer></Footer>
    </>
    
  )
}

export default App