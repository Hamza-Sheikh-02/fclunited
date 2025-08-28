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
        className="relative flex items-center justify-center gap-4 px-4 py-2"
        style={{
          backgroundImage: "url('/images/PromotionalHeader/background.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <button className="text-white/60 hover:text-white transition-colors duration-200 p-1">
          <BiChevronLeft className="text-xl" />
        </button>

        <div className="flex items-center gap-2">
          <Image
            src="/images/PromotionalHeader/img-1.png"
            alt="Perform at your best - Task Force FPS"
            height={50}
            width={180}
            className="h-12 w-auto object-contain rounded-2xl"
          />

          <Image
            src="/images/PromotionalHeader/img-2.png"
            alt="Supporting First Responders - Learn More"
            height={50}
            width={180}
            className="h-12 w-auto object-contain rounded-2xl"
          />
        </div>

        <button className="text-white/60 hover:text-white transition-colors duration-200 p-1">
          <BiChevronRight className="text-xl" />
        </button>

        <button
          aria-label="Close announcement"
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-white/60 hover:text-white transition-colors duration-200"
        >
          <IoMdClose className="text-lg" />
        </button>
      </section>
    )
  );
};

export default PromotionalHeader;
