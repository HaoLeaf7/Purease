"use client";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

type Navitem = { navitem: string; href: string;  };
type Navitems = Readonly<(Navitem)[]>;

const navitems: Navitems = [
  { navitem: "Home", href: "/" },
  { navitem: "Jobs", href: "/" },
  { navitem: "Pricing", href: "/" },
  { navitem: "About Us", href: "/" },
  { navitem: "Services", href: "/" },
  { navitem: "Contact", href: "/" },
  { navitem: "Logo", href: "/" },
] as const;

export const Header = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[50px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>MYLOGO GOES HERE</div>

      {/* Menu */}
      <div className="hidden md:flex px-2 space-x-5 text-sm ">
        {navitems.map((item: Navitem, ) => (
          <Link href={item.href} key={item.href }>
            {item.navitem}
          </Link>
        ))}
      </div>

      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        <svg
          onClick={handleClick}
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {!nav ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          )}
        </svg>
      </div>

      {/* Mobile menu */}
      <div  className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center "
        }>
      {navitems.map((item: Navitem) => (
          <Link href={item.href} key={item.href}>
            {item.navitem}
          </Link>
        ))}
      </div>
    </div>
  );
};
