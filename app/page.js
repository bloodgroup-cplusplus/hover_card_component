'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import galaxy1 from "../public/galaxy1.jpeg";
import galaxy2 from "../public/galaxy2.jpeg";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <motion.div
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] card-container"
    >
      <div className="relative">
        <Image
          className={`w-auto h-auto ${
            isHovered ? "skew-y-3" : "skew-y-0"
          } transform origin-left-bottom`}
          width={366}
          height={366}
          src={galaxy1}
          alt="Galaxy 1 "
        />
        <Image
          className={`absolute top-0 left-0 w-auto h-auto transition-transform duration-500 ${
            isHovered ? "-rotate-6" : "rotate-0"
          } transform origin-left`}
          width={366}
          height={366}
          src={galaxy2}
          alt="Galaxy 2"
        />
      </div>
      <div className="p-4 md:p-5">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
          My Card
        </h3>
        <p className="mt-1 text-gray-800 dark:text-gray-400">
          Hover to switch images
        </p>
        <a
          className="mt-3 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
          href="#"
        >
          Go somewhere
        </a>
      </div>
    </motion.div>
  );
}

