import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';

function FavList() {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  async function handleFavMovie() {
    // Fetch data from the database
    const URL = `${process.env.REACT_APP_SERVER_URL}/movie`;
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
  async function handleUpdate(comment, id) {
    const URL = `${process.env.REACT_APP_SERVER_URL}/movie/${id}`;
    let data = {
      newcomment: comment, // left side should be the same as body sent in backend
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

      setFavoriteMovies((prevState) =>
        prevState.map((movie) => {
          if (movie.id === id) {
            return { ...movie, data }; // Update the comment of the specific movie
          }
          return movie;
        })
      );
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
            <Card.Text>{movie.overview.substring(1, 200)}</Card.Text>
            <br />
            <Card.Text>{movie.comment}</Card.Text>

            {/* <Form.Group>
              <Form.Control type="text" />
            </Form.Group> */}
            <Button variant="primary" onClick={() => handleDelete(movie.id)}>
              Delete
            </Button>
            <Button
              variant="primary"
              // handleUpdate(e.target.value, movie.id)
              onClick={(e) => {
                const comment = prompt('Enter the updated comment:');
                if (comment !== null && comment.trim() !== '') {
                  handleUpdate(comment, movie.id);
                }
              }}
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
