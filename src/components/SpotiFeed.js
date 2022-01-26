/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Container, Row, Col, Modal, Button } from 'react-bootstrap'

import { SpotiFeedModal } from '../shared/modals'

const SpotiFeed = props => {
  const [modalShow, setModalShow] = useState(false)
  // console.log(props)
  return (
    <>
      <Container bsPrefix className='spotifeed' onClick={() => props.showModal(true)} >
        <Row>
          <Col>
            <p className='heading'>SpotiFeed</p>
          </Col>
        </Row>
        <Row>
          <Col className='big-images'>
            <img className='mostRecentTracks' src='https://i.imgur.com/kPM1FaV.png' />
          </Col>
        </Row>
        {/* <Row className='links'>
          <Col>
            <img className='deployed' src='https://icongr.am/feather/link.svg?size=128' />
          </Col>
          <Col>
            <div className='github' src='https://icongr.am/feather/github.svg?size=128'></div>
          </Col>
        </Row> */}
      </Container>
    </>
  )
}

export default SpotiFeed
