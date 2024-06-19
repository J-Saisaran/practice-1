import React from 'react';
import { useState } from 'react';

export function Counter() {
  //let like= 10;
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  console.log(like);
  console.log(dislike);
  return (
    <>

      <button onClick={() => {
        setLike(like + 1);

      }}>👍{like}</button>

      <button onClick={() => {
        setDislike(dislike + 1);
      }}>👎{dislike}</button>

    </>);
}
