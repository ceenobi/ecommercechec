import React from 'react'
import {Nav, Container} from 'react-bootstrap'
import { NavLink as Link } from 'react-router-dom'
import styled from 'styled-components'
import {useState, useEffect} from 'react'
// import {commerce} from '../../lib/Commerce'
import debounce from '../others/debounce'

export default function Navtab() {
 const [prevScrollPos, setPrevScrollPos] = useState(0)
 const [visible, setVisible] = useState(true)

 const handleScroll = debounce(() => {
   const currentScrollPos = window.pageYOffset

   setVisible(
     (prevScrollPos > currentScrollPos &&
       prevScrollPos - currentScrollPos > 70) ||
       currentScrollPos < 10
   )

   setPrevScrollPos(currentScrollPos)
 }, 100)
 
 useEffect(() => {
   window.addEventListener('scroll', handleScroll)

   return () => window.removeEventListener('scroll', handleScroll)
 }, [prevScrollPos, visible, handleScroll])

 const navbarStyles = {
   position: 'fixed',
   height: '60px',
   width: '100%',
   backgroundColor: 'none',
   textAlign: 'center',
   transition: 'top 0.5s',
   paddingTop: '4rem',
 }


  
 
   return (
     
     <Container fluid className='d-none d-lg-block my-3' 
     style={{ ...navbarStyles, top: visible ? '0' : '-100px' }}>
       <NavbarStyle>
         <Nav className='justify-content-center fw-bold'>
           <Nav.Item className='mx-3'>
             <Link to='/apple' activeClassName='active'>
               APPLE
             </Link>
           </Nav.Item>
           <Nav.Item className='mx-3'>
             <Link to='/samsung' activeClassName='active'>
               SAMSUNG
             </Link>
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
    color: var(--lightRed) !important;
  }

`
