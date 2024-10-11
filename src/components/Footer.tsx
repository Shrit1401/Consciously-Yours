import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#11330f] text-[#efd7ae] flex sm:flex-row flex-col items-center justify-center gap-2 px-10 py-5 w-full h-15">
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
