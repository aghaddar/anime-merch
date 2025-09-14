"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Navbar from "@/components/Navbar"
import ProductList from "@/components/CardList"
import { Footer } from "@/components/Footer"
import { sampleProducts } from "@/lib/data"

export default function Home() {
  const { scrollY } = useScroll()

  // LOGO fades out as you scroll from 0 → 300px
  const logoOpacity = useTransform(scrollY, [0, 300], [1, 0])
  const logoScale = useTransform(scrollY, [0, 300], [1, 0.8])

  // NAVBAR fades in and slides up
  const navbarOpacity = useTransform(scrollY, [150, 300], [0, 1])
  const navbarY = useTransform(scrollY, [150, 300], [50, 0])

  // IMAGE GRID fades in and slides up
  const imagesOpacity = useTransform(scrollY, [250, 400], [0, 1])
  const imagesY = useTransform(scrollY, [250, 400], [50, 0])

  return (
    <div className="bg-[#0F0F0F] min-h-screen relative w-full">
      <motion.div
        style={{ opacity: logoOpacity, scale: logoScale }}
        className="h-screen flex items-center justify-center  text-white fixed top-0 left-0 w-full z-50"
      >
        <h1 className="text-6xl font-[ungee] md:text-7xl font-bold tracking-wide">ANIMEPLUS</h1>
      </motion.div>

      {/* ====== MAIN CONTENT ====== */}
      <div className="pt-[100vh]"></div>

      {/* NAVBAR */}
      <motion.div style={{ opacity: navbarOpacity, y: navbarY }} className="fixed top-0 left-0 w-full z-40">
        <Navbar />
      </motion.div>

      {/* category section */}
      <motion.div style={{ opacity: imagesOpacity, y: imagesY }} className="mt-28">
        <div className="category flex items-stretch w-full h-[calc(100vh-4rem)]">
          {/* women */}
          <div className="flex-1 relative ml-8 mr-2 rounded-[10px] overflow-hidden ">
            <a href="" className="hover:opacity-75 block h-full">
              <img src="/women.png" alt="women's section" className="w-full h-full object-cover" />
            </a>
          </div>
          {/* men */}
          <div className="flex-1 relative mx-4 rounded-[10px] overflow-hidden">
            <a href="" className="hover:opacity-75 block h-full">
              <img src="/men.png" alt="men's section" className="w-full h-full object-cover" />
            </a>
          </div>
          {/* decoration */}
          <div className="decoration flex-1 relative ml-2 mr-8 rounded-[10px] overflow-hidden">
            <a href="" className="hover:opacity-75 block h-full">
              <img src="/decoration.png" alt="decoration's section" className="w-full h-full object-cover" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Product Lists */}
      <main>
        <ProductList products={sampleProducts} title="Featured Products" />

        <ProductList products={sampleProducts.filter((p) => p.category === "clothing")} title="Clothing Collection" />

        <ProductList products={sampleProducts.filter((p) => p.category === "accessories")} title="Accessories" />
      </main>
      <Footer />
    </div>
  )
}
