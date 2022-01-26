import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const PortfolioProject = props => {
  return (
    <>
      <Container bsPrefix className='portfolio-project' onClick={() => props.showModal(true)} >
        <Row>
          <Col>
            <p className='heading'>Personal Portfolio</p>
          </Col>
        </Row>
        <Row>
          <Col className='big-images'>
            <img className='mostRecentTracks' src='https://i.imgur.com/RxPOWZC.png' />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default PortfolioProject
