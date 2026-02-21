import React from 'react'
import './product.css'
import { useAppContext } from "../../context/AppContext";
import { useParams } from 'react-router-dom'
import ProductCard from '../../component/ProductCard/ProductCard';

const ProductList = () => {

    const { products } = useAppContext();
    const { category } = useParams();

    const filteredProducts = products.filter(
    item => item.category?.name === category
  );


  return (    

    <>
      <div className='product-list'>
        <div className='prodduct-cat-heading'><h2>{decodeURIComponent(category)} Products</h2></div>
          <div className='product-container'>
      {filteredProducts.length === 0 ? (
        <p>No products found</p>
      ) : (
        filteredProducts.map(item => (
          <ProductCard key={item._id} item={item} />
        ))
      )}
    </div>
      </div>
      
    </>
  )
}

export default ProductList  
