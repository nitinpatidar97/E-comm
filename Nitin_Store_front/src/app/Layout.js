import React from 'react';
import { Outlet } from 'react-router-dom';
import FeatureProduct from './Components/FeatureProduct';
import Footer from './Components/Footer';
import HeroSection from './Components/HeroSection';
import Navbar from './Components/Navbar';
import Services from './Components/Services';
import Trusted from './Components/Trusted';
import { useProduductContext } from './Contaxt/ProductContext';

const Layout = () => {

  return (
    <>
        <Navbar />
        <Outlet/>
        <Footer />
    </>
  )
}

export default Layout;