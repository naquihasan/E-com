import React from 'react'
import Banner from '../../component/Banner/Banner'
import Categories from '../../component/Categories/Categories'
import BestSeller from '../../component/BestSeller/BestSeller'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Categories/>
      <BestSeller/>
    </div>
  )
}

export default Home