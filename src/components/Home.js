import { useEffect, useState } from 'react';
import React from 'react';
import MovieList from './MovieList';
// import Movie from './Movie';

function Home() {
  const [movieData, setMovieData] = useState([]);

  async function logMovies() {
    const URL = process.env.REACT_APP_SERVER_URL;
    const response = await fetch(`${URL}/trending`);
    // console.log('Response:', response);

    const movies = await response.json();
    setMovieData(movies);
  }
  // will get the new object with comment
  function commentHandler(newComment, id) {
    // console.log(newComment, id, 'from home component');
    movieData.map((movie) => {
      if (movie.id === id) {
        movie.comment = newComment.userComment;
        return movie;
      } else {
        return movie;
      }
    });
    console.log('Comment Handler', movieData);
  }

  useEffect(() => {
    logMovies();
    // console.log('inside use effect', movieData);
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
        <MovieList moviesData={movieData} commentHandler={commentHandler} />
      </div>
    </div>
  );
}

export default Home;
