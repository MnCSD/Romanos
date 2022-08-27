import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-between items-center bg-green-600 ">
      <div className="p-4 pt-6">
        <p className="text-[44px] text-white font-semibold uppercase leading-[30px]">
          zervos
        </p>
        <p className="text-right text-white font-extralight uppercase text-3xl">
          Capital
        </p>
      </div>
      <button
        onClick={() => setOpen(!open)}
        className={`${open && "hidden"} md:hidden`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-8 animate-fadein"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute w-full h-[200px] bg-green-600 top-0 pt-8 transform ease-in-out animate-trans z-[50]">
          <div className="flex flex-col  items-center text-white font-medium text-lg space-y-4 ">
            <Link href="/" className="text-white font-medium text-lg">
              Home
            </Link>
            <Link href="/blog" className="text-white font-medium text-lg ">
              Blog
            </Link>
            <Link href="/services" className="text-white font-medium text-lg">
              Services
            </Link>
          </div>
          <button onClick={() => setOpen(!open)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6  animate-fadein absolute top-3 right-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}

      <div className="hidden md:flex space-x-6 mr-10">
        <Link href="/">
          <p className="text-white font-light text-lg transform ease-in-out duration-100 delay-100 hover:cursor-pointer hover:text-black ">
            Home
          </p>
        </Link>
        <Link href="/blog">
          <p className="text-white font-light text-lg  hover:cursor-pointer hover:text-black">
            Blog
          </p>
        </Link>
        <Link href="/services">
          <p className="text-white font-light text-lg  hover:cursor-pointer hover:text-black">
            Services
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
