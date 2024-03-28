import React from "react";
import { SwiperSlide } from "swiper/react";

interface SlideHomeProps {
  product: {
    name: string;
    img: string;
  };
}

const SlideHome: React.FC<SlideHomeProps> = ({ product }) => {
  return (
    <SwiperSlide>
      <img src={product.img} alt="" />
      <div className="absolute inset-0 bg-black opacity-0 gap-5 hover:opacity-100 hover:bg-opacity-50 flex flex-col hover:backdrop-blur-lg items-center justify-center transition-all duration-150 ease-in-out cursor-pointer">
        <h1 className="garamond text-white text-5xl">{product.name}</h1>
        <a href="#" className="btn">
          Connect with us
        </a>
      </div>
    </SwiperSlide>
  );
};

export default SlideHome;
