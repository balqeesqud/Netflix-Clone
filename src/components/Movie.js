import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import { useState } from 'react';
import ModalMovie from './ModalMovie';

function Movie(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Card
        style={{
          width: '300px',
          height: '90%',
          marginBottom: '20px',
          marginTop: '20px',
          marginLeft: '45px',
          display: '-ms-inline-grid',
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        {/* {props.poster_path} */}
        <Card.Img
          variant="top"
          src={props.img}
          alt={props.title}
          style={{ height: '250px' }}
        />

        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>
            {props.date}
          </Card.Text>
          <Button
            style={{
              padding: '7px',
              marginTop: '10px',
              marginBottom: '0 auto',
            }}
            onClick={handleShow}
            variant="dark"
          >
            Add to favorites
          </Button>
          <br />
          {/* <Button
            style={{
              padding: '7px',
              marginTop: '10px',
              marginBottom: '0 auto',
            }}
            onClick={handleShow}
            variant="btn btn-secondary"
          >
            Add to favorite list
          </Button> */}
        </Card.Body>
      </Card>
      <ModalMovie
        id={props.id} //
        handleClose={handleClose}
        handleShow={handleShow}
        show={show}
        title={props.title}
        overview={props.overview}
        img={props.poster_path}
        date={props.release_date}
      />
    </div>
  );
}

export default Movie;
