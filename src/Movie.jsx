import React, { useState } from 'react';
import { Counter } from './Counter';

export function Movie({ movie }) {
  const [show, setShow] = useState(true);
  const ratingStyles = {
    color: movie.rating <= 4.5 ? "red" : "green"
  };




  return (
    <div className='movie-card'>
      <img className='movie-poster' src={movie.poster} alt={movie.name} />
      <div className='movie-spec'>
        <h2>{movie.name}</h2>
        <h3 style={ratingStyles}>⭐{movie.rating}</h3>
      </div>
      <button onClick={() => setShow(!show)}>{show ? "less" : "more"}</button>
      {/* //<p style={summaryStyle} className='movie-Summary'>{movie.Summary}</p> */}
      {show ? <p className='movie-Summary'>{movie.Summary}</p> : ""}
      <div className='movie-button'>
        <Counter />
        <button className='playbutton'> ▶️ Watch now</button>
      </div>
    </div>

  );
}
