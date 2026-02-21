import React from 'react'
import { Link } from 'react-router-dom';
import { useAppContext } from "../../context/AppContext";
import './ProductCard.css'


const ProductCard = ({ item }) => {

    const { cartItems, addToCart, increaseQty, decreaseQty } = useAppContext();

    const cartItem = cartItems.find(cart => cart._id === item._id);

    return (
        <div className='item-wrapper'>
            <Link to={`/product-details/${item._id}`} className='card'>

                <img
                    src={`http://localhost:5000/uploads/${item.image?.[0]}`}
                    alt={item.name}
                    className="product-img"
                />

                <p className="category">{item.category?.name}</p>
                <h3 className="product-name">{item.name}</h3>

            </Link>

            <div className="bottom">
                <div>
                    <span className="price">₹{item.offerPrice}</span>
                    <span className="old-price">₹{item.price}</span>
                </div>

                {!cartItem ? (
                    <button
                        className="add-btn"
                        onClick={() => addToCart(item)}
                    >
                        🛒 Add
                    </button>
                ) : (
                    <div className="qty-box">
                        <button onClick={() => decreaseQty(item._id)}>-</button>
                        <span>{cartItem.quantity}</span>
                        <button onClick={() => increaseQty(item._id)}>+</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProductCard;
