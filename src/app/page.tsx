"use client";

import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import ProductList from "@/components/CardList";
import { Footer } from "@/components/Footer";
const sampleProducts = [
  {
    id: 1,
    name: "The Gojo Hoodie",
    price: 39.99,
    image: "/black-anime-hoodie-with-character-artwork.jpg",
    rating: 5,
    reviews: 150,
    category: "clothing",
  },
  {
    id: 2,
    name: "Naruto Sweatshirt",
    price: 34.99,
    image: "/orange-naruto-themed-sweatshirt.jpg",
    rating: 4,
    reviews: 89,
    category: "clothing",
  },
  {
    id: 3,
    name: "Dragon Ball Z Tee",
    price: 24.99,
    image: "/dragon-ball-z-t-shirt-with-goku.jpg",
    rating: 5,
    reviews: 203,
    category: "clothing",
  },
  {
    id: 4,
    name: "Attack on Titan Jacket",
    price: 59.99,
    image: "/attack-on-titan-military-style-jacket.jpg",
    rating: 4,
    reviews: 67,
    category: "clothing",
  },
  {
    id: 5,
    name: "One Piece Cap",
    price: 19.99,
    image: "/one-piece-straw-hat-pirate-cap.jpg",
    rating: 4,
    reviews: 124,
    category: "accessories",
  },
  {
    id: 6,
    name: "Demon Slayer Hoodie",
    price: 42.99,
    image: "/demon-slayer-tanjiro-hoodie-black-and-green.jpg",
    rating: 5,
    reviews: 178,
    category: "clothing",
  },
  {
    id: 7,
    name: "My Hero Academia Shirt",
    price: 27.99,
    image: "/my-hero-academia-deku-shirt-green.jpg",
    rating: 4,
    reviews: 95,
    category: "clothing",
  },
  {
    id: 8,
    name: "Tokyo Ghoul Mask",
    price: 15.99,
    image: "/tokyo-ghoul-kaneki-mask-white-and-red.jpg",
    rating: 3,
    reviews: 45,
    category: "accessories",
  },
]
export default function Home() {
const { scrollY } = useScroll();




  // LOGO fades out as you scroll from 0 → 300px
  const logoOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const logoScale = useTransform(scrollY, [0, 300], [1, 0.8]);

  // NAVBAR fades in and slides up
  const navbarOpacity = useTransform(scrollY, [150, 300], [0, 1]);
  const navbarY = useTransform(scrollY, [150, 300], [50, 0]);

  // IMAGE GRID fades in and slides up
  const imagesOpacity = useTransform(scrollY, [250, 400], [0, 1]);
  const imagesY = useTransform(scrollY, [250, 400], [50, 0]);


  return (
    <div className="bg-[#0F0F0F] min-h-screen relative w-full">
      
      <motion.div
        style={{ opacity: logoOpacity, scale: logoScale }}
        className="h-screen flex items-center justify-center  text-white fixed top-0 left-0 w-full z-50"
      >
        <h1 className="text-6xl font-[ungee] md:text-7xl font-bold tracking-wide">
          ANIMEPLUS
        </h1>
      </motion.div>
      
      {/* ====== MAIN CONTENT ====== */}
      <div className="pt-[100vh]"></div>
      
      {/* NAVBAR */}
        <motion.div
          style={{ opacity: navbarOpacity, y: navbarY }}
          className="fixed top-0 left-0 w-full z-40"
        >
          <Navbar />
        </motion.div>
      
      {/* category section */}
        <motion.div
          style={{ opacity: imagesOpacity, y: imagesY }}
          className="mt-28"
        >
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
  );
}
