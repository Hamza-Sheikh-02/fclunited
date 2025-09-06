import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-12">
              <Image
                src="/images/Hero/logo.png"
                alt="FCL Logo"
                width={64}
                height={48}
                className="object-contain"
              />
            </div>
            <p className="text-gray-600 text-sm">
              © The FCL, LLC. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <Link
              href="/"
              className="text-red-600 hover:text-red-700 font-medium"
            >
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-800">
              About Us
            </Link>
            <Link
              href="/league-info"
              className="text-gray-600 hover:text-gray-800"
            >
              League Info
            </Link>
            <Link
              href="/licensee-info"
              className="text-gray-600 hover:text-gray-800"
            >
              Licensee Info
            </Link>
            <Link href="/events" className="text-gray-600 hover:text-gray-800">
              FCL Events
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-800">
              Shop
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mt-6 pt-6 border-t border-gray-100 text-xs text-gray-500">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="#" className="hover:text-gray-700">
              Privacy Policy
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="#" className="hover:text-gray-700">
              FCL Privacy
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="#" className="hover:text-gray-700">
              EU/UK Privacy
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="#" className="hover:text-gray-700">
              Terms of Service
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="#" className="hover:text-gray-700">
              Cookie Settings
            </Link>
          </div>
          
          <p className="mb-4 mr-4 md:mb-0">
            Website Designed by{" "}
            <strong className="font-medium text-gray-700">
              <Link
                href={"https://imagin8creations.com/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                IMAGIN8 CREATIONS
              </Link>
            </strong>
          </p>
        </div>
      </div>
    </footer>
  );
}
