import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

function FavList() {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  async function handleFavMovie() {
    // Fetch data from the database
    const URL = `${process.env.REACT_APP_SERVER_URL}/favorite`;
    const response = await fetch(URL);
    console.log('response', response);

    const data = await response.json();
    setFavoriteMovies(data);
  }
  console.log(favoriteMovies);
  useEffect(() => {
    handleFavMovie();
  }, []);

  async function handleDelete(id) {
    const URL = `${process.env.REACT_APP_SERVER_URL}/movie/${id}`;
    let response = await fetch(URL, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.status === 204) {
      alert('deleted successfully');
    }
    handleFavMovie();
  }

  //===========================
  async function handleUpdate(newComment, id) {
    const URL = `${process.env.REACT_APP_SERVER_URL}/movie/${id}`;
    let data = {
      Comment: newComment,
    };
    let response = await fetch(URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    let receivedData = await response.json();
    console.log(receivedData);
    if (response.status === 200) {
      alert('Your comment updated successfully');
      handleFavMovie();
    }
  }
  //===================================

  return (
    <div>
      {favoriteMovies.map((movie, id) => (
        <Card key={id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={movie.img} />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>{movie.overview}</Card.Text>
            <Form.Group>
              <Form.Control
                type="text"
                onChange={(e) => handleUpdate(movie.id, e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={() => handleDelete(movie.id)}>
              Delete
            </Button>
            <Button
              variant="primary"
              onClick={(e) => handleUpdate(movie.id, e.target.value)}
            >
              {' '}
              Update
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default FavList;
