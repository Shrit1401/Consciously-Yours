import React from "react";
import BirdFly from "./BirdFly";

const Footer = () => {
  return (
    <footer className="bg-[#341F18] text-[#efd7ae] flex sm:flex-row flex-col items-center justify-center gap-2 px-10 py-5 h-15 w-full">
      Copyright © {new Date().getFullYear()}
      <b className="uppercase">Consciously Yours</b> All rights reserved. |
      Designed by{" "}
      <a
        href="https://shrit.in/"
        className="underline font-bold"
        target="_blank"
      >
        Shrit Shrivastava
      </a>
    </footer>
  );
};

export default Footer;
