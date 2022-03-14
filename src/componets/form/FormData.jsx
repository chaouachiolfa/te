import React from 'react'
import {Button, Form} from 'react-bootstrap'
import './Form.css'

const FormData = () => {
  return (
    <div className='color'>
      <h1>HELLO</h1>
        <Form className='title'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className='for'>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label className='for'>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check className='chek' type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit" className='sub'>
    Submit
  </Button>
</Form>
    </div>
  )
}

export default  FormData;