'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";

const About = () => {

  const router = useRouter();

  return (
    <div className="max-w-7xl flex flex-col items-center justify-center gap-7 mx-auto">
      <h1 className="lg:text-[4rem] text-[2.1rem] text-center mt-10 font-bold text-blue-500">
        This is about page
      </h1>
      <div className="flex items-center justify-center gap-5">
        <button onClick={() => router.push("/")} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span className="text-xl font-[poppins] font-bold relative px-3 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Go Back
          </span>
        </button>
        <button onClick={() => router.push("/contact")} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span className="text-xl font-[poppins] font-bold relative px-3 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Go to Contact
          </span>
        </button>
      </div>
    </div>
  );
};

export default About;
