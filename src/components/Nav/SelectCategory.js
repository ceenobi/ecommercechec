import React from 'react'
import {Form} from 'react-bootstrap/'

export default function SelectCategory({ onChange, selectedCategory, categories }) {
  return (
    <>
      <Form.Control className='formControl'>
        <Form.Select value={selectedCategory.id} onChange={onChange}>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </Form.Select>
      </Form.Control>
    </>
  )
}
