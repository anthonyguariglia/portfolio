/* eslint-disable */
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const About = props => {
  return (
    <Container fluid className='about'>
      <Row className='filler-div'>
      </Row>
      <Row className='filler-div'>
        <Col><p className='about-text'>About Me</p></Col>
      </Row>
      <Row>
        <Col className='about-me'>
          <Row className='about-me-col'>
            <section className='about-me-text'>
              <p>
                Hello! My name is Anthony Guariglia and I am currently a software developer operating out of Boston, MA. With a background in electrical engineering and a B.S.E.E. from Northeastern University, I leverage a wide background
                of skills to deliver effective and efficient solutions to complex
                problems.
                
                
                {/* software developer who leverages a wide background
                of skills to deliver effective and efficient solutions to complex
                problems. With a background in electrical engineering, I am a
                skilled debugger who emphasizes attention to detail and risk
                mitigation. I am an avid problem-solver and use a creative
                problem-solving methodology to find both rapid and robust
                solutions to difficult tasks. I welcome new challenges and enjoy
                collaborating with team members to find the best solution. Most of
                all, I’m a personable and collaborative employee who puts team
                success above personal gain, and strive to be an essential member
                of any team I’m a part of. */}
              </p>
              <p>
                With experience developing products both from the hardware and software side, I know what&apos;s involved in pushing a project through from concept to completion. Although new to the all-software realm, I'm an avid problem solver with a demonstrated ability to tackle difficult tasks.
              </p>
              <p>
                Below you'll find an overview of the tools I use and the projects those tools have created. I hope you'll find everything you're looking for, and if not, please reach out via the &apos;Contact&apos; section!
              </p>
            </section>
          </Row>
          <Row className='about-me-col'>
            <img className='about-me-image' src='https://i.imgur.com/yCZcw4O.jpg' />
          </Row>
        </Col>
      </Row>
      <Row className='filler-div'>
        <Col></Col>
      </Row>
    </Container>
  )
}

export default About
