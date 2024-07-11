import React, { useState } from 'react'

function Tiktaktoe() {

    const[board,setBoard] = useState([

       null,

       null,

       null,

       null,

       null,

       null,

       null,

       null,

       null


    ]);

 const[isXTurn,setIsXTurn] = useState(true)
    const handleClick = (index) => {
        console.log("board", index)
        console.log("boardIndex", board[index])
        const boardcopy = [...board]
        boardcopy[index]- isXTurn? "X" : "O"
        console.log(boardcopy)
        setBoard(boardcopy)
        setIsXTurn(!isXTurn)
    }

  return (
    <div className='full-game'>
        <h1>Tiktaktoe</h1> 
    <div className='board'> 
        {board.map((val, index)=>(
            <GameBox key = {index} val={val} onPlayClick={()=> handleClick(index)}/>
        ))}
         </div>    
    </div>
  )
}
 function GameBox({val , onPlayClick}){
   const styles = {
    color: val === "X" ? "green":"red"
   }
    return(
<div className='game-box' style={styles} onClick={onPlayClick}>{val}</div>
    ) 
 }
export default Tiktaktoe