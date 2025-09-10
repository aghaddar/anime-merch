"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"
import ProductCard from "./ProductCard"

interface Product {
  id: number
  name: string
  price: number
  image: string
  rating: number
  reviews: number
  category: string
}

interface ProductListProps {
  products: Product[]
  title?: string
}

function ProductList({ products, title = "Featured Products" }: ProductListProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -400,
        behavior: "smooth",
      })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 400,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="w-full py-8">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6 px-4">
        <h2 className="text-3xl font-bold text-white">{title}</h2>

        {/* Navigation Buttons */}
        <div className="flex gap-2">
          <button
            onClick={scrollLeft}
            className="p-2 rounded-full bg-[#302F2F] hover:bg-[#404040] text-white transition-colors duration-200"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollRight}
            className="p-2 rounded-full bg-[#302F2F] hover:bg-[#404040] text-white transition-colors duration-200"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Scrollable Product Container */}
      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide px-4 pb-4"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Custom scrollbar hiding styles */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}

export default ProductList
