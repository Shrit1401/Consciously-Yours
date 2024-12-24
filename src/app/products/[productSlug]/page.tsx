"use client";
import BirdFly from "@/components/BirdFly";
import Header from "@/components/Header";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { useState, useEffect } from "react";
import { products } from "../../../../data";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";

const ProductInfo = () => {
  const { productSlug } = useParams();
  const router = useRouter();

  const product = products.find((item) => item.slug === productSlug);

  if (!product) {
    useEffect(() => {
      router.push("/");
    }, []);
    return null;
  }

  const [selectedImage, setSelectedImage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (product) {
      setSelectedImage(product.images[0]);
    }
  }, [product]);

  useEffect(() => {
    if (product) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % product.images.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [product]);

  useEffect(() => {
    if (product) {
      setSelectedImage(product.images[currentIndex]);
    }
  }, [currentIndex, product]);

  return (
    <main>
      <div className="bg-[#341F18]">
        <BirdFly />
        <Header active="contact" />
      </div>

      <section className="p-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image and Slider Section */}
          <div>
            {product.images && (
              <>
                <div className="border rounded-md overflow-hidden">
                  <img
                    src={selectedImage}
                    alt="Product Image"
                    width={500}
                    height={500}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="mt-4">
                  <Swiper
                    spaceBetween={10}
                    slidesPerView={6}
                    onSlideChange={(swiper) =>
                      setSelectedImage(product.images[swiper.activeIndex])
                    }
                  >
                    {product.images.map((image, index) => (
                      <SwiperSlide key={index}>
                        <button
                          onClick={() => setSelectedImage(image)}
                          className={`border rounded-md overflow-hidden w-20 h-20 flex-shrink-0 ${
                            selectedImage === image
                              ? "ring-2 ring-blue-500"
                              : ""
                          }`}
                        >
                          <img
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            width={80}
                            height={80}
                            className="object-cover w-full h-full"
                          />
                        </button>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </>
            )}
          </div>

          {/* Product Details Section */}
          <div>
            <h1 className="text-7xl font-bold roch">{product.name}</h1>
            <div className="my-[1.8rem]">
              <h2 className="text-xl font-bold text-gray-900">
                Product Details
              </h2>
              <ul className="list-disc list-inside mt-[1.2rem] gap-[.3rem] flex flex-col">
                {product.description.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
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
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductInfo;
