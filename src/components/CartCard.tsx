"use client";

import { useState } from "react";
import { Star, Plus, Minus } from "lucide-react";
import Image from "next/image";

interface CartCardProps {
  className?: string;
  productName?: string;
  productImage?: string;
  initialQuantity?: number;
  pricePerItem?: number;
  onQuantityChange?: (quantity: number) => void;
}

export default function CartCard({
  className,
  productName = "The Gojo Hoodie",
  productImage = "/anime-hoodie.jpg.jpeg",
  initialQuantity = 2,
  pricePerItem = 39.99,
  onQuantityChange,
}: CartCardProps) {
  const [quantity, setQuantity] = useState(initialQuantity);
  const [isFavorited, setIsFavorited] = useState(false);

  const total = quantity * pricePerItem;

  const incrementQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange?.(newQuantity);
  };

  const decrementQuantity = () => {
    const newQuantity = Math.max(1, quantity - 1);
    setQuantity(newQuantity);
    onQuantityChange?.(newQuantity);
  };

  return (
    <div
      className={`bg-[#1C1C1C] rounded-2xl shadow-lg overflow-hidden border border-[#2A2A2A] w-80 transition-all hover:shadow-xl ${
        className || ""
      }`}
    >
      {/* Product Image */}
      <div className="relative w-full h-[200px] bg-[#2A2A2A]">
        <Image
          src={productImage || "/placeholder.svg"}
          alt={productName}
          fill
          className="object-cover"
          priority
        />

        {/* Favorite Button */}
        <button
          className={`absolute top-4 right-4 z-10 h-9 w-9 rounded-full flex items-center justify-center transition-all ${
            isFavorited
              ? "bg-[#302F2F] text-yellow-400"
              : "bg-[#302F2F] text-gray-400 hover:text-yellow-400"
          }`}
          onClick={() => setIsFavorited(!isFavorited)}
        >
          <Star className={`h-5 w-5 ${isFavorited ? "fill-current" : ""}`} />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-4">
        {/* Title & Quantity Control */}
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">{productName}</h3>
          <div className="flex items-center gap-2 bg-[#2A2A2A] rounded-full px-2 py-1">
            <button
              className="h-7 w-7 text-gray-400 hover:text-white flex items-center justify-center rounded transition-colors"
              onClick={decrementQuantity}
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="text-sm font-medium text-white min-w-[24px] text-center">
              {quantity}
            </span>
            <button
              className="h-7 w-7 text-gray-400 hover:text-white flex items-center justify-center rounded transition-colors"
              onClick={incrementQuantity}
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Price Section */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-sm">Price</span>
            <span className="text-gray-300 text-sm">
              ${pricePerItem.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-sm">Total</span>
            <span className="text-white font-semibold text-lg">
              ${total.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button className="w-full h-9 bg-[#ab03e3] hover:bg-[#9602cc] text-white font-semibold rounded-lg transition-colors duration-200 text-sm">
          Add To Cart
        </button>
      </div>
    </div>
  );
}
