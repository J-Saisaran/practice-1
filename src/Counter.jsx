import React from 'react';
import { useState } from 'react';

export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  
  return (
   


      <div>
        <button onClick={() => {
        setLike(like + 1);
      }}>👍{like}</button>

      <button onClick={() => {
        setDislike(dislike + 1);
      }}>👎{dislike}</button>
      </div>

    );
}
{/* <button
        onClick={() => {
          setLike(like + 1);
          // console.log(like);
        }}
      >
        👍 {like}
      </button> */}
      {/* <button
        onClick={() => {
          setDislike(dislike + 1);
          // console.log(dislike);
        }}
      >
        👎 {dislike}
      </button> */}
      {/* <Sample lk={like} /> */}