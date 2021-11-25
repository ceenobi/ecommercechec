import React from 'react'
import { Link } from 'react-router-dom'
import { JumboWrapper } from './styles'
import { Container } from 'react-bootstrap/'

const Jumbotron = () => {
  return (
    <JumboWrapper>
      <Container className='jumbotron jumbotron-fluid p-5 border-top'>
        <div className='d-flex justify-content-center text-center align-items-center'>
          <div className='overlay'>
            <div className='image paint p-3 text-center'>
              <p className='fw-bold'>To our customers</p>
              <p>
                <em>
                  Check out our blog for updates on how to enhance your smart
                  life.
                </em>
              </p>
              <Link to='/'>
                <p>
                  READ BLOG<i className='bi bi-chevron-compact-right'></i>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </JumboWrapper>
  )
}

export default Jumbotron
