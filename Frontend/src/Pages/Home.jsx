import React from 'react'
import HeroCarousel from '../Components/HeroCarousel'
import ProductGrid from '../Components/ProductGrid'
import CustomerCarousel from '../Components/CustomerCarousel'
import FAQ from '../Components/FAQ'
import Featured from '../Components/Featured'
import VideoCategoryStrip from '../Components/VideoCategoryStrip.jsx';

function Home() {
  return (
    <div className="w-full h-full home-page">
      <VideoCategoryStrip />
      <HeroCarousel />
      <div className='w-full h-full product-grid'>
        <ProductGrid />
        <CustomerCarousel />
        <Featured />
        <FAQ />
      </div>
    </div>
  )
}

export default Home