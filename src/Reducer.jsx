import React, { useReducer } from 'react'

function Reducer() {
    const[state, dispatch]= useReducer(() => {},{
        name:"Jack",
        password:"12345"        
    })
  return (
    <div>Reducer
        <h1>{state.name}</h1>
        <h1>{state.password}</h1>
        </div>
  )
}

export default Reducer