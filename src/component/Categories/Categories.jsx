import React, { useEffect, useState } from "react";
import axios from "axios";
import './Categories.css'
import { Link } from 'react-router-dom'



const Categories = () => {


    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:5000/api/categories")
        .then(res => setCategories(res.data))
    },[]);

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
                             <Link to={`/products/${cat.name}`} className='cate-box' style={{backgroundColor:cat.bgColor}} key={index}>
                                <div className='cate-img'>
                                    <img src={`http://localhost:5000/uploads/${cat.image}`} alt="" className="cat-img"/>
                                </div>
                                <p className='cate-name'>{cat.name}</p>
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