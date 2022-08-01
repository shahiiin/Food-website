import React, { useState } from 'react';
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
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
        <Navbar toggle={toggle}/>
        <SideBar isOpen={isOpen} toggle={toggle}/>
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