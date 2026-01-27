import React from 'react'
import './main.css'

import { Route, Routes, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';


import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/AboutUs.jsx'
import ServicesPage from './Pages/ServicesPage.jsx'
import ServiceDetail from './Pages/ServiceDetails.jsx'
import ServiceCategoryPage from './Pages/ServiceCategory.jsx'
import ProductPage from './Pages/ProductPage.jsx';
import ProductList from './Pages/ProductList.jsx';
import AddProduct from './Components/AddProduct.jsx';


function App() {
  const location = useLocation();

  return (
    <div>
      <Helmet><title>Vinto Printz</title></Helmet>

      <Navbar />

      <div id='Body-routes' className="body-routes">
        <Routes location={location} key={location.pathname} >
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/product-page' element={<ProductPage />} />
          <Route path='/product-list' element={<ProductList />} />
          <Route path='/add-product' element={<AddProduct />} />
          <Route path="/services/:categorySlug" element={<ServicesPage />} />
          <Route path="/services/:categorySlug/:serviceSlug" element={<ServiceCategoryPage />} />
          <Route path="/services/:categorySlug/:serviceSlug/:subSlug" element={<ServiceDetail />} />
        </Routes>
      </div>



      <Footer />

    </div>
  )
}

export default App