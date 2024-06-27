import React, { useState } from 'react';
import { Counter } from './Counter';
import { useNavigate } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



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

      <IconButton color='primary' aria-label="Info" onClick={() => setShow(!show)}>
        {show ? <ExpandLessIcon  /> : <ExpandMoreIcon/>}
      </IconButton>
      {/* <button onClick={() => setShow(!show)}>{show ? <ExpandLessIcon  /> : <ExpandMoreIcon/>}</button> */}

      <IconButton color='primary' aria-label="Info" onClick={()=> navigate("/movies/" + id)}>
      <InfoIcon/>
</IconButton>
      {show ? <p className='movie-Summary'>{movie.Summary}</p> : ""}
      <div className='movie-button'>
        <Counter />
        <button className='playbutton'> ▶️ Watch now</button>
      </div>
    </div>

  );
}
