"use client";
import AboutTable from "@/components/AboutTable";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <main>
      <Header active="about" />
      <div className="mx-5 sm:mx-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <h1 className="font-medium text-5xl">About Us</h1>
          <p className="opacity-70 text-[0.8em] sm:text-[1rem]">
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
          <div className="text-center w-full sm:w-3/4 leading-relaxed text-lg text-[#6F4119]">
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
          <h1 className="font-medium text-5xl">Why Us?</h1>
          <p className="opacity-70 mt-[0.1rem] text-[0.8em] sm:text-[1rem]">
            Because we are consciously, taking care of you
          </p>
          <div className="flex justify-center items-center w-full mt-5">
            <div className="text-center w-full sm:w-3/4 leading-relaxed text-lg text-[#6F4119]">
              {/* <b>Oofy Jute</b> is a Market Leader in providing variety of
              world-class jute bags to customers in India and globally. We are
              supporting the local Jute artisans and delivering the best quality
              jute bags to people worldwide so that together we can reduce the
              usage of plastic bags and replace it with eco-friendly jute bags.
              Our jute bags are 100% natural and helps in protecting environment
              and conserving nature.
              <div className="text-left">
                <ul className="list-disc">
                  <li>Wide Range of Premium Jute Bags</li>
                  <li>World Class Quality</li>
                  <li>Eco-friendly & Sustainable Products</li>
                  <li>Quality Assurance</li>
                  <li>Best Customer Support</li>
                </ul>
                <div className="mt-5">
                  <b>Most Trusted name for High Quality Products:</b>
                  <p>
                    <b>Oofy Jute </b>is one of the most Trusted name for
                    High-Quality Jute Bags, Luxury Trays, Jute Baskets & more.
                    Oofy Jute is a Market Leader in providing variety of world
                    class Jute Bags and has also emerged as one of India's
                    Leading Home Decor & Lifestyle Products Brand designer
                    offering premium and designer products across multiple other
                    categories
                    <b>
                      Our Focus is to provide the best quality, best prices, and
                      timely delivery of world class Jute Bags and more Premium
                      Eco-Friendly & Fashionable Products to our customers in
                      India and Globally.
                    </b>
                  </p>
                </div>
              </div> */}
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
          <h1 className="font-medium text-5xl">Why Us?</h1>
          <div className="flex justify-center items-center w-full mt-5">
            <div className="text-center w-full sm:w-3/4 leading-relaxed text-lg text-[#6F4119]">
              <AboutTable />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center py-20"
        >
          <h1 className="font-medium text-5xl">OUR ROOT BELIEFS</h1>
          <div className="flex justify-center items-center w-full mt-5">
            <div className="text-center w-full sm:w-3/4 leading-relaxed text-lg text-[#6F4119]">
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
      <Footer />
    </main>
  );
};

export default About;
