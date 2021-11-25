import { JumboCover } from '../others/Jumbotron'

export default function Hero() {
  return (
    <JumboCover>
      <div className='jumbotron jumbotron-fluid p-5 border-top'>
        <div className='d-flex justify-content-center text-center align-items-center'>
          <div className='overlay'>
            <div className='p-3 text-center'>
              <h1 className=''>WELCOME TO APPLE STORE</h1>
              <p className='lead'>
                Stand out from the crowd with our premium apple devices
              </p>
            </div>
          </div>
        </div>
      </div>
    </JumboCover>
  )
}
