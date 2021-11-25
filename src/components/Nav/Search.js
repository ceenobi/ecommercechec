import React from 'react'
import { useState } from 'react'
import {Modal , FormControl, InputGroup}from 'react-bootstrap'
import styled from 'styled-components'
// import {commerce} from '../../lib/Commerce'
// import ProductContainer from '../Shop/ProductContainer'
// import SelectCategory from './SelectCategory'

export default function Search({ searchResult, setSearchResult, onAddToBag }) {
  const [show, setShow] = useState(false)
  // const defaultCategory = { id: 0, name: 'All' }
  // const [keyword, setKeyword] = React.useState('')
  // const [resultMessage, setResultMessage] = React.useState('')
  // const [selectedCategory, setSelectedCategory] = React.useState(defaultCategory)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  // const handleInputChange = (event) => {
  //   if (!keyword || !event.target.value) {
  //     setResultMessage('')
  //     setSearchResult([])
  //     setSelectedCategory(defaultCategory)
  //   }
  //   setKeyword(event.target.value)
  // }

  

  // const onSubmit = async (e) => {
  //   e.preventDefault()
  //   if (!keyword) {
  //     setResultMessage('You have to enter a product name')
  //   }
  //   if (keyword) {
  //     try {
  //       const categoryId = selectedCategory.id
  //         ? { category_id: selectedCategory.id }
  //         : {}
  //       const { data } = await commerce.products.list({
  //         query: keyword,
  //         ...categoryId,
  //       })
  //       if (!data) {
  //         setResultMessage('No result match')
  //         setSearchResult([])
  //         return
  //       }
  //       setResultMessage('')
  //       setSearchResult(data)
  //     } catch (error) {
  //       setSearchResult([])
  //     }
  //   }
  // }

  return (
    <>
      <i
        className='bi bi-search align-self-center mx-2'onClick={handleShow}></i>
       <Modal show={show} onHide={handleClose} size='' className='top-right'>
        {/* <Modal.Header closeButto>
          <Modal.Title> <i className='bi bi-search'/> </Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <SearchForm>
            <InputGroup size='sm' className='mb-3' onSubmit={''}>
              <i
                className='bi bi-search mx-3 align-self-center'
                type='submit'
              />
              {/* <SelectCategory
                categories={[defaultCategory, ...categories]}
                selectedCategory={selectedCategory}
                onChange={handleSelectChange}
              /> */}
              <FormControl
                aria-label='Small'
                aria-describedby='inputGroup-sizing-sm'
                placeholder='What are you looking for?'
                onChange={''}
              />
              {/* {resultMessage && (
                <p className='result-message'>{resultMessage}</p>
              )}
              {searchResult.length && (
                <Container>
                  <Row>
                    {searchResult.map((product) => (
                      <Col key={product.id} lg={3} xs={12} sm={6} md={4}>
                        <ProductContainer
                          product={product}
                          onAddToBag={onAddToBag}
                        />
                      </Col>
                    ))}
                  </Row>
                </Container>
              )} */}
            </InputGroup>
          </SearchForm>
        </Modal.Body>
      </Modal>
    </>
  )
}

const SearchForm = styled.div`
input.form-control {
  border-top: none!important;
  border-left: none!important;
  border-right: none!important;
  border-bottom: 1px solid black;
  border-radius: 0 !important;
}`