import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { products } from "../../../data";

const Products = () => {
  return (
    <main>
      <Header active="product" />
      <div className="text-center py-20">
        <h1 className="font-medium text-5xl">Our Products</h1>
        <p className="opacity-70 text-[0.8em] sm:text-[1rem]">
          Click on the product you like to connect with us directly over
          WhatsApp
        </p>
      </div>

      <div
        className="flex flex-wrap px-20
      gap-20 justify-center items-center w-full pb-20
      "
      >
        {products.map((product) => (
          <div
            key={product.name}
            className="flex flex-col gap-[25px] justify-center text-center w-[300px]"
          >
            <img
              className="w-[300px] h-[350px] bg-cover border border-slate-200"
              src={product.img}
              alt=""
            />
            <h2 className="font-medium text-2xl">{product.name}</h2>
            <div className="w-[300px]">
              <a href="#" className="btn">
                Request A Quotation
              </a>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </main>
  );
};

export default Products;
