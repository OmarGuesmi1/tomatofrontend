import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

export const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h2>Explore our menu</h2>
      <p className='explore-menu-text'>
        Choose from a diverse menu featuring a delectable array
      </p>

      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          const isActive = category === item.menu_name;

          return (
            <div
              key={index}
              onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
              className={`explore-menu-list-item ${isActive ? "active" : ""}`}
            >
              <img src={item.menu_image} alt={item.menu_name} />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
