import React from 'react';
import { useParams } from 'react-router-dom';

export function MovieDetails({MovieList}) {
  console.log(MovieList)
  const { movieid } = useParams();
  return (
    <h1>Moviedetails page - {movieid}</h1>
  );
}
