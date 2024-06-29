import React from 'react';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowLeftSharpIcon from '@mui/icons-material/ArrowLeftSharp';
import { useNavigate } from 'react-router-dom';

export function MovieDetails({MovieList}) {
  
  const { movieid } = useParams();
  const navigate = useNavigate();
 
  const movie= MovieList[movieid]
  return (

    <div>  
<div className='moviedetailcard'>
<iframe width="100%" height="430" src="" title={movie.title} frameborder="0" ></iframe>
      <div className='movie-spec'>
        <h2>{movie.name}</h2>
        <h3>⭐{movie.rating}</h3>
      </div>
      <p className='movie-Summary'>{movie.Summary}</p>
      </div>
      <div>
      <Button variant="contained" startIcon={<ArrowLeftSharpIcon/>} onClick={() => navigate(-1)}>
      
       Back
      </Button>
      </div>
    </div>
   
    
  );
}
