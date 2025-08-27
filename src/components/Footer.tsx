import Image from "next/image";

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
            <a href="#" className="text-red-600 hover:text-red-700 font-medium">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              About Us
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              League Info
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Licensee Info
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              FCL Events
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Shop
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-6 pt-6 border-t border-gray-100 text-xs text-gray-500">
          <a href="#" className="hover:text-gray-700">
            Privacy Policy
          </a>
          <span className="text-gray-300">|</span>
          <a href="#" className="hover:text-gray-700">
            FCL Privacy
          </a>
          <span className="text-gray-300">|</span>
          <a href="#" className="hover:text-gray-700">
            EU/UK Privacy
          </a>
          <span className="text-gray-300">|</span>
          <a href="#" className="hover:text-gray-700">
            Terms of Service
          </a>
          <span className="text-gray-300">|</span>
          <a href="#" className="hover:text-gray-700">
            Cookie Settings
          </a>
        </div>
      </div>
    </footer>
  );
}
