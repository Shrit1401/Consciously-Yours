import React from "react";

interface HeaderProps {
  active: "home" | "product" | "about" | "contact";
}

const Header: React.FC<HeaderProps> = ({ active }) => {
  return (
    <header className="bg-[#fff2df] z-[9999] sm:flex-row flex-col flex items-center justify-around px-0 sm:px-10 py-5 w-full">
      <div className="flex items-center justify-center sm:justify-between w-full px-4 sm:px-0">
        <img src="./logo.png" alt="" className="h-14" />
      </div>
      <ul className="sm:flex hidden w-[50%] gap-5">
        <li>
          <a
            href="/"
            className={`garamond text-[1.2rem] font-semibold 
            ${
              active === "home"
                ? "border-b-[1px] border-black"
                : "border-b-[1px] border-transparent"
            }
            border-t-[1px] hover:border-black
            tracking-[0.05rem]
            py-2 px-4
            transition-all duration-300 ease-in-out
            `}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/products"
            className={`garamond text-[1.2rem] font-semibold 
            ${
              active === "product"
                ? "border-b-[1px] border-black"
                : "border-b-[1px] border-transparent"
            }
            border-t-[1px] hover:border-black
            tracking-[0.05rem]
            py-2 px-4
            whitespace-nowrap
            transition-all duration-300 ease-in-out
            
            `}
          >
            Our Products
          </a>
        </li>
        <li>
          <a
            href="/about"
            className={`garamond text-[1.2rem] font-semibold 
            ${
              active === "about"
                ? "border-b-[1px] border-black"
                : "border-b-[1px] border-transparent"
            }
            border-t-[1px] hover:border-black
            tracking-[0.05rem]
            py-2 px-4
            whitespace-nowrap

            transition-all duration-300 ease-in-out
            
            `}
          >
            About Us{" "}
          </a>
        </li>
        <li>
          <a
            href="/contact"
            className={`garamond text-[1.2rem] font-semibold 
            ${
              active === "contact"
                ? "border-b-[1px] border-black"
                : "border-b-[1px] border-transparent"
            }
            border-t-[1px] hover:border-black
            tracking-[0.05rem]
            py-2 px-4
            whitespace-nowrap

            transition-all duration-300 ease-in-out
            
            `}
          >
            Contact Us{" "}
          </a>
        </li>
      </ul>
      <ul className="sm:hidden flex flex-col text-2xl">
        <li>
          <a href="/" className="garamond">
            Home
          </a>
        </li>
        <li>
          <a href="/product" className="garamond">
            Product
          </a>
        </li>
        <li>
          <a href="/about" className="garamond">
            About
          </a>
        </li>
        <li>
          <a href="/contact" className="garamond">
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
