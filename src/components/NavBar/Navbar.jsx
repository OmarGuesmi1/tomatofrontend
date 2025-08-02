import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';
import './Navbar.css';
import { StoreContext } from '../../context/StoreContext'
const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <header className='navbar'>
      <Link to='/'>
        <img src={assets.logo} alt="Logo" className="logo" />
      </Link>

      <nav className="navbar-menu">
        <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <a href="#explore-menu" onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
        <a href="#app-download" onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile App</a>
        <a href="#footer" onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : ""}>Contact Us</a>
      </nav>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="search" className="icon" />

        <div className="basket-icon">
          <Link to='/cart'>
            <img src={assets.basket_icon} alt="basket" />
            <span className={getTotalCartAmount()===0?"":"dot"} />
          </Link>
        </div>

        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </header>
  );
};

export default Navbar;
