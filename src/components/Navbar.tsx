"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import SearchBar from "./SearchBar";
import BellIcon from "./BellIcon";
import CartIcon from "./CartIcon";


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  // Ref to store timeout ID for closing notification dropdown
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Show notification instantly
  const handleNotificationEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setIsNotificationOpen(true);
  };

  // Delay closing notification by 200ms
  const handleNotificationLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsNotificationOpen(false);
    }, 200);
  };

  useEffect(() => {
    if (isMenuOpen && mobileMenuRef.current) {
      const firstLink = mobileMenuRef.current.querySelector<HTMLAnchorElement>("a");
      firstLink?.focus();
    }
  }, [isMenuOpen]);

  return (
  <nav className="navbar fixed top-0 left-0 w-full h-[65px] z-50 bg-[var(--background)] text-white shadow-lg">
      <div className="max-w-full mx-auto px-4 lg:px-8 flex items-center justify-between h-[65px] relative">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-6">
          <Link href="/" className="block h-[40px] w-[160px] relative">
            <Image
              src="/animeplus-logo.png"
              alt="AnimePlus Logo"
              fill
              className="object-contain hover:opacity-80 transition-opacity duration-500"
              priority
            />
          </Link>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* SearchBar */}
          <div className="hidden sm:block">
            <SearchBar />
          </div>

          {/* Notification with Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleNotificationEnter}
            onMouseLeave={handleNotificationLeave}
          >
            {/* Notification Icon */}
            <div className="w-8 h-8 relative flex items-center justify-center group">
              <Link href="/notifications" className="inline-flex items-center justify-center w-10 h-10">
                <BellIcon />
              </Link>
            </div>

            {/* Notification Dropdown */}
            {isNotificationOpen && (
              <div
                role="menu"
                aria-label="Notifications"
                className="absolute mt-2 right-0 sm:right-0 sm:w-80 w-[calc(100%-1rem)] left-2 bg-surface border border-neutral-700 rounded-lg shadow-xl z-50"
                onMouseEnter={handleNotificationEnter}
                onMouseLeave={handleNotificationLeave}
              >
                <div className="p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">Notifications</h3>
                    <button className="text-sm text-blue-400 hover:text-blue-300">
                      Mark all as read
                    </button>
                  </div>

                  <div className="space-y-3 max-h-72 sm:max-h-96 overflow-y-auto modern-scrollbar">
                    <div className="p-3 bg-surface/90 rounded-lg hover:bg-surface cursor-pointer">
                      <p className="text-sm">Your order #12345 has been shipped!</p>
                      <p className="text-xs text-gray-400 mt-1">10 minutes ago</p>
                    </div>

                    <div className="p-3 bg-surface/90 rounded-lg hover:bg-surface cursor-pointer">
                      <p className="text-sm">Special discount on all manga this weekend!</p>
                      <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
                    </div>

                    <div className="p-3 bg-surface/90 rounded-lg hover:bg-surface cursor-pointer">
                      <p className="text-sm">New Naruto apparel collection is now available</p>
                      <p className="text-xs text-gray-400 mt-1">1 day ago</p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-700">
                    <Link
                      href="/notifications"
                      className="block text-center text-blue-400 hover:text-blue-300 text-sm"
                    >
                      View all notifications
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Cart */}
          <div className="w-8 h-8 relative flex items-center justify-center group">
            <Link href="/cart" className="inline-flex items-center justify-center w-10 h-10">
              <CartIcon />
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
            {/* Mobile Menu Panel (shows on small screens when hamburger is toggled) */}
            <div
              ref={mobileMenuRef}
              className={`lg:hidden transition-all duration-200 ease-in-out ${isMenuOpen ? "max-h-screen" : "max-h-0 overflow-hidden"}`}
              aria-hidden={!isMenuOpen}
            >
              <div
                role="dialog"
                aria-label="Mobile menu"
                className={`bg-surface border-t border-neutral-700 p-4 ${isMenuOpen ? "block" : "hidden"}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-lg font-semibold">Menu</div>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Close menu"
                    className="p-2 rounded hover:bg-surface/90"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="space-y-3">
                  <Link href="/" onClick={() => setIsMenuOpen(false)} className="block text-white py-2 px-2 rounded hover:bg-surface/90">Home</Link>
                  <Link href="/women" onClick={() => setIsMenuOpen(false)} className="block text-white py-2 px-2 rounded hover:bg-surface/90">Women</Link>
                  <Link href="/men" onClick={() => setIsMenuOpen(false)} className="block text-white py-2 px-2 rounded hover:bg-surface/90">Men</Link>
                  <Link href="/decoration" onClick={() => setIsMenuOpen(false)} className="block text-white py-2 px-2 rounded hover:bg-surface/90">Decoration</Link>
                  <Link href="/notifications" onClick={() => setIsMenuOpen(false)} className="block text-white py-2 px-2 rounded hover:bg-surface/90">Notifications</Link>
                  <Link href="/cart" onClick={() => setIsMenuOpen(false)} className="block text-white py-2 px-2 rounded hover:bg-surface/90">Cart</Link>
                  <Link href="/login" onClick={() => setIsMenuOpen(false)} className="block bg-white text-black rounded-[10px] text-[18px] font-bold py-2 px-3 text-center">Login</Link>
                </div>
              </div>
            </div>
          </nav>
      );
}

export default Navbar;
