import React from 'react'
import HeroSection from './Components/HeroSection'

const About = () => {
  const data = {
    name: 'E-commerce Store'
  }
  return (
    <>
      <HeroSection myData={data} />
    </>
  )
}

export default About