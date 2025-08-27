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
        <div className="flex items-center justify-between px-6 md:px-10 py-4 max-w-7xl mx-auto">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={"/images/Navigation/logo.png"}
                width={75}
                height={75}
                alt="logo"
              />
            </Link>
          </div>

          <div className="hidden md:flex">
            <ul className="flex items-center gap-8">
              <li>
                <Link
                  href="/"
                  className={`text-gray-700 hover:text-red-600 font-medium pb-1 border-b-2 transition-colors ${
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
                  className={`text-gray-700 hover:text-red-600 font-medium pb-1 border-b-2 transition-colors ${
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
                  className={`text-gray-700 hover:text-red-600 font-medium pb-1 border-b-2 transition-colors ${
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
                  className={`text-gray-700 hover:text-red-600 font-medium pb-1 border-b-2 transition-colors ${
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
                  className={`text-gray-700 hover:text-red-600 font-medium pb-1 border-b-2 transition-colors ${
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
                  className={`text-gray-700 hover:text-red-600 font-medium pb-1 border-b-2 transition-colors ${
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

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="hidden md:inline-flex border-red-600 text-red-600 hover:bg-red-50 bg-transparent"
            >
              FCL Login
            </Button>
            <Button className="hidden md:inline-flex bg-red-600 hover:bg-red-700 text-white">
              JOIN FCL
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="md:hidden bg-transparent"
                  aria-label="Open Mobile Menu"
                >
                  <FiMenu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle className="text-xl font-bold">
                    FCL Menu
                  </SheetTitle>
                </SheetHeader>
                <ul className="flex flex-col gap-4 mt-6">
                  <li>
                    <Link
                      href="/"
                      className={`font-medium block py-2 border-l-4 pl-4 transition-colors ${
                        pathname === "/"
                          ? "border-red-600 text-red-600 bg-red-50"
                          : "border-transparent text-gray-700 hover:text-red-600"
                      }`}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className={`font-medium block py-2 border-l-4 pl-4 transition-colors ${
                        pathname === "/about"
                          ? "border-red-600 text-red-600 bg-red-50"
                          : "border-transparent text-gray-700 hover:text-red-600"
                      }`}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/league-info"
                      className={`font-medium block py-2 border-l-4 pl-4 transition-colors ${
                        pathname === "/league-info"
                          ? "border-red-600 text-red-600 bg-red-50"
                          : "border-transparent text-gray-700 hover:text-red-600"
                      }`}
                    >
                      League Info
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/licensee-info"
                      className={`font-medium block py-2 border-l-4 pl-4 transition-colors ${
                        pathname === "/licensee-info"
                          ? "border-red-600 text-red-600 bg-red-50"
                          : "border-transparent text-gray-700 hover:text-red-600"
                      }`}
                    >
                      Licensee Info
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/events"
                      className={`font-medium block py-2 border-l-4 pl-4 transition-colors ${
                        pathname === "/events"
                          ? "border-red-600 text-red-600 bg-red-50"
                          : "border-transparent text-gray-700 hover:text-red-600"
                      }`}
                    >
                      FCL Events
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/shop"
                      className={`font-medium block py-2 border-l-4 pl-4 transition-colors ${
                        pathname === "/shop"
                          ? "border-red-600 text-red-600 bg-red-50"
                          : "border-transparent text-gray-700 hover:text-red-600"
                      }`}
                    >
                      Shop
                    </Link>
                  </li>
                  <li className="pt-4 border-t">
                    <Button
                      variant="outline"
                      className="w-full mb-2 border-red-600 text-red-600 hover:bg-red-50 bg-transparent"
                    >
                      FCL Login
                    </Button>
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                      JOIN FCL
                    </Button>
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
