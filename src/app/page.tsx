"use client";

import Card from "@/components/card";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main>
      <div className="flex flex-col gap-5 items-center justify-between py-6">
        <h1 className="text-[4rem] text-center mt-10 font-bold text-violet-600">
          Wellcome To Home
        </h1>
        <button
          onClick={() => router.push("/about")}
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
        >
          <span className="text-xl font-bold font-[poppins] relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Go to About
          </span>
        </button>
      </div>
      <div className="max-w-7xl mt-16 flex flex-col items-center justify-center mx-auto">
        <h1 className="font-[poppins] text-[2.34rem] font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Props Data
          </span>
        </h1>
        <Card name={"Hasnain"} Id={166548} day={"Monday 2pm - 5pm"} />
      </div>
    </main>
  );
}
