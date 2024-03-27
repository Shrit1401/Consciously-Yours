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
      <img
        src="https://static.wixstatic.com/media/93357b_75827e15af594063927fa26ea7565555~mv2.png/v1/fill/w_253,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo%20Dark_edited.png"
        alt=""
        className="h-14"
      />
    </header>
  );
};

export default Header;
