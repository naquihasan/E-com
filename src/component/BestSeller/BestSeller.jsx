import React from 'react'
import './BestSeller.css'
import ProductCard from '../ProductCard/ProductCard'
import { useAppContext } from "../../context/AppContext";

const BestSeller = () => {

    const { products } = useAppContext();

    const uniqueProducts = [];
    const categories = new Set();

    for (let item of products) {
        if (!categories.has(item.category)) {
            categories.add(item.category);
            uniqueProducts.push(item);
        }
        if (uniqueProducts.length === 5) break;
    }

    return (
        <div className='Best-Seller'>
            <h2 className="title">Best Sellers</h2>

            <div className="card-wrapper">
                {uniqueProducts.map(item => (
                    <ProductCard key={item._id} item={item} />
                ))}
            </div>
        </div>
    )
}

export default BestSeller
