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
import BankRoll from '../components/BankRoll'
import { SpotiFeedModal, TicTacToeModal, PortfolioModal, OuiChatModal, BankRollModal } from './modals'
import { Prev } from 'react-bootstrap/esm/PageItem'
import Scroll from 'react-scroll'
const Element = Scroll.Element
const scroller = Scroll.scroller

const Layout = props => {
  const [spotiFeedModalShow, setSpotiFeedModalShow] = useState(false)
  const [ticTacToeModalShow, setTicTacToeModalShow] = useState(false)
  const [portfolioModalShow, setPortfolioModalShow] = useState(false)
  const [ouiChatModalshow, setOuiChatModalShow] = useState(false)
  const [bankRollModalshow, setBankRollModalShow] = useState(false)

  return (
    <>
      <Title />
      <About />
      <Proficiencies />
      <Element name='projects' >
        <Container fluid className='projects'>
          <div className='filler-div large-heading'>
            <p className='project-text'>Projects</p>
          </div>
          <Row className='project-row'>
            <Col className='project-box' >
              <BankRoll showModal={setBankRollModalShow} />
            </Col>
            <BankRollModal show={bankRollModalshow} onHide={() => setBankRollModalShow(false)} />

          </Row>
          <Row className='project-row'>

            <Col className='project-box' >
              <OuiChat showModal={setOuiChatModalShow} />
            </Col>
            <OuiChatModal show={ouiChatModalshow} onHide={() => setOuiChatModalShow(false)} />

            <Col className='project-box' >
              <PortfolioProject showModal={setPortfolioModalShow} />
            </Col>
            <PortfolioModal show={portfolioModalShow} onHide={() => setPortfolioModalShow(false)} />

          </Row>
          <Row className='project-row'>

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
      </Element>
      <Element name='contact'>
        <Container fluid className='contact'>
          <Contact />
        </Container>
      </Element>
    </>
  )
}

export default Layout
