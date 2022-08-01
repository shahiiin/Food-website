import React from 'react'
import { Nav, NavIcon ,Bars} from './NavbarElements'


const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <p>Pitzaa</p>
        <NavIcon onClick={toggle}>
          <p>menu</p>
          <Bars/>
        </NavIcon>
      </Nav>
    </>

  )
}

export default Navbar