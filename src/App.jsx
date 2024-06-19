import React from 'react'
import "./App.css";
import { useState } from 'react';
const App = () => {
  
const person=[
  {name:"Ajay", age:"20", img:"https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"},
  {name:"Sai" , age:"20" ,img:"https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"},
  {name:"Sai"  ,age:"20" ,img:"https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"}
]
  return (
    
    <div className='App'>

   
   {person.map((usr)=>(
    <Welcome1 name = {usr.name} age={usr.age} img={usr.img}/>
   ))}
   
    </div>
  )
}

// function Welcome(props){
//   console.log(props)
// return(
//   <h1>Hi {props.name} </h1>  
// )
// }

function Welcome1(props){
  console.log(props)
return(
  <>
  <div>
  <img className="Photo" src={props.img} />
  <h1>{props.name}</h1>
  <Counter/>
  </div>
  </>
  
)
}

function Counter(){
  //let like= 10;
  const [ like , setLike]=useState(0);
  const [ dislike , setDislike]=useState(0);
  console.log(like);
  console.log(dislike);
  return(
  <>

    <button onClick = {() => {
     setLike(like+1);

    }}>👍{like}</button>

  <button onClick = {() => {
     setDislike(dislike+1);
    }}>👎{dislike}</button>
    
  </>)
}


// function Sample({lk}){

//   return(
//     <>
//      <div>Like value is {lk}</div>
//     </>
//   )
// }
// function Sample1({dlk}){

//   return(
//     <>
//      <div>Dislike value is {dlk}</div>
//     </>
//   )
// }
export default App