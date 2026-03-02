import React from 'react'
import { useAppContext } from '../../context/AppContext'
import './Cart.css'

const Cart = () => {

  const { cartItems, increaseQty, decreaseQty, removeFromCart, totalQuantity, totalPrice } = useAppContext();

  return (
    <div className='cart-page'>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {cartItems.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                Cart is Empty
              </td>
            </tr>
          ) : (
            cartItems.map((item) => (
              <tr key={item._id}>
                <td>
                  <img
                    src={`http://localhost:5000/uploads/${item.image?.[0]}`}
                    alt={item.name}
                    width="60"
                  />
                </td>

                <td>{item.name}</td>

                <td>
                  <button className='incButton' onClick={() => decreaseQty(item._id)}>-</button>
                  {item.quantity}
                  <button className='decButton' onClick={() => increaseQty(item._id)}>+</button>
                </td>

                <td>
                  ₹ {item.price * item.quantity}
                </td>

                <td>
                  <button onClick={() => removeFromCart(item._id)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div style={{ padding: "20px" , width:'30%'  , background:"#f8f9fa"}}>
        <h3>Total Items: {totalQuantity}</h3>
        <h3>Total Price: ₹ {totalPrice}</h3>
        <button className='checkout-btn'>Checkout</button>
      </div>
    </div>
  )
}

export default Cart