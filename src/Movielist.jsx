import React, { useState } from 'react';
import { Movie } from './Movie';
import { Initial_Movie_name } from './App';

export function Movielist() {
  const [MovieList,setMovieList] = useState(Initial_Movie_name);
  const [name,setName]=useState("")
  const [rating,setRating]=useState("")
  const [poster,setposter]=useState("")
  const [Summary,setSummary]=useState("")
  return (
    <div>
      <div className='add-movie-form'>
      <input type="text" value={name}
          onChange={(event) => setName(event.target.value)} placeholder='Movie Name'/>
          <input type="text" value={poster}
          onChange={(event) => setposter(event.target.value)} placeholder='Image Source'/>
          <input type="text" value={rating}
          onChange={(event) => setRating(event.target.value)} placeholder='Give Rating'/>
          <input type="text" value={Summary}
          onChange={(event) => setSummary(event.target.value)} placeholder='Add Summary'/>
<button onClick={() => {
  const newMovie={
    name,
    poster,
    rating,
    Summary
  }
  setMovieList([...MovieList, newMovie])
  
  }}>Add movie</button>
      </div>
      <div className='movie-list'>
      {MovieList.map((mv, index) => (
        <Movie key={index} movie={mv} id={index}/>
      ))}
    </div>
    </div>


  );

}
