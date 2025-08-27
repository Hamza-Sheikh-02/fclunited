"use client";

import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Image from "next/image";

const PromotionalHeader = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    isVisible && (
      <section
        className="relative flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 px-4 sm:px-8 py-4 sm:py-6 text-xs sm:text-sm"
        style={{
          backgroundImage: "url('/images/PromotionalHeader/background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <button className="text-white/80 hover:text-white transition-colors duration-200 p-2 hover:bg-white/10 rounded-full">
          <BiChevronLeft className="text-xl sm:text-2xl" />
        </button>

        <div className="flex items-center justify-center">
          <Image
            src="/images/PromotionalHeader/img-1.png"
            alt="Perform at your best - Task Force FPS"
            height={40}
            width={200}
            className="h-8 sm:h-10 w-auto max-w-[150px] sm:max-w-[200px] object-contain rounded-lg"
          />
        </div>

        <div className="flex items-center justify-center">
          <Image
            src="/images/PromotionalHeader/img-2.png"
            alt="Supporting First Responders - Learn More"
            height={40}
            width={200}
            className="h-8 sm:h-10 w-auto max-w-[150px] sm:max-w-[200px] object-contain rounded-lg"
          />
        </div>

        <button className="text-white/80 hover:text-white transition-colors duration-200 p-2 hover:bg-white/10 rounded-full">
          <BiChevronRight className="text-xl sm:text-2xl" />
        </button>

        <button
          aria-label="Close announcement"
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-gray-300 transition-colors duration-200 p-1"
        >
          <IoMdClose className="text-lg sm:text-xl" />
        </button>
      </section>
    )
  );
};

export default PromotionalHeader;
