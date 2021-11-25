import React from 'react'
import {Button } from 'react-bootstrap/'
import { JumboWrapper } from './styles'
import {Link} from 'react-router-dom'

export default function Jumbotron() {
    return (
      <JumboWrapper>
        <div className='jumbotron jumbotron-fluid'>
          <div className='d-flex justify-content-center text-center align-items-center'>
            <div className='overlay'>
              <h1 className='display-3'>The gadget you've always needed</h1>
              <p className='text-uppercase'>a range of products for you</p>
              <Link to='/shop'>
                <Button variant='outline-success' size='lg' className='mt-3'>
                  Shop now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </JumboWrapper>
    )
}
