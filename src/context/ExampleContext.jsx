import {React, createContext, useContext} from 'react'

const NameContext = createContext()

function ExampleContext() {
    const name = "jack"
  return (
    <NameContext.Provider value={name}>
        <div>
       <Sample/>
       <Sample1/>
    </div>
    </NameContext.Provider>
     )
 
}

function Sample(){
    const name = useContext(NameContext)
    return(
        <div><h1>hey i am {name}</h1></div>
    )
}

function Sample1(){
    const name = useContext(NameContext)
    
    return(
        <div><h1>hey i am {name}</h1></div>
    )
}

export default ExampleContext