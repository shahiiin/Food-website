import React from 'react'
import Navbar from '../navbar/index';
import {
    HeroContainer,
    HeroContent,
    HeroItems,
    HeroH1,
    HeroP,
    HeroBtn
  } from './HeroElements';

const Hero = () => {
  return (
    <HeroContainer>
        <Navbar/>
    </HeroContainer>
  )
}

export default Hero