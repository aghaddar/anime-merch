"use client"

import { Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Product {
  id: number
  name: string
  price: number
  image: string
  rating: number
  reviews: number
  category: string
}

interface ProductCardProps {
  product: Product
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`} className="block cursor-pointer group">
      <div className="w-[345px] h-[440px] mx-auto bg-[#302F2F] rounded-lg shadow-lg overflow-hidden flex flex-col flex-shrink-0 hover:shadow-xl hover:scale-[1.02] transition-all duration-200">
        {/* Product Image Section - 60% of total height */}
        <div className="relative h-[250px] w-[345px] bg-amber-900">
          <div className="absolute top-4 right-4">
            <Star className="w-6 h-6 fill-[#e6a100] text-[#e6a100]" />
          </div>

          <div className="flex h-full w-full justify-center items-center">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={`${product.name} - ${product.category}`}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Product Info Section - 40% of total height */}
        <div className="bg-[#302f2f] text-white p-4 h-[190px] w-[345px] flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${i < product.rating ? "fill-[#e6a100] text-[#e6a100]" : "fill-gray-600 text-gray-600"}`}
                  />
                ))}
              </div>
              <span className="text-[#a4a1a1] text-xs">({product.reviews} reviews)</span>
            </div>

            {/* Category Tag */}
            <div className="mb-1 h-7">
              <span className="inline-block px-2 py-1 text-xs border border-[#a4a1a1] text-[#a4a1a1] rounded">
                {product.category}
              </span>
            </div>

            <div className="text-2xl font-bold mb-3">${product.price}</div>
          </div>

          {/* Add to Cart Button */}
          <button
            className="w-full h-10 bg-[#ab03e3] hover:bg-[#9602cc] text-white font-semibold rounded-lg transition-colors duration-200 text-sm flex items-center justify-center relative z-10"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              // Add to cart logic here
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
