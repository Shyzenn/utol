"use client";

import Image from "next/image";
import utolLogo from "@/public/utolLogo.png";
import { IoMenuOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    if (navbar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [navbar]);

  return (
    <>
      <nav
        className={`z-10 fixed w-full bg-black bg-opacity-60 backdrop-blur-xl ${
          navbar ? "inset-0" : "top-0"
        }`}
      >
        <div className="flex justify-between py-2 px-4 md:py-4 md:px-24 text-white">
          <div className="flex items-center gap-2">
            <Image src={utolLogo} alt="utolLogo" className="w-14" />
            <p className="text-2xl">Utol</p>
          </div>
          <div className="items-center list-none gap-8 hidden md:flex">
            <Link href="#home" className="cursor-pointer">
              Home
            </Link>
            <Link href="#products" className="cursor-pointer">
              Products
            </Link>
            <Link href="#about" className="cursor-pointer">
              About
            </Link>
            <Link href="#contact" className="cursor-pointer">
              Contact Us
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <IoMenuOutline
              className="text-4xl"
              onClick={() => setNavbar(true)}
            />
          </div>
        </div>

        {/* For mobile navbar */}
        <div
          className={`absolute inset-0 bg-white z-20 ${
            navbar ? "block" : "hidden"
          }`}
        >
          <div className="flex justify-end m-2">
            <IoCloseOutline
              className="text-4xl"
              onClick={() => setNavbar(false)}
            />
          </div>
          <div className="flex justify-center items-center mt-48">
            <div className="items-center list-none gap-12 flex flex-col md:hidden">
              <Link
                className="cursor-pointer"
                href="#home"
                onClick={() => setNavbar(false)}
              >
                Home
              </Link>
              <Link
                className="cursor-pointer"
                href="#products"
                onClick={() => setNavbar(false)}
              >
                Products
              </Link>
              <Link
                className="cursor-pointer"
                href="#about"
                onClick={() => setNavbar(false)}
              >
                About
              </Link>
              <Link
                className="cursor-pointer"
                href="#contact"
                onClick={() => setNavbar(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
