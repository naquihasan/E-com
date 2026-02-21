import React from 'react'
import { useAppContext } from '../../context/AppContext'
import ProductCard from '../../component/ProductCard/ProductCard'
// import ProductCard from '../ProductCard/ProductCard'

const AllProducts = () => {

    const {products} = useAppContext()

  return (
    <div>

        
        <div className='product-list'>
            <div className='prodduct-cat-heading'><h2>All Products</h2></div>
            <div className='product-container'>
                
            {
                products.length === 0 ? (
                    <p>No products found</p>
                ) : (
                    products.map((item) => {
                        return (
                            <ProductCard key={item._id} item={item} />
                        )
                    })
                )
            }
            </div>
        </div>
    </div>
  )
}

export default AllProducts