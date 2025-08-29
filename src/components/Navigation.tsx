"use client";

import Link from "next/link";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import PromotionalHeader from "./PromotionalHeader";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <>
      <PromotionalHeader />
      <nav className="w-full bg-white border-b border-gray-200">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-10 py-3 sm:py-4 max-w-7xl mx-auto">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={"/images/Navigation/logo.png"}
                width={60}
                height={60}
                alt="logo"
                className="w-12 h-12 sm:w-16 sm:h-16 lg:w-[75px] lg:h-[75px]"
              />
            </Link>
          </div>

          <div className="hidden lg:flex">
            <ul className="flex items-center gap-6 xl:gap-8">
              <li>
                <Link
                  href="/"
                  className={`text-sm xl:text-base text-gray-700 hover:text-red-600 font-medium pb-1 border-b-2 transition-colors ${
                    pathname === "/"
                      ? "border-red-600 text-red-600"
                      : "border-transparent"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`text-sm xl:text-base text-gray-700 hover:text-red-600 font-medium pb-1 border-b-2 transition-colors ${
                    pathname === "/about"
                      ? "border-red-600 text-red-600"
                      : "border-transparent"
                  }`}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/league-info"
                  className={`text-sm xl:text-base text-gray-700 hover:text-red-600 font-medium pb-1 border-b-2 transition-colors ${
                    pathname === "/league-info"
                      ? "border-red-600 text-red-600"
                      : "border-transparent"
                  }`}
                >
                  League Info
                </Link>
              </li>
              <li>
                <Link
                  href="/licensee-info"
                  className={`text-sm xl:text-base text-gray-700 hover:text-red-600 font-medium pb-1 border-b-2 transition-colors ${
                    pathname === "/licensee-info"
                      ? "border-red-600 text-red-600"
                      : "border-transparent"
                  }`}
                >
                  Licensee Info
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className={`text-sm xl:text-base text-gray-700 hover:text-red-600 font-medium pb-1 border-b-2 transition-colors ${
                    pathname === "/events"
                      ? "border-red-600 text-red-600"
                      : "border-transparent"
                  }`}
                >
                  FCL Events
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className={`text-sm xl:text-base text-gray-700 hover:text-red-600 font-medium pb-1 border-b-2 transition-colors ${
                    pathname === "/shop"
                      ? "border-red-600 text-red-600"
                      : "border-transparent"
                  }`}
                >
                  Shop
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <Button
              variant="outline"
              className="hidden md:inline-flex border-red-600 text-red-600 hover:bg-red-50 bg-transparent text-sm lg:text-base px-3 lg:px-4"
            >
              <span className="hidden lg:inline">FCL Login</span>
              <span className="lg:hidden">Login</span>
            </Button>
            <Button className="hidden md:inline-flex bg-red-600 hover:bg-red-700 text-white text-sm lg:text-base px-3 lg:px-4">
              <span className="hidden lg:inline">JOIN FCL</span>
              <span className="lg:hidden">JOIN</span>
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="lg:hidden bg-transparent border-gray-300 hover:border-red-600 hover:text-red-600"
                  aria-label="Open Mobile Menu"
                >
                  <FiMenu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 sm:w-96">
                <SheetHeader className="pb-6">
                  <SheetTitle className="text-xl font-bold text-left">
                    FCL Menu
                  </SheetTitle>
                </SheetHeader>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link
                      href="/"
                      className={`font-medium block py-3 px-4 border-l-4 transition-colors rounded-r-md ${
                        pathname === "/"
                          ? "border-red-600 text-red-600 bg-red-50"
                          : "border-transparent text-gray-700 hover:text-red-600 hover:bg-gray-50"
                      }`}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className={`font-medium block py-3 px-4 border-l-4 transition-colors rounded-r-md ${
                        pathname === "/about"
                          ? "border-red-600 text-red-600 bg-red-50"
                          : "border-transparent text-gray-700 hover:text-red-600 hover:bg-gray-50"
                      }`}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/league-info"
                      className={`font-medium block py-3 px-4 border-l-4 transition-colors rounded-r-md ${
                        pathname === "/league-info"
                          ? "border-red-600 text-red-600 bg-red-50"
                          : "border-transparent text-gray-700 hover:text-red-600 hover:bg-gray-50"
                      }`}
                    >
                      League Info
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/licensee-info"
                      className={`font-medium block py-3 px-4 border-l-4 transition-colors rounded-r-md ${
                        pathname === "/licensee-info"
                          ? "border-red-600 text-red-600 bg-red-50"
                          : "border-transparent text-gray-700 hover:text-red-600 hover:bg-gray-50"
                      }`}
                    >
                      Licensee Info
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/events"
                      className={`font-medium block py-3 px-4 border-l-4 transition-colors rounded-r-md ${
                        pathname === "/events"
                          ? "border-red-600 text-red-600 bg-red-50"
                          : "border-transparent text-gray-700 hover:text-red-600 hover:bg-gray-50"
                      }`}
                    >
                      FCL Events
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/shop"
                      className={`font-medium block py-3 px-4 border-l-4 transition-colors rounded-r-md ${
                        pathname === "/shop"
                          ? "border-red-600 text-red-600 bg-red-50"
                          : "border-transparent text-gray-700 hover:text-red-600 hover:bg-gray-50"
                      }`}
                    >
                      Shop
                    </Link>
                  </li>
                  <li className="pt-6 mt-4 border-t border-gray-200">
                    <div className="space-y-3">
                      <Button
                        variant="outline"
                        className="w-full border-red-600 text-red-600 hover:bg-red-50 bg-transparent"
                      >
                        FCL Login
                      </Button>
                      <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                        JOIN FCL
                      </Button>
                    </div>
                  </li>
                </ul>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
