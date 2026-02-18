import React from 'react'
import './Categories.css'
import { categories } from '../../assets/assets'
import { Link } from 'react-router-dom'


const Categories = () => {
    return (
        <>
            <div className='category-section'>
                <div className='category-heading'>
                    <h2>Categories</h2>
                </div>
                <div className='category-wrapper'>
                    {
                        categories.map((cat , index) =>{
                            return(
                             <Link to={`/products/${cat.path}`} className='cate-box' style={{backgroundColor:cat.bgColor}} key={index}>
                                <div className='cate-img'>
                                    <img src={cat.image} alt="" />
                                </div>
                                <p className='cate-name'>{cat.text}</p>
                            </Link >
                           )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Categories