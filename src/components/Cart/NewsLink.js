import React from 'react'
import {Link} from 'react-router-dom'

export default function NewsLink() {
    return (
      <>
        <div className='text-center py-5 px-4 d-none d-lg-block'>
          <h5 className='mt-5 '>Ownatek Shopping Experience</h5>
          <div className='d-lg-flex justify-content-center mt-5'>
            <Link to='/!'>
              <p className='text-muted border-end border-dark px-2'>
                Authentic Ownatek Guranteee
              </p>
            </Link>
            <Link to='/!'>
              <p className='text-muted border-end border-dark px-2'>
                Safe and Secure Payment
              </p>
            </Link>
            <Link to='/!'>
              <p className='text-muted px-2'>Returns and Exhanges</p>
            </Link>
          </div>
        </div>
        <div className='py-5 px-2 d-block d-lg-none'>
          <h5 className='text-center mt-5 border-bottom pb-4'>
            OWNATEK SHOPPING EXPERIENCE
          </h5>
          <div className='mt-4'>
            <Link to='/'>
              <p className='text-muted border-bottom pb-2 text-capitalize'>
                AUTHENTIC OWNATEK GURANTEE
              </p>
            </Link>
            <Link to='/!'>
              <p className='text-muted border-bottom pb-2'>
                SAFE AND SECURE PAYMENT
              </p>
            </Link>
            <Link to='/!'>
              <p className='text-muted border-bottom pb-2'>
                RETURNS AND EXCHANGES
              </p>
            </Link>
          </div>
        </div>
      </>
    )
}
