import React from "react";

const AboutBox = () => {
  return (
    <div className="flex justify-center items-center w-full h-[40vh]">
      <p className="text-center w-3/4 leading-relaxed text-lg text-[#6F4119]">
        <b>Oofy Jute</b> is a Market Leader in providing variety of world class
        Jute Bags and has also emerged as one of India's Leading Home Furnishing
        & Lifestyle Products Brand designer offering premium and designer
        products across multiple other categories that includes Home Furnishing,
        Home Decor, 100% Premium Cotton Towels, Jute Bags, Potli, Decorative
        Jute Baskets, and more.
      </p>
      <img className="absolute z-[-1] scale-125" src="./quote.svg" alt="" />
    </div>
  );
};

export default AboutBox;
