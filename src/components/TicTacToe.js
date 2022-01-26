import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const TicTacToe = props => {
  return (
    <>
      <Container bsPrefix className='tictactoe' onClick={() => props.showModal(true)}>
        <Row>
          <Col>
            <p className='heading'>Tic Tac Toe</p>
          </Col>
        </Row>
        <Row>
          <Col className='big-images'>
            <img className='mostRecentTracks' src='https://i.imgur.com/vLk4eCt.png' />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default TicTacToe
