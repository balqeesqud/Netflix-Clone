import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useRef } from 'react';
import { useState } from 'react';
import { Form } from 'react-bootstrap';

//steps for modal (passing functions )
//1. define the parent (Movie) & child (modal)
//2. take the use state functions to the parent and add them as property ex <Movie handleShow={handleShow}/>  and render it inside the parent, then pass it as props to child
// 3. change the required after passing the props to child

function ModalMovie({
  handleShow,
  handleClose,
  img,
  show,
  date,
  modalData,
  commentHandler,
}) {
  // props passed by by using destructuring // we can pass props and change {props.handleShow} etc..
  const [comment, setComment] = useState('');
  const commentRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const userComment = commentRef.current.value;

    console.log('modal data', modalData);

    const newMovie = { ...modalData, userComment };

    console.log('new movie', newMovie);
    setComment(userComment);

    commentHandler(newMovie, newMovie.id);
    console.log('comment', comment);
  }

  async function handleAddFav(event) {
    event.preventDefault();
    let URL = `${process.env.REACT_APP_SERVER_URL}/movie`; //post request as Backend
    let data = {
      movieTitle: modalData.title,
      year: modalData.release_date,
      overView: modalData.overview,
      comment: modalData.comment,
    };
    let response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    console.log(response);

    let receivedData = await response.json();
    console.log('receivedData', receivedData);
    if (response.status === 201) {
      alert('added successfully');
    }
  }
  return (
    <div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            {modalData.title}
            {modalData.date}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={modalData.img} alt={modalData.title} />
          {modalData.overview}
          <br /> <br />
          <Form onSubmit={(event) => handleSubmit(event)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Comment</Form.Label>
              <Form.Control
                ref={commentRef}
                type="text"
                placeholder="Add new Comment"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          {/* {modalData.comment ? modalData.comment : 'No Comment Added'} */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(event) => handleAddFav(event)}>
            Add to favorites
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalMovie;
