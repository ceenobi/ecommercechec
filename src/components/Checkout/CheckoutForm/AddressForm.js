import { useState, useEffect} from "react"
import {Form, Row,Col, Container, Button} from 'react-bootstrap'
import {commerce} from '../../../lib/Commerce'
import { Link } from 'react-router-dom'
import { useForm} from 'react-hook-form'
import styled from 'styled-components'


export default function AddressForm({ checkoutToken, next }) {
   const [shippingCountries, setShippingCountries] = useState([])
   const [shippingCountry, setShippingCountry] = useState('')
   const [shippingSubDivisions, setShippingSubdivsions] = useState([])
   const [shippingSubdivision, setShippingSubdivsion] = useState('')
   const [shippingOptions, setShippingOptions] = useState([])
   const [shippingOption, setShippingOption] = useState('')
  const countries = Object.entries(shippingCountries).map(([code,name])=>({id:code, label:name}))
  const subdivisions = Object.entries(shippingSubDivisions).map(([code,name])=>({id:code, label:name}))
  const options = shippingOptions.map((sO)=> ({id: sO.id, label:`${sO.description} - (${sO.price.formatted_with_symbol})`}))
  
  const { register, handleSubmit, formState: { errors }} = useForm();

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId)
    setShippingCountries(countries)
    setShippingCountry(Object.keys(countries)[0])
  }

  const fetchSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode)
    setShippingSubdivsions(subdivisions)
    setShippingSubdivsion(Object.keys(subdivisions)[0])
  }

  const fetchShippingOptions = async (checkoutTokenId,country,region = null) => {
    const options = await commerce.checkout.getShippingOptions(checkoutTokenId,{ country, region })
    setShippingOptions(options)
    setShippingOption(options[0].id)
  }

   useEffect(() => {
     fetchShippingCountries(checkoutToken.id)
   }, [checkoutToken.id])

   useEffect(() => {
     if (shippingCountry) fetchSubdivisions(shippingCountry)
   }, [shippingCountry])

   useEffect(() => {
     if (shippingSubdivision) fetchShippingOptions(checkoutToken.id,shippingCountry,shippingSubdivision)
   }, [shippingSubdivision,checkoutToken.id,shippingCountry])


  return (
    <FSize>
        <Container className='size py-5 px- mt-lg-5'>
        <Form onSubmit={handleSubmit((data) =>next({...data,shippingCountry,shippingSubdivision,shippingOption}))}>
          <Row>
            <Col xs={12} lg={6} className='mx-auto mb-2'>
              <Form.Label className='mx-2'>First Name</Form.Label>
              <Form.Control {...register('firstName', { required: true, maxLength: 20 })}
              placeholder="John"/>
              {errors.firstName?.type === 'required' && "First name is required"}
            </Col>
            <Col xs={12} lg={6} className='mx-auto mb-2'>
              <Form.Label className='mx-2'>Last Name</Form.Label>
              <Form.Control {...register('lastName', { required: true, maxLength: 20 })}
              placeholder="Ownatek"/>
              {errors.lastName?.type === 'required' && "Last name is required"}
            </Col>          
          </Row>
          <Row>
            <Col lg={6} className='mx-auto mb-2'>
              <Form.Label className='mx-2'>Email</Form.Label>
              <Form.Control {...register('email', { required: true })} 
              placeholder="owner@ownatek.com"/>
              {errors.email?.type === 'required' && "Email is required"}
            </Col>
            <Col xs={12} lg={6} className='mx-auto mb-2'>
              <Form.Label className='mx-2'>Address</Form.Label>
              <Form.Control {...register('address1', { required: true })} 
              placeholder="Heaven"/>
              {errors.address1?.type === 'required' && "Address is required"}
            </Col>
          </Row>
          <Row>
            <Col lg={6} className='mx-auto mb-2'>
              <Form.Label className='mx-2'>City</Form.Label>
              <Form.Control {...register('city', { required: true })} 
              placeholder="sin"/>
              {errors.city?.type === 'required' && "City is required"}
            </Col>
            <Col lg={6} className='mx-auto mb-2'>
              <Form.Label  className='mx-2'>ZIP / Postal code</Form.Label>
              <Form.Control {...register('zip', { required: true })} 
              placeholder="0000"/>
              {errors.zip?.type === 'required' && "Zip / Postalcode is required"}
            </Col>
             </Row>
            <Row>
            <Col lg={6} className='mx-auto mb-2'>
              <Form.Label>Shipping Country</Form.Label>
              <Form.Select value={shippingCountry} onChange={(e) => setShippingCountry(e.target.value)}>
                {countries.map((country) => (
                  <option key={country.id} value={country.id}>
                    {country.label}
                  </option>
                ))}
              </Form.Select>
            </Col>
            <Col lg={6} className='mx-auto mb-2'>
              <Form.Label>Shipping Subdivision</Form.Label>
              <Form.Select value={shippingSubdivision}onChange={(e) => setShippingSubdivsion(e.target.value)}>
                {subdivisions.map((subdivision) => (
                  <option key={subdivision.id} value={subdivision.id}>
                    {subdivision.label}
                  </option>
                ))}
              </Form.Select>
            </Col>
            </Row>
         
          <Row>
            <Col lg={6} className=' mb-2'>
              <Form.Label>Shipping Options</Form.Label>
              <Form.Select value={shippingOption} onChange={(e) => setShippingOption(e.target.value)}>
                {options.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </Form.Select>
            </Col>
          </Row>
          <div className='d-flex justify-content-evenly mt-5'>
            <Link to='/bag'>
              <Button variant='dark'>Back to Bag</Button>
            </Link>
            <Button type='submit' variant='success'>
              Next
            </Button>
          </div>
      </Form>
       </Container>
    </FSize>
  )
}
export const FSize = styled.div`
  .size {
    background-color: var(--lightWhite);
  }
  @media (min-width: 992px) {
    .size {
      width: !important;
    }
  }
`