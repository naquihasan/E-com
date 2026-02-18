import React from 'react'
import './Banner.css'
import banner_img from '../../assets/main_banner_bg.png'
import right_arrow from '../../assets/black_arrow_icon.svg'
const Banner = () => {
  return (
    <div className='banner'>
        <img src={banner_img} alt="" />
        <div className='banner-caption'>
            <h1>
                Freshness You Can <br /> Trust, Savings You <br /> will Love!
            </h1>
            <div className='buttons'>
                <button className='btn btn-success'>Shop Now</button>
                <p><span>Explore More </span><img src={right_arrow} alt="" /></p>
            </div>
        </div>
    </div>
  )
}

export default Banner