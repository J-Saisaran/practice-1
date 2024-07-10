import {React,useRef, useState} from "react"

function Ref() {
    const inputref= useRef()

     
    
     const handleInputChange= () =>{

        console.log("handleInputChange",inputref.current.value)
     }
     const handleSubmit= () =>{
        console.log(inputref.current.value)

     }
    return (
    <div>
        <h1>Ref</h1>
        <input type="text" ref={inputref} onChange={handleInputChange}/>
        <button onClick={handleSubmit}>Get value</button>
        
        </div>
  )
}

export default Ref