import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const BankRoll = props => {
  return (
    <>
      <Container bsPrefix className='bankroll' onClick={() => props.showModal(true)}>
        <Row>
          <Col>
            <p className='heading'>BankRoll</p>
          </Col>
        </Row>
        <Row>
          <Col className='big-images'>
            <img className='mostRecentTracks' src='https://i.imgur.com/DYs9kDQ.png' />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default BankRoll
