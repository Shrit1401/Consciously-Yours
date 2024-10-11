import type { Metadata } from "next";
import "../app/globals.css";
import Header from "@/components/Header";

import "swiper/css";
import "swiper/css/pagination";
import Footer from "@/components/Footer";
import BirdFly from "@/components/BirdFly";

export const metadata: Metadata = {
  title: "Consciously Yours",
  description:
    "Step into the realm of sustainable sophistication! We believe in the timeless appeal of jute, offering to eco-conscious alternatives for fashion-forward consumers around the globe. From chic totes to versatile crossbody bags, each piece in our collection is meticulously crafted with love and dedication. Join us in embracing eco-conscious fashion while making a positive impact on the planet, one jute bag at a time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header active="home" />

        {children}
        <BirdFly />
        <Footer />
      </body>
    </html>
  );
}
