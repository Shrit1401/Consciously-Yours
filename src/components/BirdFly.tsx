import React from "react";

const BirdFly = () => {
  return (
    <div style={{ display: "flex", height: "2vh" }} className="pb-8">
      <img
        src="./bird.gif"
        style={{
          overflowX: "hidden",
        }}
        className="w-[3rem] h-[3rem] bird"
        alt="bird"
      />
    </div>
  );
};

export default BirdFly;
