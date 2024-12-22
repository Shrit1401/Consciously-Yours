import React from "react";
import { motion } from "framer-motion";

const AboutComponent = () => {
  return (
    <motion.div className="h-[100vh] sm:h-[80vh] flex flex-col gap-5 justify-center items-center background-stuff px-4 md:px-10 lg:px-20">
      <h1 className="text-6xl  lg:text-9xl font-semibold roch">About Us</h1>
      <p className="text-center font-semibold text-xl md:text-xl lg:text-2xl px-4 md:px-10 lg:px-20">
        Embrace eco-luxury at Consciously Yours India. Where every jute bag
        tells a story of ethical elegance and environmental responsibility.
      </p>
      <p className="text-center font-semibold text-xl md:text-xl lg:text-2xl px-4 md:px-10 lg:px-20">
        From timeless classics to contemporary marvels, our curated collection
        embodies the essence of India's golden fibre, offering a glimpse into
        the soul of a nation. We take pride in showcasing the finest creations,
        handcrafted with love, and exported with care to adorn shoulders
        worldwide.
      </p>
      <p className="text-center font-semibold text-xl md:text-xl lg:text-2xl px-4 md:px-10 lg:px-20">
        Explore export opportunities from India with us and let's unite as
        Vasudhaiva Kutumbakam 'One Earth, One Future'.
      </p>

      <a href="/about" className="btn mt-4 md:mt-6 lg:mt-8">
        Know More About Us
      </a>
    </motion.div>
  );
};

export default AboutComponent;
