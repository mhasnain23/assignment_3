import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <header className=" flex items-center justify-between py-4 px-32 bg-black/30 backdrop-blur-md border-b-2 border-gray-500 dark:bg-black/30 opacity-1">
        <div className="flex items-center justify-between gap-5">
          <img
            src={
              "https://media.licdn.com/dms/image/v2/D4E03AQHz_ChRY2zXRw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726402019835?e=1732752000&v=beta&t=s0iZSXtDDijvN2CxjqUnZBmGKp-KCm0eeHiXdNoR7Xc"
            }
            alt="logo-images"
            className="w-14 h-14 rounded-full object-cover"
          />
          <Link href={"/"}>
            <h1 className="text-xl font-semibold font-[poppins] text-white transition-all duration-300 hover:text-emerald-500">
              Code With <span>Hasnain</span>
            </h1>
          </Link>
        </div>
        <div className="flex gap-20">
          <Link href={"/"}>
            <span className="text-gray-400 text-lg font-bold hover:text-white font-[poppins] active:text-gray-300 transition-all duration-300">
              Home
            </span>
          </Link>
          <Link href={"/about"}>
            <span className="text-gray-400 text-lg font-bold hover:text-white font-[poppins] active:text-gray-300 transition-all duration-300">
              About
            </span>
          </Link>
          <Link href={"/contact"}>
            <span className="text-gray-400 text-lg font-bold hover:text-white font-[poppins] active:text-gray-300 transition-all duration-300">
              Contact
            </span>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
