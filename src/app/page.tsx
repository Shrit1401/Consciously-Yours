"use client";
import Header from "@/components/Header";
import AboutBox from "@/components/home/AboutBox";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";

export default function Home() {
  return (
    <main>
      <Header active="home" />
      <div className="relative h-screen w-full">
        <video
          src="https://video.wixstatic.com/video/93357b_0be5dcdfeebb46bda690c75076b2f9e6/1080p/mp4/file.mp4"
          autoPlay
          loop
          muted
          className="h-full w-full object-cover"
        />
      </div>
      <AboutBox />
      <div className="relative h-screen w-full">
        <img
          src="https://static.wixstatic.com/media/93357b_05dfada786514080bc8c5f7d2270f01a~mv2.png/v1/fill/w_1899,h_745,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/93357b_05dfada786514080bc8c5f7d2270f01a~mv2.png"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 text-[#fff2df] flex flex-col gap-10 items-center justify-center">
          <h1 className="text-6xl font-bold">About Us</h1>
          <p className="text-center w-3/4 leading-relaxed text-lg">
            <b>Oofy Jute</b> is one of the most Trusted name for High-Quality
            Jute Bags, Luxury Trays, Jute Baskets & more. Oofy Jute is a Market
            Leader in providing variety of world class Jute Bags and has also
            emerged as one of India's Leading Home Decor & Lifestyle Products
            Brand designer offering premium and designer products across
            multiple other categories, <br />
            <b>
              {" "}
              Our Focus is to provide the best quality, best prices, and timely
              delivery of world class Jute Bags and more Premium Eco-Friendly &
              Fashionable Products to our customers in India and Globally.
            </b>
          </p>
          <a href="#" className="btn">
            Know More About Us
          </a>
        </div>
      </div>

      <div className="my-16">
        <div className="flex gap-2 justify-center flex-col items-center">
          <h1 className="text-4xl font-semibold">Our Products</h1>
          <p>
            Click on the product you like to connect with us directly over
            WhatsApp
          </p>
          <Swiper
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </main>
  );
}
