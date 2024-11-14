import React from 'react';
import FeatureProduct from './Components/FeatureProduct';
import HeroSection from './Components/HeroSection';
import Services from './Components/Services';
import Trusted from './Components/Trusted';
import { useProduductContext } from './Contaxt/ProductContext';

const Home = () => {
  const {Name} = useProduductContext();
  const data = {
    name: 'Nitin Store',
  }
  
  return (
    <>
        <HeroSection myData={data} />
        <FeatureProduct/>
        <Services />
        <Trusted />
    </>
  )
}

export default Home;