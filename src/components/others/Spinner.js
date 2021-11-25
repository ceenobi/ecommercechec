import { Spinner } from 'react-bootstrap'

export default function Spin() {
  return (
    <>
      <div className='d-flex justify-content-center py-5 mt-5'>
        <div>
          <Spinner animation='border' role='status' variant='warning'>
            <span className='visually-hidden mt-5'>Loading...</span>
          </Spinner>
        </div>
      </div>
    </>
  )
}
