import React from "react";
import { motion } from "framer-motion";

const AboutBox = () => {
  return (
    <motion.div
      whileInView={{ scale: 1.05, opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ ease: "easeOut", duration: 2 }}
      className="flex flex-col justify-center items-center w-full h-[50vh] sm:h-[50vh] p-4"
    >
      <p className="text-center w-full max-w-[40rem] sm:w-3/4 leading-relaxed text-lg sm:text-2xl font-semibold text-[#050316]">
        Step into the realm of sustainable sophistication! We believe in the
        timeless appeal of jute, offering eco-conscious alternatives for
        fashion-forward consumers around the globe. From chic totes to versatile
        crossbody bags, each piece in our collection is meticulously crafted
        with love and dedication. Join us in embracing eco-conscious fashion
        while making a positive impact on the planet, one jute bag at a time.
      </p>
      <img
        className="absolute z-[-1] scale-125 w-24 h-24 sm:w-32 sm:h-32"
        src="./quote.svg"
        alt=""
      />
    </motion.div>
  );
};

export default AboutBox;
