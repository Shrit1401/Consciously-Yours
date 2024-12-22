"use client";
import AboutBox from "@/components/home/AboutBox";
import { Swiper, SwiperSlide } from "swiper/react";
import Header from "@/components/Header";
import BirdFly from "@/components/BirdFly";
import { Pagination, Autoplay } from "swiper/modules";
import { products } from "../../data";
import { motion } from "framer-motion";
import AboutComponent from "@/components/home/AboutComponent";

export default function Home() {
  const SwiperSlidesPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth > 1024) {
        return 4;
      } else if (window.innerWidth > 768) {
        return 3;
      } else {
        return 1;
      }
    }
    return 1;
  };

  return (
    <main className="overflow-x-hidden">
      <div className="bg-[#341F18]">
        <BirdFly />
        <Header active="home" />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-screen w-full"
      >
        <img
          src={
            window.innerWidth > 768
              ? "./landing-big.png"
              : "./landing-small.png"
          }
          alt=""
          className="h-full w-full object-cover"
        />
      </motion.div>
      <AboutBox />
      <AboutComponent />
      <div className="my-16">
        <div className="flex gap-8 justify-center flex-col items-center">
          <h1 className="sm:text-8xl text-6xl font-semibold roch">
            Our Products
          </h1>
          <p className="text-center font-[600] text-xl px-4">
            Select your desired product to initiate direct communication with us
            via WhatsApp.
            <br /> You may also direct your inquiries to our team by contacting
            us at{" "}
            <a
              className="underline underline-offset-4"
              href="mailto:Consciously.yours111@gmail.com"
            >
              Consciously.yours111@gmail.com
            </a>
          </p>
          <Swiper
            slidesPerView={SwiperSlidesPerView()}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="mySwiper mt-10"
          >
            {products.map((product, index) => (
              <SwiperSlide key={product.name}>
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 50,
                    duration: 1,
                    delay: index * 0.1,
                  }}
                  className="px-4 py-4 relative"
                >
                  <img
                    className="h-[28rem] w-[28rem] object-cover rounded-md"
                    src={product.img}
                    alt=""
                  />
                  <div className="absolute inset-0 bg-black opacity-0 gap-7 rounded-md hover:opacity-100 hover:bg-opacity-50 flex flex-col hover:backdrop-blur-lg items-center justify-center transition-all duration-150 ease-in-out cursor-pointer">
                    <h1 className="garamond text-white text-5xl">
                      {product.name}
                    </h1>
                    <a
                      href={`https://wa.me/9971155921?text=${encodeURIComponent(
                        `Hello, I am interested in the ${product.name}. Can I get a quotation, please?`
                      )}`}
                      className="btn"
                    >
                      Connect with us
                    </a>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </main>
  );
}
