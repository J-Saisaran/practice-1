import React from 'react';

export function Colorbox({ color }) {
  const styles = {
    width: "500px", height: "100px",
    backgroundColor: color,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  };

  return (
    <div style={styles}></div>
  );
}
