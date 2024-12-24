"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import BirdFly from "@/components/BirdFly";

const Gallery = () => {
  const galleryItems = [
    { id: 1, size: "large" },
    { id: 2, size: "small" },
    { id: 3, size: "small" },
    { id: 4, size: "large" },
    { id: 5, size: "small" },
    { id: 6, size: "large" },
    { id: 7, size: "small" },
    { id: 8, size: "small" },
    { id: 9, size: "large" },
    { id: 10, size: "small" },
    { id: 11, size: "large" },
    { id: 12, size: "small" },
    { id: 13, size: "small" },
    { id: 14, size: "large" },
  ];

  return (
    <main className="min-h-screen">
      <div className="bg-[#341F18]">
        <BirdFly />
        <Header active="gallery" />
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`relative overflow-hidden rounded-lg ${
                item.size === "large"
                  ? "col-span-1 md:col-span-2 row-span-2"
                  : "col-span-1"
              }`}
            >
              <img
                src={`/gallery/${item.id}.jpg`}
                alt={`Gallery item ${item.id}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Gallery;
