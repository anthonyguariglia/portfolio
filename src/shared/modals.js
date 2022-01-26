/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
import React from 'react'
import { Container, Row, Col, Modal, Button } from 'react-bootstrap'

export const SpotiFeedModal = (props) => {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          SpotiFeed
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col>
              <h3 className='modaltitle'>
                A news-feed style display of your Spotify data
              </h3>
            </Col>
          </Row>
          <Row className='modal-text-content'>
            <p>
              SpotiFeed provides a way for Spotify users to see the recent uploads of their followed artists in a news-feed style display. Once signed in, the app allows the user to log into their Spotify account and then pulls their followed artists, finds their most recent singles and albums, and displays them in descending chronological order.
            </p>
          </Row>
          <Row>
            <Col className='small-images'>
              <img className='playlist' src='https://i.imgur.com/kPM1FaV.png' />
            </Col>
          </Row>
          <Row className='modal-mid-text-content'>
            <p>
              Once the most recent tracks have been pulled, the user is able to create their own playlists to store their favorite tracks. They can name their playlists as they like, add and remove songs and albums as they please, and their playlists will remain unchanged as their recent uploads evolve over time.
            </p>
          </Row>
          <Row>
            <Col className='small-images col-3'>
              <img className='playlist-aside' src='https://i.imgur.com/LWIqCFx.png' />
            </Col>
            <Col className='small-images col-9'>
              <img className='playlist' src='https://i.imgur.com/gXgFsth.png' />
            </Col>
          </Row>
          <Row className='modal-bottom-text-content'>
            <p>
              The end result is an app that lets users stay up-to-date with their favorite artists without the hassle of checking in on them one at a time.
            </p>
            <p className='note'>
              Note: Because SpotiFeed is still an app in development, each Spotify user&apos;s email must be registered before use. To get around this, I&apos;ve created a &apos;dummy&apos; Spotify account that can be used for testing, or you can reach out and I&apos;ll add your email to the list! Shoot me a message via the &apos;Contact&apos; section to learn more.
            </p><p className='note-alt'>
              Account email: spotifeed.user@gmail.com
            </p><p className='note-alt'>
              Account password: Sp0t!f33d
            </p>
          </Row>
          <Row className='links'>
            <Col>
              <button className='deployedSite' onClick={() => window.open('https://anthonyguariglia.github.io/SpotiFeed-Client/')}>
                <span>Deployed Site</span><img className='deployed' src='https://icongr.am/feather/link.svg?size=128' />
              </button>
            </Col>
            <Col>
              <button className='gitHubLink' onClick={() => window.open('https://github.com/anthonyguariglia/SpotiFeed-Client')}>
                <img className='github' src='https://icongr.am/feather/github.svg?size=128' /><span>GitHub Link</span>
              </button>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export const TicTacToeModal = props => {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Tic Tac Toe
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col>
              <h3 className='modaltitle'>
                A fresh take on a classic doodle-game
              </h3>
            </Col>
          </Row>
          <Row className='modal-text-content'>
            <p>
            This application creates a playable and responsive version of the common doodle-game of Tic Tac Toe. The game allows a user to play against themself or a friend and visually select the square on which they would like to make their move, while subsequently seeing the UI update with the symbol and space of their choice.
            </p>
          </Row>
          <Row>
            <Col className='small-images'>
              <img className='playlist theme' src='https://i.imgur.com/QrMCxuF.png' />
            </Col>
          </Row>
          <Row>
            <Col className='small-images'>
              <img className='playlist theme stacked' src='https://i.imgur.com/sAGKYrj.png' />
            </Col>
          </Row>
          <Row className='modal-mid-text-content'>
            <p>
              Additionally, the user can choose to play against a  person or a computer. If the computer is selected, the user can then choose to play against one of two difficulties, and then select their desired symbol.
            </p>
          </Row>
          <Row>
            <Col className='small-images'>
              <img className='playlist theme' src='https://i.imgur.com/fHgz4yn.png' />
            </Col>
          </Row>
          <Row>
            <Col className='small-images'>
              <img className='playlist theme stacked' src='https://i.imgur.com/M0O7DC1.png' />
            </Col>
          </Row>
          <Row className='modal-mid-text-content'>
            <p>
              As a style touch, the user can select their desired theme by clicking the color wheel in the top left corner, and choosing the color scheme they like most. The game will immediately update to reflect their selection.
            </p>
          </Row>
          <Row>
            <Col className='small-images col-6'>
              <img className='playlist-aside theme' src='https://i.imgur.com/aDxivUF.png' />
            </Col>
            <Col className='small-images col-6'>
              <img className='playlist theme' src='https://i.imgur.com/uQcu4gC.png' />
            </Col>
          </Row>
          <Row className='links'>
            <Col>
              <button className='deployedSite' onClick={() => window.open('https://anthonyguariglia.github.io/game-project/')}>
                <span>Deployed Site</span><img className='deployed' src='https://icongr.am/feather/link.svg?size=128' />
              </button>
            </Col>
            <Col>
              <button className='gitHubLink' onClick={() => window.open('https://github.com/anthonyguariglia/game-project')}>
                <img className='github' src='https://icongr.am/feather/github.svg?size=128' /><span>GitHub Link</span>
              </button>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export const PortfolioModal = props => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Personal Software Portfolio
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <h4 className='modaltitle'><i>Because templates are over rated!</i></h4>
          </Col>
        </Row>
        <Row className='modal-text-content'>
          <p>
            Designed using React, this website is a portfolio piece in itself! As my time at General Assembly has waned, I chose to apply the new front-end techniques I have learned to design a modern, responsive representation of my work.
          </p>
        </Row>
        <Row>
          <Col className='small-images col-8'>
            <img className='proficiencies-image' src='https://i.imgur.com/Jn8REAr.png' />
          </Col>
          <Col className='side-images col-4'>
            <img className='contact-image' src='https://i.imgur.com/dpUx1uO.png' />
            <img className='project-image' src='https://i.imgur.com/lh9QqGq.png' />
          </Col>
        </Row>
        <Row className='modal-mid-text-content'>
          <p>
            I wanted to design something interactive, and something that at a glance looked like it was done professionally, without spending weeks on it. React offered a great way to do this, creating components for the major visual blocks and using the React-Bootstrap library for some of the more dynamic elements.
          </p>
          <p>
            This website organizes each major visual block as a React component, and uses Modals for all of the pop-up display features. Additional styling is done in SCSS to add some flavor to the site. The finished product is a simple yet organized representation of my front-end skills, and of my creative design side as a whole.
          </p>
          <p>
            Of course there is always room for improvement, so if you have any suggestions, please drop me a message in the contact section below. Any and all feedback is appreciated!
          </p>
        </Row>
        <Row className='links'>
          <Col className='github-div'>
            <button className='gitHubPortfolioLink' onClick={() => window.open('https://github.com/anthonyguariglia/portfolio')}>
              <img className='github' src='https://icongr.am/feather/github.svg?size=128' /><span className='gitHub-link'>GitHub Link</span>
            </button>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>

  )
}

