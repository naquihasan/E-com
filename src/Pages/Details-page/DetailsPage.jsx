import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'
import './DetailsPage.css'

const DetailsPage = () => {

    const { id } = useParams()
    const { products, cartItems, addToCart, increaseQty, decreaseQty } = useAppContext()

    if (!products.length) return <h2>Loading...</h2>;

    const product = products.find(item => item._id === id)

    if (!product) return <h2>Product Not Found</h2>

    const cartItem = cartItems.find(cart => cart._id === product._id)

    const images = Array.isArray(product.image)
    ? product.image
    : [product.image];

    const [mainImage, setMainImage] = useState(images[0]);

    
    


    return (
        <div className="details-container">

            {/* LEFT SIDE */}
            <div className="left">

                <div className="main-image">
                    <img
                        src={`http://localhost:5000/uploads/${mainImage}`}
                        alt={product.name}
                    />
                </div>

                {/* 🔥 IMAGE GRID */}
                <div className="image-grid">
                    {images.map((img, index) => (
                        <img
                        key={index}
                        src={`http://localhost:5000/uploads/${img}`}
                        onClick={() => setMainImage(img)}
                        className={mainImage === img ? "active" : ""}
                        />
                    ))}
                </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="right">

                <h1>{product.name}</h1>

                <div className="price-box">

                    <span className="old-price">
                        MRP:  ₹{product.price}
                    </span>

                    <span className="offer-price">
                       MRP:  ₹{product.offerPrice}
                    </span>

                    <span className='tax'>(inclusive of all taxes)</span>
                    
                </div>

                <p>{product.description}</p>

                <div className='buttons-group'>
                    <div>
                        {!cartItem ? (
                        <button
                            className="btn-buy"
                            onClick={() => addToCart(product)}
                        >
                            🛒 Add
                        </button>
                    ) : (
                        <div className="add-cart-btn">
                            <button onClick={() => decreaseQty(product._id)}>-</button>
                            <span>{cartItem.quantity}</span>
                            <button onClick={() => increaseQty(product._id)}>+</button>
                        </div>
                    )}
                    </div>
                    <div>
                        <button className='add-btn '>Buy Now</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default DetailsPage