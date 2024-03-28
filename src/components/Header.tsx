import React from "react";

interface HeaderProps {
  active: "home" | "product" | "about" | "contact";
}

const Header: React.FC<HeaderProps> = ({ active }) => {
  return (
    <header className="bg-[#fff2df] fixed z-[9999] flex items-center justify-around px-10 py-5 w-full h-20">
      <ul className="flex gap-5">
        <li>
          <a
            href="#"
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
            href="#"
            className={`garamond text-[1.2rem] font-semibold 
            ${
              active === "product"
                ? "border-b-[1px] border-black"
                : "border-b-[1px] border-transparent"
            }
            border-t-[1px] hover:border-black
            tracking-[0.05rem]
            py-2 px-4
            transition-all duration-300 ease-in-out

            `}
          >
            Our Products
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`garamond text-[1.2rem] font-semibold 
            ${
              active === "about"
                ? "border-b-[1px] border-black"
                : "border-b-[1px] border-transparent"
            }
            border-t-[1px] hover:border-black
            tracking-[0.05rem]
            py-2 px-4
            transition-all duration-300 ease-in-out

            `}
          >
            About Us{" "}
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`garamond text-[1.2rem] font-semibold 
            ${
              active === "contact"
                ? "border-b-[1px] border-black"
                : "border-b-[1px] border-transparent"
            }
            border-t-[1px] hover:border-black
            tracking-[0.05rem]
            py-2 px-4
            transition-all duration-300 ease-in-out

            `}
          >
            Contact Us{" "}
          </a>
        </li>
      </ul>
      <img src="./logo.png" alt="" className="h-14" />
    </header>
  );
};

export default Header;
