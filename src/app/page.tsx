"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/Navbar"
import ProductList from "@/components/CardList"
import { Footer } from "@/components/Footer"
import { sampleProducts } from "@/lib/data"

export default function Home() {
  const { scrollY } = useScroll()

  // ====== Logo animation ======
  const logoOpacity = useTransform(scrollY, [0, 300], [1, 0])
  const logoScale = useTransform(scrollY, [0, 300], [1, 0.8])

  // ====== Navbar animation ======
  const navbarOpacity = useTransform(scrollY, [150, 300], [0, 1])
  const navbarY = useTransform(scrollY, [150, 300], [50, 0])

  // ====== Category section animation ======
  const imagesOpacity = useTransform(scrollY, [250, 400], [0, 1])
  const imagesY = useTransform(scrollY, [250, 400], [50, 0])

  return (
    <div className="bg-[#0F0F0F] min-h-screen relative w-full">
      {/* ====== INTRO LOGO ====== */}
      <motion.div
        style={{ opacity: logoOpacity, scale: logoScale }}
        className="h-screen flex items-center justify-center text-white fixed top-0 left-0 w-full z-50 pointer-events-none"
      >
        <h1 className="text-6xl font-[ungee] md:text-7xl font-bold tracking-wide">ANIMEPLUS</h1>
      </motion.div>

      {/* Push content below full-screen intro */}
      <div className="pt-[100vh]" />

      {/* ====== NAVBAR ====== */}
      <motion.div
        style={{ opacity: navbarOpacity, y: navbarY }}
        className="fixed top-0 left-0 w-full z-40 bg-[#0F0F0F]/80 backdrop-blur-md"
      >
        <Navbar />
      </motion.div>

      {/* ====== CATEGORY SECTION ====== */}
      <motion.div
        style={{ opacity: imagesOpacity, y: imagesY }}
        className="mt-28"
      >
        <div className="category flex flex-col md:flex-row items-stretch w-full h-auto md:h-[calc(100vh-4rem)]">
          {/* Women */}
          <Link
            href="/women"
            className="flex-1 relative ml-8 mr-2 rounded-[10px] overflow-hidden cursor-pointer block hover:opacity-75 transition-opacity"
          >
            <Image
              src="/women.png"
              alt="Women's section"
              fill
              className="object-cover pointer-events-none"
              priority
            />
          </Link>

          {/* Men */}
          <Link
            href="/men"
            className="flex-1 relative mx-4 rounded-[10px] overflow-hidden cursor-pointer block hover:opacity-75 transition-opacity"
          >
            <Image
              src="/men.png"
              alt="Men's section"
              fill
              className="object-cover pointer-events-none"
              priority
            />
          </Link>

          {/* Decoration */}
          <Link
            href="/decoration"
            className="flex-1 relative ml-2 mr-8 rounded-[10px] overflow-hidden cursor-pointer block hover:opacity-75 transition-opacity"
          >
            <Image
              src="/decoration.png"
              alt="Decoration section"
              fill
              className="object-cover pointer-events-none"
              priority
            />
          </Link>
        </div>
      </motion.div>

      {/* ====== BACKGROUND VIDEO ====== */}
      <div className="relative w-full h-screen overflow-hidden mt-20">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/websitevid.mp4" // Place your video in public/videos
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Optional Overlay for better contrast */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        {/* Text/Content over the video */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-white">
          <h2 className="text-4xl md:text-5xl font-bold">Discover Our Collection</h2>
          <p className="mt-4 text-lg">Unique pieces to elevate your style and home</p>
        </div>
      </div>


      {/* ====== PRODUCT LISTS ====== */}
      <main>
        <ProductList products={sampleProducts} title="Featured Products" />
        <ProductList
          products={sampleProducts.filter((p) => p.category === "clothing")}
          title="Clothing Collection"
        />
        <ProductList
          products={sampleProducts.filter((p) => p.category === "accessories")}
          title="Accessories"
        />
      </main>

      <Footer />
    </div>
  )
}
