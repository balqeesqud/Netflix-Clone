import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import { useState } from 'react';

//steps for modal (passing functions )
//1. define the parent (Movie) & child (modal)
//2. take the use state functions to the parent and add them as property ex <Movie handleShow={handleShow}/>  and render it inside the parent, then pass it as props to child
// 3. change the required after passing the props to child

function ModalMovie({
  handleShow,
  handleClose,
  show,
  title,
  overview,
  date,
  id,
}) {
  // props passed by by using destructuring // we can pass props and change {props.handleShow} etc..
  const [comment, setComment] = useState('');

  function handleComment(event) {
    setComment(event.target.value);
  }
  async function handleCommentSubmit() {
    const response = await fetch(`http://localhost:3001/comments/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ newcomment: comment }),
    });
    handleClose();
  }

  return (
    <div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            {title}
            {date}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {overview}
          <br /> <br />
          <textarea
            style={{
              width: '100%',
              height: '20%',
              textAlign: 'start',
              marginTop: '5px',
              paddingTop: '6px',
            }}
            type="text"
            placeholder="Enter your comment"
            onChange={handleComment}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCommentSubmit}>
            Add comment
          </Button>
          <Button variant="primary" onClick={handleClose}>
            close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalMovie;
