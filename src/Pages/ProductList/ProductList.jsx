import React from 'react'
import { useAppContext } from "../../context/AppContext";
import { useParams } from 'react-router-dom'
import ProductCard from '../../component/ProductCard/ProductCard';

const ProductList = () => {

    const { products } = useAppContext();
    const { category } = useParams();

    const filteredProducts = products.filter(
    item => item.category === category
    );


  return (
    <div className='product-container'>
      <h2>{decodeURIComponent(category)} Products</h2>
      {filteredProducts.length === 0 ? (
        <p>No products found</p>
      ) : (
        filteredProducts.map(item => (
          <ProductCard key={item._id} item={item} />
        ))
      )}
    </div>
  )
}

export default ProductList  
