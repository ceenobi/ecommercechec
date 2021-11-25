import React from 'react'
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import {Form, Button} from 'react-bootstrap'
import Review from '../Review';
import styled from 'styled-components'

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)

export default function PaymentForm({checkoutToken, shippingData, onCaptureCheckout, nextStep, backStep}) {

    const handleSubmit = async (event, elements, stripe) => {
      event.preventDefault();
      if (!stripe || !elements) return

      const cardElement = elements.getElement(CardElement)
      const { error, paymentMethod } = await stripe.createPaymentMethod({type: 'card', card: cardElement})

      if (error) {
        console.log('[error]',error)
      } else {
        const orderData = {
          line_items: checkoutToken.live.line_items,
          customer: {
            firstname: shippingData.firstName,
            lastname: shippingData.lastName,
            email: shippingData.email,
          },
          shipping: {
            name: 'Details',
            street: shippingData.address1,
            town_city: shippingData.city,
            county: shippingData.SubDivision,
            postal_zip_code: shippingData.zip,
            country: shippingData.shippingCountry,
          },
          fulfillment: { shipping_method: shippingData.shippingOption },
          payment: {
            gateway: 'stripe',
            stripe: {
              payment_method_id: paymentMethod.id,
            }
          }
        }
        onCaptureCheckout(checkoutToken.id, orderData)
        nextStep()
      }
    }

    return (
      <PaymentWrap>
        <div>
        <Review checkoutToken={checkoutToken} />
        <div className="d-lg-flex flex-column">
          <h5 style={{ padding: '20px 0' }} className='fw-bold'>
          Payment method
        </h5>
        <Elements stripe={stripePromise}>
            <ElementsConsumer className='container'>
                {({elements, stripe})=> (
                    <Form className='text-center py-3 px-4 bg-white shadow' onSubmit={(e)=> handleSubmit(e, elements,stripe)}>
                        <CardElement/>
                        <br/>
                        <br/>
                        <div style={{ display:'flex', justifyContent: 'space-between'}}>
                            <Button variant="danger" onClick={backStep}>Back</Button>
                             <Button variant="success mx-3" type='submit' disabled={!stripe}>
                                 Pay {checkoutToken.live.subtotal.formatted_with_symbol}
                             </Button>
                        </div>
                    </Form>
                )}
            </ElementsConsumer>
        </Elements>
        </div> 
        </div>    
      </PaymentWrap>
    )
}

export const PaymentWrap = styled.div`
  @media (min-width: 992px) {
    display: flex;
    justify-content: center;
    padding-top: rem;
  }
`