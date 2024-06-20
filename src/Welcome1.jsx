import React from 'react';
import { Counter } from './Counter';

// function Welcome(props){
//   console.log(props)
// return(
//   <h1>Hi {props.name} </h1>  
// )
// }
export function Welcome1(props) {
  console.log(props);
  return (
    <>
      <div>
        <img className="Photo" src={props.img} />
        <h1>{props.name}</h1>
        <Counter />
      </div>
    </>

  );
}
