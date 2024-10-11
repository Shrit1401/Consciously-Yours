import React from "react";

const BirdFly = () => {
  return (
    <div style={{ display: "flex" }}>
      <img src="./bird.gif" className="w-20 h-20 bird invert" />
      <img src="./bird.gif" className="w-20 h-20 bird-2 invert-0" />
      <img src="./bird.gif" className="w-20 h-20 bird-3 invert" />
      <img src="./bird.gif" className="w-20 h-20 bird-4 invert-0" />
      <img src="./bird.gif" className="w-20 h-20 bird-5 invert" />
    </div>
  );
};

export default BirdFly;
