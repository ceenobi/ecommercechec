import React from 'react'
import {Nav, Container} from 'react-bootstrap'
import { NavLink as Link } from 'react-router-dom'
import styled from 'styled-components'
// import {useState, useEffect} from 'react'
// import {commerce} from '../../lib/Commerce'

export default function Navtab() {
  
 
   return (
     <Container className='d-none d-lg-block my-3'>
       <NavbarStyle>
         <Nav className='justify-content-center'>
           <Nav.Item className='mx-3'>
             <Link to='/apple' activeClassName="active">APPLE</Link>
           </Nav.Item>
           <Nav.Item className='mx-3'>
             <Link to='/samsung' activeClassName="active">SAMSUNG</Link>
           </Nav.Item>
           <Nav.Item className='mx-3'>
             <Link to='/!'>PIXEL</Link>
           </Nav.Item>
           <Nav.Item className='mx-3'>
             <Link to='/!'>ACCESORIES</Link>
           </Nav.Item>
           <Nav.Item className='mx-3'>
             <Link to='/shop/smartphones'>SMARTPHONES</Link>
           </Nav.Item>
           <Nav.Item className='mx-3'>
             <Link to='/!'>SMARTWATCHES</Link>
           </Nav.Item>
           <Nav.Item className='mx-3'>
             <Link to='/!'>EARBUDS</Link>
           </Nav.Item>
           <Nav.Item className='mx-3'>
             <Link to='/!'>TABLETS</Link>
           </Nav.Item>
         </Nav>
       </NavbarStyle>
     </Container>
   )
}

export const NavbarStyle = styled.nav`
.nav-item a.active {
  color: var(--lightRed)!important;
}`
