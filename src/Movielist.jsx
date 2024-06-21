import React from 'react';
import { Movie } from './Movie';
import { Initial_Movie_name } from './App';

export function Movielist() {
  const MovieList = Initial_Movie_name;
  return (
    <div className='movie-list'>
      {MovieList.map((mv, index) => (
        <Movie key={index} movie={mv} />
      ))}
    </div>


  );

}
