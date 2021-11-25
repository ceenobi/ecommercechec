import { Container, Row, Col, Form, InputGroup } from 'react-bootstrap'
import React from 'react'
import {FooterWrapper} from './styles'

export default function Footer() {
    return (
      <FooterWrapper>
        <footer className='text-center text-md-start'>
          <Container className='p-4'>
            <Row>
              <Col lg={3} md={6} className='mb-4 mb-md-0'>
                <h6 className='text-uppercase mb-3'>find us on</h6>
                <ul className='list-unstyled mb-0 '>
                  <li>
                    <a href='#!'>
                      <i className='bi bi-instagram'></i> Instagram
                    </a>
                  </li>
                  <li>
                    <a href='#!'>
                      <i className='bi bi-twitter'></i> Twitter
                    </a>
                  </li>
                  <li>
                    <a href='#!'>
                      <i className='bi bi-facebook'></i> Facebook
                    </a>
                  </li>
                  <li>
                    <a href='#!'>
                      <i className='bi bi-youtube'></i> Youtube
                    </a>
                  </li>
                </ul>
              </Col>
              <Col lg={3} md={6} className='mb-4 mb-md-0'>
                <h6 className='text-uppercase mb-3'>need help</h6>
                <ul className='list-unstyled mb-0 '>
                  <li>
                    <a href='#!'>Product Care</a>
                  </li>
                  <li>
                    <a href='#!'>Contact Us</a>
                  </li>
                  <li>
                    <a href='#!'>Warranty</a>
                  </li>
                  <li>
                    <a href='#!'>Returns & Exchanges</a>
                  </li>
                  <li>
                    <a href='#!'>FAQS</a>
                  </li>
                  <li>
                    <a href='#!'>Payment Options</a>
                  </li>
                </ul>
              </Col>
              <Col lg={3} md={6} className='mb-4 mb-md-0'>
                <h6 className='text-uppercase mb-3'>the company</h6>
                <ul className='list-unstyled mb-0 '>
                  <li>
                    <a href='#!'>About Ownatek</a>
                  </li>
                  <li>
                    <a href='#!'>Legal</a>
                  </li>
                  <li>
                    <a href='#!'>Corporate Information</a>
                  </li>
                  <li>
                    <a href='#!'>Code of Ethics</a>
                  </li>
                  <li>
                    <a href='#!'>Privacy & Cookies</a>
                  </li>
                  <li>
                    <a href='#!'>Payment Options</a>
                  </li>
                  <li>
                    <a href='#!'>Ownatek Deals</a>
                  </li>
                </ul>
              </Col>
              <Col lg={3} md={6} className='mb-4 mb-md-0'>
                <h6 className='text-uppercase mb-3'>sign up for ownatek updates</h6>
                <p>
                  By entering your email address below, you consent to receiving
                  our newsletter with access to our latest collections, events
                  and initiatives. More details on this are provided in our
                  Privacy Policy. Enter email address:
                </p>
                <Form className='d-flex justify-content-between border-bottom border-white'>
                  <InputGroup className='mb-3' controlId='inputGroupEmail'>
                    <Form.Control size='sm' type='email' placeholder='Email address'
                    className='border-0 bg-dark'/>
                    <InputGroup.Text>
                      <i className='bi bi-chevron-compact-right btn btn-sm' type='submit'
                      ></i>
                    </InputGroup.Text>
                  </InputGroup>
                </Form>
              </Col>
            </Row>
          </Container>
          <Container className='text-start p-2'>
            <p className='lead'>
              {' '}
              &copy; {new Date().getFullYear()} OWNATEK S.p.A. - All rights
              reserved. SIAE LICENCE # 2294/I/1936 and 5947/I/1436
            </p>
          </Container>
        </footer>
      </FooterWrapper>
    )
}
