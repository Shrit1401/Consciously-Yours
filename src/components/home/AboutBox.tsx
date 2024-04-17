import React from "react";

const AboutBox = () => {
  return (
    <div className="flex justify-center items-center w-full h-[70vh] sm:h-[40vh]">
      <p className="text-center w-full sm:w-3/4 leading-relaxed text-lg text-[#6F4119]">
        Step into the realm of sustainable sophistication! We believe in the
        timeless appeal of jute, offering to eco-conscious alternatives for
        fashion-forward consumers around the globe. From chic totes to versatile
        crossbody bags, each piece in our collection is meticulously crafted
        with love and dedication. Join us in embracing eco-conscious fashion
        while making a positive impact on the planet, one jute bag at a time.
      </p>
      <img className="absolute z-[-1] scale-125" src="./quote.svg" alt="" />
    </div>
  );
};

export default AboutBox;
