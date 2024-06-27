import React, { useState } from 'react';
import { Movie } from './Movie';
import { Initial_Movie_name } from './App';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function Movielist() {
  const [MovieList,setMovieList] = useState(Initial_Movie_name);
  const [name,setName]=useState("")
  const [rating,setRating]=useState("")
  const [poster,setposter]=useState("")
  const [Summary,setSummary]=useState("")
  return (
    <div>
      <div className='add-movie-form'>
      <TextField id="outlined-basic" label="Movie Name" variant="outlined" value={name}
      onChange={(event) => setName(event.target.value)}/>
      <TextField id="outlined-basic" label="Image Source" variant="outlined" value={poster}
      onChange={(event) => setposter(event.target.value)}/>
      <TextField id="outlined-basic" label="Give Rating" variant="outlined" value={rating}
       onChange={(event) => setRating(event.target.value)}/>
      <TextField id="outlined-basic" label="Add Summary" variant="outlined" value={Summary}
      onChange={(event) => setSummary(event.target.value)}/>

<Button variant="contained"
onClick={() => {
  const newMovie={
    name,
    poster,
    rating,
    Summary
  }
  setMovieList([...MovieList, newMovie])
  
  }}

>Add movie</Button>


{/* <button onClick={() => {
  const newMovie={
    name,
    poster,
    rating,
    Summary
  }
  setMovieList([...MovieList, newMovie])
  
  }}>Add movie</button> */}
      </div>


      <div className='movie-list'>
      {MovieList.map((mv, index) => (
        <Movie key={index} movie={mv} id={index}/>
      ))}
    </div>
    </div>


  );

}
