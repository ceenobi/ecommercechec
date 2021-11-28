import React from 'react'
import { useState } from 'react'
import {Offcanvas, Container, Nav, Button} from 'react-bootstrap'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'

const SideNav = ({ name, ...props }) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
     <Offstyle>
      <i className='bi bi-list text-dark d-lg-none' onClick={handleShow}><span className='menu mx-1'>MENU</span></i>
      <Offcanvas show={show} onHide={handleClose} {...props} className='h-100'>
        <Fade top>
        <Offcanvas.Header closeButton>
          <Nav.Link href='/'>
            <Offcanvas.Title>OWNATEK</Offcanvas.Title>
          </Nav.Link>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container fluid>
           
            <Nav className='text-center'>
              <Nav.Link href='/apple'>Apple</Nav.Link>
              <Nav.Link href='/samsung'>Samsung</Nav.Link>
               <Nav.Link href='/pixel'>Pixel</Nav.Link>
                <Nav.Link href='/accessories'>Accessories</Nav.Link>
                 <Nav.Link href='/accessories'>Smartphones</Nav.Link>
                  <Nav.Link href='/accessories'>Smartwatches</Nav.Link>
                <Container className='text-center p-3 mt-4 bg-danger'>
                 <p className='text-white'>Browse a personalised list just for you</p>
              <Nav.Link href='/signup'>
                <Button variant="light" size='sm'>Create my Ownatek account</Button>
                </Nav.Link>
            </Container>
             <Nav.Link href='/signin' className='mt-4'>Sign in</Nav.Link>
              <Nav.Link href='/saved'>Saved items</Nav.Link>
            </Nav>
           
          </Container>
        </Offcanvas.Body>
          </Fade>
      </Offcanvas>
       </Offstyle>
      </>
    
  )
}

export default SideNav

const Offstyle = styled.nav`
  .navbar-nav a.nav-link {
    font-family: 'Josefin Sans', 'Roboto' !important;
  }
  .offcanvas-title h5{
    font-family: 'Noto Sans'!important;
  }
  .menu {
    font-size: 14px!important;
  }

`
