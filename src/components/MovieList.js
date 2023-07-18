import React from 'react';
import Movie from './Movie';

function MovieList({ moviesData, commentHandler }) {
  console.log(moviesData);
  console.log(commentHandler);
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        marginBottom: '100px',
      }}
    >
      {moviesData.map((movie) => (
        <Movie
          commentHandler={commentHandler} 
          data={movie}
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
