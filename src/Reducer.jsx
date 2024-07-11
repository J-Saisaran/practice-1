import React, { useReducer } from 'react'

function Reducer() {
    const[state, dispatch]= useReducer((state, action) => {
      if (action.type === "nameUpdate"){
        return{
          ...state,
          name:action.value
        }
      }
      if (action.type === "Deletename"){
        return{
          ...state,
          name: null
        }
    }
    if (action.type === "updatepass"){
      return{
        ...state,
        password: action.value
      }
  }
  if (action.type === "increment"){
    return{
      ...state,
      btn: state.btn + 1 
    }
}
if (action.type === "decrement"){
  return{
    ...state,
    btn: state.btn - 1
  }
}
  },{
        name:"Jack",
        password:"12345",
        btn: 1      
    })
  return (
    <div>Reducer
        <h1>{state.name}</h1>
        <h1>{state.password}</h1>
        <h1>{state.btn}</h1>
        {/* password */}
        <input type="text"  onChange={(e) => dispatch({type:"updatepass", value : e.target.value})}/>
        {/* name */}
        <button onClick={() => dispatch({type:"nameUpdate", value : "John"})}>Get name</button>
        <button onClick={() => dispatch({type:"Deletename"})}> Delete name</button>
        {/* btn */}
        <button onClick={() => dispatch({type:"increment"})}>Increment</button>
        <button onClick={() => dispatch({type:"decrement"})}>Decrement</button>

        </div>
  )
}

export default Reducer