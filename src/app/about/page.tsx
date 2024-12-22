"use client";
import AboutTable from "@/components/home/AboutTable";

import React from "react";
import { motion } from "framer-motion";
import BirdFly from "@/components/BirdFly";
import Header from "@/components/Header";

const About = () => {
  return (
    <main>
      <div className="bg-[#341F18]">
        <BirdFly />
        <Header active="about" />
      </div>
      <div className="mx-5 sm:mx-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <h1 className="font-medium text-7xl roch">About Us</h1>
          <p className="text-center font-[600] text-xl">
            Eco-conscious jute bags from India marrying luxury and
            sustainability.{" "}
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "tween", ease: "easeInOut" }}
          className="flex justify-center items-center w-full"
        >
          <div className="text-center w-full sm:w-3/4 leading-relaxed font-[600] text-xl text-[#6F4119]">
            Embrace eco-luxury at Consciously Yours, India. Where every jute bag
            tells a story of ethical elegance and environmental responsibility.
            From timeless classics to contemporary marvels, our curated
            collection embodies the essence of India's golden fibre, offering a
            glimpse into the soul of a nation. We take pride in showcasing the
            finest creations, handcrafted with love and exported with care to
            adorn shoulders worldwide. Explore export opportunities from India
            with us and let's unite as 'One Earth, One Futute'.
          </div>
        </motion.div>
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          src="https://static.wixstatic.com/media/93357b_0b75ec457ab548b58b4d0a95fa36b089~mv2.png/v1/fill/w_1366,h_478,al_c,q_90,enc_auto/93357b_0b75ec457ab548b58b4d0a95fa36b089~mv2.png"
          className="w-full bg-cover py-10"
          alt=""
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center py-20"
        >
          <h1 className="font-medium text-7xl roch">Why Us?</h1>
          <p className="text-center font-[600] text-xl">
            Because we are consciously, taking care of you
          </p>
          <div className="flex justify-center items-center w-full mt-5">
            <div className="text-center w-full sm:w-3/4 leading-relaxed text-xl font-[600] text-[#6F4119]">
              We are Consciously Yours, where eco-luxury intertwines with
              artisanal aesthetics, shaping our exquisite range of jute bags,
              proudly made in India. As allies of the green movement, our B2B
              initiative is passionately committed to healing the planet. Each
              bag tells a story of environmental responsibility seamlessly
              blending style with conscientious craftsmanship. Join us as we
              export these eco-luxurious creations worldwide, extending the
              essence of India and inviting you to be a part of our journey
              towards preserving our precious planet. Let us together be
              Vasudhaiva Kutumbakam- ‘One Earth One Family’.
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center"
        >
          <h1 className="font-medium text-7xl roch">We Are</h1>
          <div className="flex justify-center items-center w-full mt-5">
            <div className="text-center w-full sm:w-3/4 leading-relaxed text-xl font-[600] text-[#6F4119]">
              <AboutTable />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center py-20"
        >
          <h1 className="font-bold text-7xl roch">Our Root Beliefs</h1>
          <div className="flex justify-center items-center w-full mt-5">
            <div className="text-center font-[600] w-full sm:w-3/4 leading-relaxed text-xl text-[#6F4119]">
              <ul className="list-none font-semibold">
                <li>1. Made in India. Made for the World.</li>
                <li>2. No plastics. Go Green.</li>
                <li>3. Sustainability is a mindset.</li>
                <li>4. Heal the Earth. Heal our Future.</li>
                <li>5. Vasudhaiva Kutumbakam - One Earth One Family.</li>
                <li>6. Conscious living is a way of life.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default About;
