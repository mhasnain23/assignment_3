import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="fixed bottom-[-12px] w-full mx-auto bg-white rounded-lg shadow m-4 dark:bg-gray-800">
        <div className="w-full h-24 mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="font-semibold  font-[poppins] text-[1.2rem] text-gray-300 sm:text-center dark:text-gray-300">
            © 2023{" "}
            <Link
              href="https://www.linkedin.com/in/muhammad-hasnain-776h86/"
              target="_blank"
              className="hover:underline"
            >
              Muhammad Hasnain
            </Link>{" "}
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 font-bold font-[poppins] text-md text-gray-300 dark:text-gray-300 sm:mt-0">
            <li>
              <Link href="/about" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
