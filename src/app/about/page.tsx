import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const About = () => {
  return (
    <>
      <Header active="about" />
      <main className="mx-5 sm:mx-0">
        <div className="text-center py-20">
          <h1 className="font-medium text-5xl">About Us</h1>
          <p className="opacity-70 text-[0.8em] sm:text-[1rem]">
            Finding Inspiration in Every Turn
          </p>
        </div>
        <div className="flex justify-center items-center w-full">
          <div className="text-center w-full sm:w-3/4 leading-relaxed text-lg text-[#6F4119]">
            <b>Oofy Jute</b> is a Market Leader in providing variety of class
            Jute Bags and has also emerged as one of India's Leading Home
            Furnishing & Lifestyle Products Brand designer offering premium and
            designer products across multiple other categories that includes
            Home Furnishing, Home Decor, 100% Premium Cotton Towels, Jute Bags,
            Potli, Decorative Jute Baskets, and more.
          </div>
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
          <div className="flex justify-center items-center w-full mt-5">
            <div className="text-center w-full sm:w-3/4 leading-relaxed text-lg text-[#6F4119]">
              <b>Oofy Jute</b> is a Market Leader in providing variety of
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
              </div>
            </div>
          </div>
        </div>

        <div className="text-center py-20">
          <h1 className="font-medium text-5xl">Core Values</h1>
          <div className="flex justify-center items-center w-full mt-5">
            <div className="text-center w-full sm:w-3/4 leading-relaxed text-lg text-[#6F4119]">
              <div>
                <b>No Plastic - Conserve Environment</b>
                <br /> Oofy Jute took it up as an initiative to make products
                without plastic to help in conserving nature and lessen the
                plastic nuisance this world is facing.
              </div>
              ​
              <div>
                <b>Made In India Products </b>
                <br />
                The Motto of starting Oofy Jute was that we wanted to build a
                platform for "Made-in-India products only" with world-class
                quality and that can be widely used by customers in India and
                across Globally.
              </div>
              ​
              <div>
                <b>Innovation And Expansion</b>
                <br /> Oofy Jute keeps the ideation, innovation and expansion on
                high priority and continuously comes with new offerings which is
                innovative on the global scale ​
              </div>
              <div>
                <b>Go Green Initiative</b>
                <br /> As an organization we care for the Nature & environmental
                sustainability and try to put our best efforts in Conserving
                Nature and drive Go Green initiatives. When you have decided to
                purchase a Jute Bags you have joined a journey of Millions of
                other People who care for Nature.
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
