import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const OuiChat = props => {
  return (
    <>
      <Container bsPrefix className='ouichat' onClick={() => props.showModal(true)}>
        <Row>
          <Col>
            <p className='heading'>Oui Chat</p>
          </Col>
        </Row>
        <Row>
          <Col className='big-images'>
            <img className='ouichat-pic' src='https://i.imgur.com/abPNR2c.png' />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default OuiChat
