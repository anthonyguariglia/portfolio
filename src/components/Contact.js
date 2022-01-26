import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
// import axios from 'axios'
// import { authorize } from '../auth'

const Contact = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({
      name: name,
      email: email,
      message: message
    })

    window.open(`mailto:aguariglia197@gmail.com?subject=Portfolio Inquiry from ${name} at ${email}&body=${message}`)
  }

  return (
    <section className='col-4 mx-auto'>
      <div className='filler-div' />
      <h3 className='contact-title'>Contact Me!</h3>
      <Form className='form-contact' onSubmit={handleSubmit}>
        <Form.Group className='form-name' >
          <Form.Label>Name</Form.Label>
          <Form.Control
            className='form-text-input'
            required
            type='name'
            name='name'
            value={name}
            placeholder='Enter your name'
            onChange={e => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='form-email-address'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            className='form-text-input'
            required
            type='email'
            name='email'
            value={email}
            placeholder='Enter email address'
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='form-message'>
          <Form.Label>Message</Form.Label>
          <Form.Control
            className='form-message-input'
            required
            as="textarea"
            type='message'
            name='message'
            value={message}
            placeholder='Type your message...'
            onChange={e => setMessage(e.target.value)}
          />
        </Form.Group>
        <a href='#' className='email-link'><button className='form-submit-button' type='submit'>Submit</button></a>
      </Form>
      <div className='filler-div' />
      <div className='half-filler-div'></div>
    </section>
  )
}

export default Contact