export const OuiChatModal = props => {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Oui Chat
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <h4 className='modaltitle'>A simple instant-messaging app to use with friends</h4>
          </Col>
        </Row>
        <Row className='modal-text-content'>
          <p>
            This application utilizes the Socket IO library to recreate the modern instant-messaging web app. A new user is able to register an account with the username and profile image of their choice, and will then be placed into Oui Chat&apos;s lobby screen, where they can create and name a room of their choosing. They are able to see the users who are currently registered (and online!) on the server, and manually add each user to their room. Once added, the users can utilize Socket IO&apos;s instant messaging capability to stay in touch. 
          </p>
        </Row>
        <Row>
          <Col className='small-images'>
            <img className='playlist' src='https://i.imgur.com/iYyFjxv.png' />
          </Col>
        </Row>
        <Row className='modal-mid-text-content'>
          <p>
            Although more technically advanced than anything I had done prior, the real challenge of this application was that it was done in a group of 5 students. As a group, we had 4 days to complete this project and all had to assign ourselves tasks to reach completion on time
          </p>
          <p>
            Having some prior experience using the Agile Scrum methodology, I took on the role of Scrum Master for this group. I handled all processes related to managing tickets, creating and merging pull requests, resolving conflicts, and merging feature branches to both the development and main branches. Additionally, I took on issues spanning both the front and back end, and pushed out a significant number of features alongside my Scrum duties
          </p>
          <p>
            To assist with the Scrum operations, a Kanban board was created using GitHub&apos;s &apos;projects&apos; tab feature. This allowed each of our team members to create issues for tasks that needed to be resolved, and for the group to track those issues through to completion. Relevant PRs were attached to each issue, and they were moved along from their respective repos (front or back end), to &apos;in progress&apos;, &apos;in review&apos;, and finally &apos;closed&apos;.
          </p>
        </Row>
        <Row>
          <Col className='small-images'>
            <img className='playlist' src='https://i.imgur.com/wcVGidl.png?1' />
          </Col>
        </Row>
        <Row className='modal-mid-text-content'>
          <p>
            The final ressult is a useful chat app that allows you to create chat rooms with your friends and instantly message with them. Feel free to create an account and check it out for yourself!
          </p>
        </Row>
        <Row className='links'>
          <Col>
            <button className='deployedSite' onClick={() => window.open('https://ga-git-good.github.io/chat-app/')}>
              <span>Deployed Site</span><img className='deployed' src='https://icongr.am/feather/link.svg?size=128' />
            </button>
          </Col>
          <Col>
            <button className='gitHubLink' onClick={() => window.open('https://github.com/ga-git-good/chat-app')}>
              <img className='github' src='https://icongr.am/feather/github.svg?size=128' /><span>GitHub Link</span>
            </button>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}
