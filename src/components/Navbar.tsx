"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // ✅ Import Next.js Image
import { Menu, X } from "lucide-react";
import SearchBar from "./SearchBar";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar fixed top-0 left-0 w-full z-50 bg-[#1c1c1c] text-white shadow-lg">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 flex items-center justify-between h-[80px] relative">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-6">
          <Link href="/" className="block h-[40px] w-[160px] relative">
            <Image
              src="/animeplus-logo.png"
              alt="AnimePlus Logo"
              fill
              className="object-contain hover:opacity-80 transition-opacity duration-500"
              priority // ✅ Preloads logo for better LCP
            />
          </Link>

          {/* Desktop Categories */}
          <div className="hidden lg:flex items-center justify-center relative">
            <div className="group cursor-pointer relative">
              <div className="flex items-center gap-2">
                <span className="text-white text-[18px] font-light tracking-wide">
                  Genre
                </span>
                <svg
                  className="w-5 h-5 text-white transition-transform duration-300 ease-in-out group-hover:rotate-180"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-2 w-[800px] bg-[#2a2a2a] border border-gray-600 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50">
                <div className="grid grid-cols-3 gap-8 p-6">
                  {/* Apparel */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-white border-b border-gray-600 pb-2">
                      Apparel
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-md font-medium text-gray-300 mb-2">
                          Men | Women | Kids
                        </h4>
                        <ul className="text-sm text-gray-300 space-y-1 ml-2">
                          {["Hoodies", "T-Shirts", "Socks", "Pants", "Tanks", "Jackets"].map(
                            (item) => (
                              <li
                                key={item}
                                className="hover:text-white cursor-pointer"
                              >
                                {item}
                              </li>
                            )
                          )}
                        </ul>
                      </div>

                      <div className="mt-3">
                        <p className="text-sm text-gray-400 font-medium">
                          Accessories:
                        </p>
                        <ul className="text-sm text-gray-300 space-y-1 ml-2">
                          {["Hats", "Necklace", "Rings", "Key chains", "Earrings"].map(
                            (item) => (
                              <li
                                key={item}
                                className="hover:text-white cursor-pointer"
                              >
                                {item}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Manga */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-white border-b border-gray-600 pb-2">
                      Manga
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-400 font-medium mb-2">
                          Format:
                        </p>
                        <ul className="text-sm text-gray-300 space-y-1 ml-2">
                          {["Hard copy", "Soft copy"].map((item) => (
                            <li
                              key={item}
                              className="hover:text-white cursor-pointer"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 font-medium mb-2">
                          Genres:
                        </p>
                        <ul className="text-sm text-gray-300 space-y-1 ml-2">
                          {[
                            "Action",
                            "Adventure",
                            "Comedy",
                            "Drama",
                            "Fantasy",
                            "Horror",
                            "Romance",
                            "Sci-Fi",
                            "Slice of Life",
                          ].map((item) => (
                            <li
                              key={item}
                              className="hover:text-white cursor-pointer"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Decoration */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-white border-b border-gray-600 pb-2">
                      Decoration
                    </h3>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {[
                        "Paintings",
                        "Katana",
                        "Sculptures",
                        "Figurines",
                        "Vases",
                        "Tapestries",
                        "Wall hangings",
                        "Decorative clocks",
                        "Unique lamps",
                        "Collectible items",
                      ].map((item) => (
                        <li
                          key={item}
                          className="hover:text-white cursor-pointer"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* SearchBar (hidden on very small screens) */}
          <div className="hidden sm:block">
            <SearchBar />
          </div>

          {/* Notification */}
          <div className="w-6 h-6 relative">
            <Image
              src="/darkmode-notification.png"
              alt="Notifications"
              width={24}
              height={24}
            />
          </div>

          {/* Cart */}
          <div className="w-6 h-6 relative">
            <Link href="/add-to-cart">
              <Image
                src="/darkmode-cart.png"
                alt="Cart"
                width={24}
                height={24}
                className="hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>

          {/* Login */}
          <Link
            href="/login"
            className="hidden sm:flex h-[40px] w-[100px] bg-white text-black rounded-[10px] text-[18px] font-bold items-center justify-center hover:opacity-80 transition-opacity duration-500"
          >
            Login
          </Link>

          {/* Mobile Hamburger Menu */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden fixed top-[80px] left-0 w-full bg-[#2a2a2a] border-t border-gray-700 transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 space-y-4">
          <SearchBar />

          <div className="space-y-2">
            <h4 className="text-white text-lg font-semibold">Categories</h4>
            <ul className="text-gray-300 space-y-1">
              {["Apparel", "Manga", "Decoration"].map((item) => (
                <li key={item} className="hover:text-white cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/login"
            className="block text-center bg-white text-black rounded-[8px] py-2 font-semibold hover:opacity-80 transition-opacity duration-300"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
