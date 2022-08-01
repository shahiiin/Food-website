import React from 'react'
import Navbar from '../navbar/index';
import SideBar from '../sidebar';
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
        <SideBar/>
        <HeroContent>
            <HeroItems>
                <HeroH1>Grates Pizza Ever</HeroH1>
                <HeroP>Ready in 60 Seconds</HeroP>
                <HeroBtn>place order</HeroBtn>
            </HeroItems>
        </HeroContent>
    </HeroContainer>
  )
}

export default Hero