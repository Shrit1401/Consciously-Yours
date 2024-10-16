"use client";
import AboutBox from "@/components/home/AboutBox";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Autoplay } from "swiper/modules";
import Footer from "@/components/Footer";
import { products } from "../../data";
import { motion } from "framer-motion";

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
  };
  return (
    <main className="overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-screen w-full"
      >
        <video
          src="https://video.wixstatic.com/video/93357b_0be5dcdfeebb46bda690c75076b2f9e6/1080p/mp4/file.mp4"
          autoPlay
          loop
          muted
          className="h-full w-full object-cover"
        />
      </motion.div>
      <AboutBox />
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50 }}
        className="flex w-full sm:flex-row flex-col"
      >
        <div className="sm:w-1/2 w-full">
          <img
            src="https://i.postimg.cc/Jn4kVv2n/99204139-l-normal-none.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="sm:w-1/2 w-full bg-[#759260] text-[#040316] flex gap-10 py-12 flex-col items-center justify-center">
          <h1 className="text-7xl font-bold roch tracking-widest">About Us</h1>
          <p className="text-center w-[90%] sm:w-3/4 leading-relaxed font-bold text-lg">
            Embrace eco-luxury at Consciously Yours India. Where every jute bag
            tells a story of ethical elegance and environmental responsibility.
            <br />
            From timeless classics to contemporary marvels, our curated
            collection embodies the essence of India's golden fibre, offering a
            glimpse into the soul of a nation. We take pride in showcasing the
            finest creations, handcrafted with love, and exported with care to
            adorn shoulders worldwide.
            <br /> Explore export opportunities from India with us and let's
            unite as Vasudhaiva Kutumbakam 'One Earth, One Future'.
          </p>
          <a href="/about" className="btn">
            Know More About Us
          </a>
        </div>
      </motion.div>

      <div className="my-16">
        <div className="flex gap-8 justify-center flex-col items-center">
          <h1 className="sm:text-8xl text-6xl font-semibold roch">
            Our Products
          </h1>
          <p className="text-center font-[600] text-xl">
            Select your desired product to initiate direct communication with us
            via WhatsApp.
            <br /> You may also direct your inquiries to our team by contacting
            us at{" "}
            <a
              className="underline underline-offset-4"
              href="mailto:Consciously.yours111@gmail.com "
            >
              Consciously.yours111@gmail.com{" "}
            </a>{" "}
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
                >
                  <img
                    className="h-[28rem] w-[28rem] object-contain"
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
