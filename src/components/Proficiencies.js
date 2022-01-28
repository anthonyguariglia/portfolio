/* eslint-disable multiline-ternary */
/* eslint-disable no-tabs */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import React from 'react'
import { Container, Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap'

const Proficiencies = props => {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      <>
        <span>{props}</span>
      </>
    </Tooltip>
  )

  return (
    <Container fluid className='software-proficiencies'>
      <Row className='half-filler-div'>
      </Row>
      <Row className='filler-div about-col'>
        <Col><p className='proficiencies'>Software Proficiencies</p></Col>
      </Row>
      <Row>
        <Col className='logos logos-alt' />
        <Col className='logos'>
          <OverlayTrigger
            placement="top"
            delay={{ show: 25 }}
            overlay={renderTooltip('JavaScript')}
            name='JavaScript' >
              <img className='logo-pic' src='https://icongr.am/devicon/javascript-original.svg?size=128' />
          </OverlayTrigger>
        </Col>
        <Col className='logos'>
        <OverlayTrigger
            placement="top"
            delay={{ show: 25 }}
            overlay={renderTooltip('JQuery')} >
          <img className='logo-pic' src='https://icongr.am/devicon/jquery-plain-wordmark.svg?size=128' />
        </OverlayTrigger>
        </Col>
        <Col className='logos'>
        <OverlayTrigger
            placement="top"
            delay={{ show: 25 }}
            overlay={renderTooltip('CSS/SCSS')} >
          <img className='logo-pic' src='https://icongr.am/devicon/css3-original-wordmark.svg?size=128&color=a64dff' />
        </OverlayTrigger>
        </Col>
        <Col className='logos'>
        <OverlayTrigger
            placement="top"
            delay={{ show: 25 }}
            overlay={renderTooltip('Bootstrap')} >
          <img className='logo-pic' src='https://icongr.am/devicon/bootstrap-plain-wordmark.svg?size=128&color=a64dff' />
        </OverlayTrigger>
        </Col>
        <Col className='logos logos-alt' />
      </Row>
      <Row>
        <Col className='logos logos-alt' />
        <Col className='logos'>
        <OverlayTrigger
            placement="top"
            delay={{ show: 25 }}
            overlay={renderTooltip('GitHub')} >
          <img className='logo-pic' src='https://icongr.am/devicon/github-original-wordmark.svg?size=128' />
        </OverlayTrigger>
        </Col>
        <Col className='logos'>
        <OverlayTrigger
            placement="top"
            delay={{ show: 25 }}
            overlay={renderTooltip('Heroku')} >
          <img className='logo-pic' src='https://icongr.am/devicon/heroku-original.svg?size=128' />
        </OverlayTrigger>
        </Col>
        <Col className='logos'>
        <OverlayTrigger
            placement="top"
            delay={{ show: 25 }}
            overlay={renderTooltip('React')} >
          <img className='logo-pic' src='https://icongr.am/devicon/react-original-wordmark.svg?size=128' />
        </OverlayTrigger>
        </Col>
        <Col className='logos'>
        <OverlayTrigger
            placement="top"
            delay={{ show: 25 }}
            overlay={renderTooltip('MongoDB')} >
          <img className='logo-pic' src='https://icongr.am/devicon/mongodb-original-wordmark.svg?size=128' />
        </OverlayTrigger>
        </Col>
        <Col className='logos logos-alt' />
      </Row>
      <Row>
        <Col className='logos logos-alt' />
        <Col className='logos'>
        <OverlayTrigger
            placement="top"
            delay={{ show: 25 }}
            overlay={renderTooltip('NodeJS')} >
          <img className='logo-pic' src='https://icongr.am/devicon/nodejs-original-wordmark.svg?size=128' />
        </OverlayTrigger>
        </Col>
        <Col className='logos'>
        <OverlayTrigger
            placement="top"
            delay={{ show: 25 }}
            overlay={renderTooltip('Express')} >
          <img className='logo-pic' src='https://icongr.am/devicon/express-original-wordmark.svg?size=128' />
        </OverlayTrigger>
        </Col>
        <Col className='logos'>
        <OverlayTrigger
            placement="top"
            delay={{ show: 25 }}
            overlay={renderTooltip('Python')} >
          <img className='logo-pic' src='https://icongr.am/devicon/python-original.svg?size=128' />
          </OverlayTrigger>
        </Col>
        <Col className='logos'>
        <OverlayTrigger
            placement="top"
            delay={{ show: 25 }}
            overlay={renderTooltip('C++')} >
          <img className='logo-pic' src='https://icongr.am/devicon/cplusplus-original.svg?size=128' />
        </OverlayTrigger>
        </Col>
        <Col className='logos logos-alt' />
      </Row>
      <Row className='half-filler-div'>
        <Col>
        </Col>
      </Row>
    </Container>
  )
}

export default Proficiencies
