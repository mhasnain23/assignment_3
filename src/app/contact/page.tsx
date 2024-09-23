'use client';

import { useRouter } from "next/navigation";
import Link from "next/link";

const Contact = () => {

  const router = useRouter();

  return (
    <div className="max-w-7xl flex flex-col items-center justify-center gap-7 mx-auto">
      <h1 className="text-[4rem] text-center mt-10 font-bold text-red-500">
        This is contact page
      </h1>
      <div className="flex items-center justify-center gap-5">
        <Link href={"/"}>
          <button onClick={()=> router.push("/")} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="text-xl font-bold font-[poppins] relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Go Back
            </span>
          </button>
        </Link>
        <Link href={"/about"}>
          <button onClick={()=> router.push("/about")} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="text-xl font-bold font-[poppins] relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Go to About
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
