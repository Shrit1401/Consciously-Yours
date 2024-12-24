import React from "react";

type BirdFlyProps = {
  notheight?: boolean;
};

const BirdFly = ({ notheight }: BirdFlyProps) => {
  return (
    <div
      style={{ display: "flex", height: notheight ? "auto" : "2vh" }}
      className=""
    >
      <img
        src="./../bird.gif"
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
