import Header from "@/components/Header";
import React from "react";

const About = () => {
  return (
    <main>
      <Header active="about" />
      <div className="text-center py-20">
        <h1 className="font-medium text-5xl">About Us</h1>
        <p className="opacity-70 text-[0.8em] sm:text-[1rem]">
          Finding Inspiration in Every Turn
        </p>
      </div>
      <div className="flex justify-center items-center w-full">
        <p className="text-center w-full sm:w-3/4 leading-relaxed text-lg text-[#6F4119]">
          <b>Oofy Jute</b> is a Market Leader in providing variety of world
          class Jute Bags and has also emerged as one of India's Leading Home
          Furnishing & Lifestyle Products Brand designer offering premium and
          designer products across multiple other categories that includes Home
          Furnishing, Home Decor, 100% Premium Cotton Towels, Jute Bags, Potli,
          Decorative Jute Baskets, and more.
        </p>
      </div>
      <img
        src="https://static.wixstatic.com/media/93357b_0b75ec457ab548b58b4d0a95fa36b089~mv2.png/v1/fill/w_1366,h_478,al_c,q_90,enc_auto/93357b_0b75ec457ab548b58b4d0a95fa36b089~mv2.png"
        className="w-full bg-cover py-10"
        alt=""
      />
      <div className="text-center py-20">
        <h1 className="font-medium text-5xl">Why Us?</h1>
        <p className="opacity-70 text-[0.8em] sm:text-[1rem]">
          because WE CARE
        </p>
      </div>
    </main>
  );
};

export default About;
