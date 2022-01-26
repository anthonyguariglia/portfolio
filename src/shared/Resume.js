/* eslint-disable multiline-ternary */
/* eslint-disable no-tabs */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const Resume = (props) => {
  return (
    <Modal
      {...props}
      // size="lg"
      className='resume-modal'
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <a className='resume-link' target='_blank' rel='noreferrer' href='https://drive.google.com/file/d/1RxVumwkM816B6eNBkpgI6x_joaNRqkkI/view?usp=sharing'><img className='resume-image' src='https://i.imgur.com/5njw9g0.png?1' /></a>
      {/* <Modal.Body className='resume-modal'>
        <a target='_blank' rel='noreferrer' href='https://drive.google.com/file/d/1RxVumwkM816B6eNBkpgI6x_joaNRqkkI/view?usp=sharing'><img className='resume-image' src='https://i.imgur.com/5njw9g0.png?1' /></a>
      </Modal.Body> */}
      {/* <Modal.Footer>
        <Button className='btn-success' onClick={() => console.log('download')}>Download</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  )
}

export default Resume
