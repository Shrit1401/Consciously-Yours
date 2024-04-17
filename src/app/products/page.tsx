import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const products = [
  {
    name: "Product 1",
    img: "https://www.thegiftingmarketplace.in/cdn/shop/products/Addaheading_10_a4ce2ed0-c78e-4db5-9b51-acdd9509f813.png?v=1681453844",
  },
  {
    name: "Product 2",
    img: "https://5.imimg.com/data5/SELLER/Default/2023/7/321446208/QX/SP/ER/1801251/jute-flower-bags-500x500.png",
  },
  {
    name: "Product 3",
    img: "https://www.promotionalwears.com/image/cache/catalog/data/eco-friendly/bags/pjb005-front-img-500x500.jpg",
  },
  {
    name: "Product 4",
    img: "https://corporate.goshopia.com/wp-content/uploads/2022/08/32-Jute-Bags-scaled.jpg",
  },
];

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
