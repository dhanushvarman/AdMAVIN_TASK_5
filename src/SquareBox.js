import React, { useState } from "react";

function SquareBox({ size, style }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  const squareStyle = {
    width: size + "px",
    height: size + "px",
    backgroundColor: "#ccc",
    border: "1px solid black",
    position: "relative",
    ...style,
  };

  const childSquareStyle = {
    position: "absolute",
    border: "1px solid black",
    zIndex: 1,
  };

  if (clicked) {
    return (
      <div style={squareStyle}>
        <SquareBox
          size={size / 2}
          style={{ ...childSquareStyle, top: 0, left: 0 }}
        />
        <SquareBox
          size={size / 2}
          style={{ ...childSquareStyle, top: 0, right: 0 }}
        />
        <SquareBox
          size={size / 2}
          style={{ ...childSquareStyle, bottom: 0, left: 0 }}
        />
        <SquareBox
          size={size / 2}
          style={{ ...childSquareStyle, bottom: 0, right: 0 }}
        />
      </div>
    );
  }

  return <div className="square-box" style={squareStyle} onClick={handleClick} />;
}

export default SquareBox;
