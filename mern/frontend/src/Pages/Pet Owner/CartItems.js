import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TopNavBar from './TopNavBar';

const CartItems = () => {
  const [items, setItems] = useState();
  const fetchCart = async () => {
    const res = await axios.get(`http://localhost:3030/Pet/getCartItems`);
    console.log('cart', res);
    setItems(res.data);
  };
  useEffect(() => {
    fetchCart();
  }, []);

  const handlePlaceOrder = () => {
    alert('Order Placed Successully');
    window.location = '/';
  };
  return (
    <div>
      <TopNavBar />
      <div
        className='container'
        style={{ textAlign: 'left', padding: '50px', fontWeight: '600' }}
      >
        <h1>
          <b> My Cart</b>
        </h1>
        <br />
        <hr />

        {items?.map((item) => {
          return (
            <div style={{ margin: '10px auto' }}>
              <div class='card w-100'>
                <div
                  class='card-body'
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <div>
                    <h5 class='card-title'>Item: {item.name}</h5>
                    <p class='card-text'>Description: {item.description}</p>
                  </div>
                  <div>
                    <h5 class='card-text'>Price: {item.price}</h5>
                    <p class='card-title'>OrderDateTime: {item.createdAt}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className='location-display-wrapper'>
          <button
            style={{ width: '150px', height: '70px' }}
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
