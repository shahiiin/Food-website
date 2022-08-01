import React from 'react'
import { Nav, NavIcon ,Bars} from './NavbarElements'


const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <h1 style={{color:"#fff",marginTop:"1rem",fontWeight:900}}>Pizza</h1>
        <NavIcon onClick={toggle}>
          <p>menu</p>
          <Bars/>
        </NavIcon>
      </Nav>
    </>

  )
}

export default Navbar