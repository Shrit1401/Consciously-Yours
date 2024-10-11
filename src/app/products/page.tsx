"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { motion } from "framer-motion";
import { products } from "../../../data";

const Products = () => {
  return (
    <main>
      <div className="text-center py-20">
        <h1 className="font-medium text-7xl roch">Our Products</h1>
        <p className="text-center font-[600] text-xl">
          Click on the product you like to connect with us directly over
          WhatsApp
        </p>
      </div>

      <div
        className="flex flex-wrap px-20
      gap-20 justify-center items-center w-full pb-20"
      >
        {products.map((product, index) => (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50, delay: index * 0.1 }}
            key={product.name}
            className="flex flex-col gap-[25px] justify-center text-center w-[300px]"
          >
            <img
              className="w-[300px] h-[350px] bg-cover border border-slate-200 rounded-md"
              src={product.img}
              alt={product.name}
            />
            <h2 className="font-medium text-2xl">{product.name}</h2>
            <div className="w-[300px]">
              <a
                href={`https://wa.me/9971155921?text=${encodeURIComponent(
                  `Hello, I am interested in the ${product.name}. Can I get a quotation, please?`
                )}`}
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Request A Quotation
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
};

export default Products;
