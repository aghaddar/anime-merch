"use client"

import { useState } from "react"
import { Star, Plus, Minus } from "lucide-react"
import Image from "next/image"

interface CartCardProps {
  productName: string
  productImage: string
  initialQuantity: number
  pricePerItem: number
  onQuantityChange?: (quantity: number) => void
  className?: string
}

export default function CartCard({
  productName,
  productImage,
  initialQuantity,
  pricePerItem,
  onQuantityChange,
  className,
}: CartCardProps) {
  const [quantity, setQuantity] = useState(initialQuantity)

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) return
    setQuantity(newQuantity)
    onQuantityChange?.(newQuantity)
  }

  return (
    <div className={`w-full bg-[#1C1C1C] rounded-lg shadow-lg overflow-hidden flex flex-col ${className}`}>
      {/* Product Image */}
      <div className="relative w-full h-48 bg-gray-800">
        <Image
          src={productImage}
          alt={productName}
          fill
          className="object-cover rounded-t-lg"
        />
        {/* Favorite Button */}
        <button className="absolute top-2 right-2 p-2 bg-black/40 rounded-full hover:bg-black/60 transition">
          <Star className="w-5 h-5 text-gray-300 hover:text-yellow-400" />
        </button>
      </div>

      {/* Product Details */}
      <div className="p-4 flex flex-col gap-4">
        <h3 className="font-semibold text-lg truncate">{productName}</h3>

        {/* Quantity Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              className="px-2 py-1 bg-gray-700 rounded hover:bg-gray-600 transition"
              onClick={() => handleQuantityChange(quantity - 1)}
            >
              <Minus className="w-4 h-4 text-white" />
            </button>
            <span className="px-3 text-white">{quantity}</span>
            <button
              className="px-2 py-1 bg-gray-700 rounded hover:bg-gray-600 transition"
              onClick={() => handleQuantityChange(quantity + 1)}
            >
              <Plus className="w-4 h-4 text-white" />
            </button>
          </div>

          <span className="text-gray-300 text-sm">x ${pricePerItem.toFixed(2)}</span>
        </div>

        {/* Price and Total */}
        <div className="flex justify-between items-center">
          <p className="text-gray-400 text-sm">Price</p>
          <p className="text-white font-medium">${pricePerItem.toFixed(2)}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-400 text-sm">Total</p>
          <p className="text-white font-semibold">
            ${(quantity * pricePerItem).toFixed(2)}
          </p>
        </div>

        {/* Add to Cart Button */}
        <button className="w-full bg-[#ab03e3] hover:bg-[#9002c7] text-white py-2 rounded-lg transition">
          Add To Cart
        </button>
      </div>
    </div>
  )
}
