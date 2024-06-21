import React, { useState } from 'react';
import { Colorbox } from './Colorbox';

export function Addcolor() {

  const [color, setColor] = useState("cyan");
  //const colorList=["red","green","blue"]
  const [colorList, setColorList] = useState(["red", "green", "blue", "skyblue"]);

  const inputStyles = {
    fontSize: "25px",
    backgroundColor: color
  };
  return (
    <div>
      <div className='addColor'>
        <input style={inputStyles} type="text"
          value={color}
          onChange={(event) => setColor(event.target.value)} />

        <button onClick={() => setColorList([...colorList, color])}>Add color</button>
      </div>

      
      
        {colorList.map((clr, index) => (
          <Colorbox key={index} color={clr} />
        ))}

        {/* <Colorbox color={colorList[0]} />
            <Colorbox color={colorList[1]} />
            <Colorbox color={colorList[2]} /> */}
      
    </div>
  );
}
