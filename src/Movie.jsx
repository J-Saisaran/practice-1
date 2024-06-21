import React, { useState } from 'react';
import { Counter } from './Counter';
import { useNavigate } from 'react-router-dom';
export function Movie({ movie , id}) {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  const ratingStyles = {
    color: movie.rating <= 4.5 ? "red" : "green"
  };

  return (
    <div className='movie-card'>
      <img className='movie-poster' src={movie.poster} alt={movie.name} />
      <div className='movie-spec'>
        <h2>{movie.name} - {id} </h2>
        <h3 style={ratingStyles}>⭐{movie.rating}</h3>
      </div>
      <button onClick={() => setShow(!show)}>{show ? "less" : "more"}</button>
      <button onClick={()=> navigate("/movies/" + id)}>Info</button>
      {/* //<p style={summaryStyle} className='movie-Summary'>{movie.Summary}</p> */}
      {show ? <p className='movie-Summary'>{movie.Summary}</p> : ""}
      <div className='movie-button'>
        <Counter />
        <button className='playbutton'> ▶️ Watch now</button>
      </div>
    </div>

  );
}
