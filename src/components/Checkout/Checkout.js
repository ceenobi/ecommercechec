import { useState, useEffect } from 'react'
import { commerce } from '../../lib/Commerce'
import { Container, Row, Col, Button, Image} from 'react-bootstrap/'
import { Stepper } from 'react-form-stepper'
import styled from 'styled-components'
import AddressForm from '../Checkout/CheckoutForm/AddressForm'
import PaymentForm from './CheckoutForm/PaymentForm'
import {Link, useNavigate} from 'react-router-dom'
import Spinner from '../others/Spinner'


const steps = ['Shipping address', 'Payment details']

export default function Checkout({ bag, order, error, onCaptureCheckout}) {
  const [checkoutToken, setCheckoutToken] = useState(null)
  const [activeStep, setActiveStep] = useState(0)
  const [shippingData, setShippingData] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    if (!bag.loading) {
      generateToken()
    }
  }, [bag.loading])
  
  const generateToken = async () => {
    if (bag.id) {
      const token = await commerce.checkout.generateToken(bag.id, {
        type: 'cart',
      })
      setCheckoutToken(token)
    } else {
      navigate('/bag')
    }
  }

  // useEffect(() => {
  //   if (bag.id) {
  //     const generateToken = async () => {
  //       try {
  //         const token = await commerce.checkout.generateToken(bag.id, {
  //           type: 'cart',
  //         })

  //         setCheckoutToken(token)
  //       } catch {
  //         if (activeStep !== steps.length) navigate('/bag')
  //       }
  //     }

  //     generateToken()
  //   }
  // }, [bag])

  console.log(checkoutToken);
   
  const nextStep = () =>
    setActiveStep((previousActiveStep) => previousActiveStep + 1)
  const backStep = () =>
    setActiveStep((previousActiveStep) => previousActiveStep - 1)

  const next = (data) => {
    setShippingData(data)
    nextStep()
  }

  let Confirmation = () => order.customer ? (
        <>
        <div className='py-3 px-4'>
          <h5 className='text-center'>
            Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}!
          </h5>
          <hr style={{ borderTop: '3px solid #bbb' }} />
          <h6 className='text-center mb-0'>Order ref: {order.customer_reference}</h6>
          <br />
        <Link to='/'>
          <Button variant='dark' className='d-flex mx-auto'>Continue Shopping</Button>
        </Link>
        </div>  
      </> 
    ) : (
       
       <Spinner/>
    )

  if (error) {
     Confirmation = () => (
      <Container className='text-center'>
        <h5>Error: {error}</h5>
        <br />
        <Link to='/'>
          <Button variant='dark'>Back to Home</Button>
        </Link>
      </Container>
     )
  }

  const Form = () =>
    activeStep === 0 ?  ( <AddressForm checkoutToken={checkoutToken} next={next}/> ) : 
     ( <PaymentForm shippingData={shippingData} checkoutToken={checkoutToken} nextStep={nextStep} backStep={backStep}
      onCaptureCheckout={onCaptureCheckout}/>
    )

  return (
    <CheckoutWrapper>
      <div className='backdrop'>
         <div className='jumbotron jumbotron-fluid py-5'>
           <div className='d-flex justify-content-center text-center align-items-center'>
             <div className='overlay mt-lg-5'>
               <div className='py-5 text-center'>
                 <h1 className='mt-lg-5 py-lg-5'>ORDER FUFILLMENT</h1>
               </div>
             </div>
           </div>
         </div>
       </div>
      
      <Container fluid >
        <div className='push-up py-5 mt-5'>
        <Row className='mt-5 px-2 px-lg-4'>
          <Col lg={6} md={6} className='border-lg-end border-secondary'>
            <h4 className='text-center fw-bold'>Checkout</h4>
            <Stepper
              activeStep={activeStep}
              steps={[
                { label: 'Shipping address' },
                { label: 'Payment details' },
              ]}>
            </Stepper> 
            {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
          </Col>
          <Col lg={4} md={6} className='mx-auto'> 
          <div className='mx-auto py-5 mt-5'>
            <Link to='/accessories'>
            <Image fluid src='https://res.cloudinary.com/ceenobi/image/upload/v1627861195/Gadgets/dbrand1_gov3ic.jpg' alt='dbrandskin'
            className='mt-5 mb-3'/>
            </Link>
            <h>Do visit our accessories page and get the best skin covering for your mobile device.</h>
          </div>
          </Col>
        </Row> 
         </div>  
      </Container>
     
    </CheckoutWrapper>
  )
}

const CheckoutWrapper = styled.div`
  .backdrop {
    background: url('https://res.cloudinary.com/ceenobi/image/upload/v1636538781/Gadgets/brando-makes-branding-smTDI-z1rlY-unsplash_ypg2gp.jpg');
    background-size: cover;
    height: 200px;
  }
  .push-up {
    background-color: var(--lightNeon);
  }
  .casing {
    width: 30rem;
    height: 20rem;
  }
  @media (min-width: 992px) {
    .backdrop {
      height: 500px;
    }
    .push-u {
      transform: translateY(-20%);
    }
  }
`
