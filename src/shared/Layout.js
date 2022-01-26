/* eslint-disable multiline-ternary */
/* eslint-disable no-tabs */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import Router from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Title from '../components/Title'
import About from '../components/About'
import Proficiencies from '../components/Proficiencies'
import SpotiFeed from '../components/SpotiFeed'
import TicTacToe from '../components/TicTacToe'
import PortfolioProject from '../components/Portfolio'
import Contact from '../components/Contact'
import OuiChat from '../components/OuiChat'
import { SpotiFeedModal, TicTacToeModal, PortfolioModal, OuiChatModal } from './modals'
import { Prev } from 'react-bootstrap/esm/PageItem'

const Layout = props => {
  const [spotiFeedModalShow, setSpotiFeedModalShow] = useState(false)
  const [ticTacToeModalShow, setTicTacToeModalShow] = useState(false)
  const [portfolioModalShow, setPortfolioModalShow] = useState(false)
  const [ouiChatModalshow, setOuiChatModalShow] = useState(false)

  return (
    <>
      <Title />
      <About />
      <Proficiencies />
      <Container fluid className='projects'>
        <div className='filler-div large-heading'>
          <p className=''>Projects</p>
        </div>
        <Row>

          <Col className='project-box' >
            <OuiChat showModal={setOuiChatModalShow} />
          </Col>
          <OuiChatModal show={ouiChatModalshow} onHide={() => setOuiChatModalShow(false)} />

          <Col className='project-box' >
            <PortfolioProject showModal={setPortfolioModalShow} />
          </Col>
          <PortfolioModal show={portfolioModalShow} onHide={() => setPortfolioModalShow(false)} />

        </Row>
        <Row>

          <Col className='project-box' >
            <SpotiFeed showModal={setSpotiFeedModalShow} />
          </Col>
          <SpotiFeedModal show={spotiFeedModalShow} onHide={() => setSpotiFeedModalShow(false)} />

          <Col className='project-box' >
            <TicTacToe showModal={setTicTacToeModalShow} />
          </Col>
          <TicTacToeModal show={ticTacToeModalShow} onHide={() => setTicTacToeModalShow(false)} />

        </Row>
        <Row className='filler-div'></Row>
      </Container>
      <Container fluid className='contact'>
        <Contact />
      </Container>
    </>
  )
}

export default Layout
