import { useEffect, useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Movie from './Movie';
import React from 'react';
import MovieList from './MovieList';

// import Movie from './Movie';

function Home() {
  const [movieData, setMovieData] = useState([]);

  //'https://movies-api-swqe.onrender.com/trending'
  // `${process.env.REACT_APP_SERVER_URL}/trending`

  async function logMovies() {
    const URL = process.env.REACT_APP_SERVER_URL;
    const response = await fetch(`${URL}/trending`);
    // console.log('Response:', response);

    const movies = await response.json();
    console.log('movies printed');
    setMovieData(movies);
    // console.log('inside logMovies', movies);
  }

  useEffect(() => {
    logMovies();
    console.log('inside use effect', movieData);
  }, []);

  return (
    <div>
      <h2 style={{ marginBottom: '30px', marginTop: '30px' }}>
        {' '}
        Trending Movies{' '}
      </h2>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          marginBottom: '100px',
        }}
      >
        <MovieList moviesData={movieData} />
      </div>
    </div>
  );
}

export default Home;

/* {movieData.map((movie) => (
          <Movie
            key={movie.id}
            title={movie.title}
            overview={movie.overview}
            img={movie.poster_path}
            date={movie.release_date}
          />
        ))} */
