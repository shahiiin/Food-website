import React from 'react'
import { Nav, NavIcon ,Bars} from './NavbarElements'


const Navbar = () => {
  return (
    <>
      <Nav>
        <p>Pitzaa</p>
        <NavIcon>
          <p>menu</p>
          <Bars/>
        </NavIcon>
      </Nav>
    </>

  )
}

export default Navbar