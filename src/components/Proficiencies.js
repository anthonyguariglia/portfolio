/* eslint-disable multiline-ternary */
/* eslint-disable no-tabs */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import React from 'react'
import { Container, Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap'

const Proficiencies = props => {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {console.log(props)}
      <>
        <span>{props}</span>
      </>
    </Tooltip>
  )

  return (
    <Container fluid className='software-proficiencies'>
      <Row className='half-filler-div'>
      </Row>
      <Row className='filler-div'>
        <Col><p className='proficiencies'>Software Proficiencies</p></Col>
      </Row>
      <Row>
        <Col className='logos' />
        <Col className='logos'>
          <OverlayTrigger
            placement="top"
            delay={{ show: 25 }}
            overlay={renderTooltip('JavaScript')}
            name='JavaScript' >
              <img src='https://icongr.am/devicon/javascript-original.svg?size=128' data-toggle="tooltip" data-placement="top" />
          </OverlayTrigger>
        </Col>
        <Col className='logos'>
        <OverlayTrigger
            placement="top"
            delay={{ show: 25 }}
            overlay={renderTooltip('JQuery')} >
          <img src='https://icongr.am/devicon/jquery-plain-wordmark.svg?size=128' />
        </OverlayTrigger>
        </Col>
        <Col className='logos'>
        <OverlayTrigger
            placement="top"
            delay={{ show: 25 }}
            overlay={renderTooltip('CSS/SCSS')} >
          <img src='https://icongr.am/devicon/css3-original-wordmark.svg?size=128&color=a64dff' />
        </OverlayTrigger>
        </Col>
        <Col className='logos'>
        <OverlayTrigger
            placement="top"
            delay={{ show: 25 }}
            overlay={renderTooltip('Bootstrap')} >
          <img src='https://icongr.am/devicon/bootstrap-plain-wordmark.svg?size=128&color=a64dff' />
        </OverlayTrigger>
        </Col>
        <Col className='logos' />
      </Row>
      <Row>
        <Col className='logos' />
        <Col className='logos'>
        <OverlayTrigger
            placement="top"
            delay={{ show: 25 }}
            overlay={renderTooltip('GitHub')} >
          <img src='https://icongr.am/devicon/github-original-wordmark.svg?size=128' />
        </OverlayTrigger>
        </Col>
        <Col className='logos'>
        <OverlayTrigger
            placement="top"
            delay={{ show: 25 }}
            overlay={renderTooltip('Heroku')} >
          <img src='https://icongr.am/devicon/heroku-original.svg?size=128' />
        </OverlayTrigger>
        </Col>
        <Col className='logos'>
        <OverlayTrigger
            placement="top"
            delay={{ show: 25 }}
            overlay={renderTooltip('React')} >
          <img src='https://icongr.am/devicon/react-original-wordmark.svg?size=128' />
        </OverlayTrigger>
        </Col>
        <Col className='logos'>
        <OverlayTrigger
            placement="top"
            delay={{ show: 25 }}
            overlay={renderTooltip('MongoDB')} >
          <img src='https://icongr.am/devicon/mongodb-original-wordmark.svg?size=128' />
        </OverlayTrigger>
        </Col>
        <Col className='logos' />
      </Row>
      <Row>
        <Col className='logos' />
        <Col className='logos'>
        <OverlayTrigger
            placement="top"
            delay={{ show: 25 }}
            overlay={renderTooltip('NodeJS')} >
          <img src='https://icongr.am/devicon/nodejs-original-wordmark.svg?size=128' />
        </OverlayTrigger>
        </Col>
        <Col className='logos'>
        <OverlayTrigger
            placement="top"
            delay={{ show: 25 }}
            overlay={renderTooltip('Express')} >
          <img src='https://icongr.am/devicon/express-original-wordmark.svg?size=128' />
        </OverlayTrigger>
        </Col>
        <Col className='logos'>
        <OverlayTrigger
            placement="top"
            delay={{ show: 25 }}
            overlay={renderTooltip('Python')} >
          <img src='https://icongr.am/devicon/python-original.svg?size=128' />
          </OverlayTrigger>
        </Col>
        <Col className='logos'>
        <OverlayTrigger
            placement="top"
            delay={{ show: 25 }}
            overlay={renderTooltip('C++')} >
          <img src='https://icongr.am/devicon/cplusplus-original.svg?size=128' />
        </OverlayTrigger>
        </Col>
        <Col className='logos' />
      </Row>
      <Row className='half-filler-div'>
        <Col>
        </Col>
      </Row>
    </Container>
  )
}

export default Proficiencies
