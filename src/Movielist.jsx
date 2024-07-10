import React, { useState } from 'react';
import { Movie } from './Movie';
import { Initial_Movie_name } from './App';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Addmovies from './Addmovies';

export function Movielist({MovieList,setMovieList}) {
  return (
    <div>
       <div className='movie-list'>
      {MovieList.map((mv, index) => (
        <Movie key={index} movie={mv} id={index}/>
      ))}
    </div>
    </div>
  );

}
