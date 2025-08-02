import React, { useState } from 'react';
import Navbar from './components/NavBar/Navbar';
import Cart from './pages/Cart/Cart';
import Home from './pages/home/Home';
import PlaceOrder from './pages/PlaceHolder/PlaceOrder';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
const App = () => {
  const [showLogin,setShowLogin] = useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/cart' element={<Cart/>} /> 
        <Route path='/order' element={<PlaceOrder/>} /> 
      </Routes>
    </div>
    <Footer></Footer>
    </>
    
  )
}

export default App