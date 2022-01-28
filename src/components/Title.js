/* eslint-disable multiline-ternary */
/* eslint-disable no-tabs */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Resume from '../shared/Resume'
import Scroll from 'react-scroll'
const scroller = Scroll.scroller

const Title = props => {
  const [showResume, setShowResume] = useState(false)

  const scrollTo = (element) => {
    scroller.scrollTo(element, {
      duration: 500,
      delay: 0,
      smooth: true // 'easeInOutQuart'
    })
  }

  return (
    <>
      <Container fluid className='title-page top'>
        <Row className='filler-div'>
          <Col></Col>
        </Row>
        <Row>
          <Col className='title'>
            <h1 className='name'><strong>ANTHONY</strong></h1>
            <h1 className='last-name'><strong>GUARIGLIA</strong></h1>
            <div className='subheading'>
              <p className='title-details'>Software Developer | Electrical Engineer</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <nav className='nav-bar'>
              <li className='nav-items' ><a className='project-button' href='#' onClick={() => { scrollTo('projects') }} >PROJECTS</a></li>
              <li className='bullet'>.</li>
              <li className='nav-items'><a className='project-button' href='#' onClick={() => setShowResume(true)}>RESUME</a><Resume show={showResume} onHide={() => setShowResume(false)}/></li>
              <li className='bullet'>.</li>
              <li className='nav-items'><a className='project-button' href='#' onClick={() => { scrollTo('contact') }}>CONTACT</a></li>
            </nav>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='filler-div title-logo-holder'>
              <a target='_blank' rel='noreferrer' href='https://github.com/anthonyguariglia' className='title-logo-box'><img className='title-logos' src='https://icongr.am/devicon/github-original.svg?size=40' /></a>
              <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/anthonyguariglia/' className='title-logo-box'><img className='title-logos' src='https://i.imgur.com/axzogcf.png'/></a>
            </div>
          </Col>
        </Row>
        <Row className='half-filler-div'>
          <Col></Col>
        </Row>
      </Container>
    </>
  )
}

export default Title
