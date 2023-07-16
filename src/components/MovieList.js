import React from 'react';
import Movie from './Movie';

// import ReactDOM from 'react-dom';

function MovieList({ moviesData }) {
  console.log(moviesData);
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        marginBottom: '100px',
      }}
    >
      {moviesData &&
        moviesData.map((movie) => (
          <Movie
            key={movie.id}
            title={movie.title}
            overview={movie.overview}
            img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            date={movie.release_date}
          />
        ))}
    </div>
  );
}

export default MovieList;
