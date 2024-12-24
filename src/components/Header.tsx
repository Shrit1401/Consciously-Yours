import Image from "next/image";
import React from "react";
import logo from "@/../public/logo-white.png";

interface HeaderProps {
  active: "home" | "product" | "about" | "contact" | "gallery";
}

const navItems = [
  { name: "Home", href: "/" },
  { name: "Our Products", href: "/products" },
  { name: "About Us", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" },
];

const Header: React.FC<HeaderProps> = ({ active }) => {
  return (
    <header className="bg-transparent z-[9999] sm:flex-row flex-col flex items-center justify-around px-0 sm:px-10 py-5 w-full">
      <a
        href="./"
        className="flex items-center justify-center sm:justify-between w-full px-4 sm:px-0"
      >
        <Image
          src={logo}
          alt=""
          width={300}
          height={1000}
          className="h-32  hover:opacity-70 transition-all duration-300 ease-in-out"
        />
      </a>
      <ul className="sm:flex hidden w-[50%] gap-5 text-[#efd7ae]">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className={`garamond text-[1.2rem] 
                ${
                  active === item.href.substring(1) ||
                  (active === "home" && item.href === "/")
                    ? "border-b-[1px] border-[#efd7ae]"
                    : "border-b-[1px] border-transparent"
                }
                border-t-[1px] hover:border-[#efd7ae]
                tracking-[0.05rem]
                py-2 px-4
                whitespace-nowrap
                transition-all duration-300 ease-in-out
              `}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <ul className="sm:hidden flex flex-col text-2xl text-[#efd7ae]">
        {navItems.map((item) => (
          <li key={item.href}>
            <a href={item.href} className="garamond">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
