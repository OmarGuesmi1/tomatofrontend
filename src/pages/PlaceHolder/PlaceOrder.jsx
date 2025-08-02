import React, { useContext } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input className="place-order-input" type="text" placeholder='Email address' />
          <input className="place-order-input" type="text" placeholder='Street' />
        </div>
        <div className="multi-fields">
          <input className="place-order-input" type="text" placeholder='City' />
          <input className="place-order-input" type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input className="place-order-input" type="text" placeholder='First name' />
          <input className="place-order-input" type="text" placeholder='Last name' />
        </div>
        <div className="multi-fields">
          <input className="place-order-input" type="text" placeholder='Zip code' />
          <input className="place-order-input" type="text" placeholder='Country' />
        </div>
        <input className="place-order-input" type="text" placeholder='Phone number' />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>

          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>

          <hr />

          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
          </div>

          <div className="cart-total-details">
            <b>Total</b>
            <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
          </div>

          <button className="place-order-btn"
            type="button"
            onClick={() => navigate('/order')}
            disabled={getTotalCartAmount() === 0}
          >
            PROCEED TO PAY
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
