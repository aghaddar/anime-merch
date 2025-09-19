"use client";
import React from "react";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  id: number | string;
  title?: string;
  name?: string;
  imageUrl?: string;
  image?: string;
  price?: number;
  className?: string;
  onAddToCart?: (id: number | string) => void;
}

export default function ProductCard({
  id,
  title,
  name,
  imageUrl,
  image,
  price = 0,
  className = "",
  onAddToCart,
}: ProductCardProps) {
  const router = useRouter();
  const label = title ?? name ?? "Product";
  const src = imageUrl ?? image ?? "/placeholder.png";
  const formattedPrice = typeof price === "number" ? price.toFixed(2) : "0.00";

  const handleNavigate = () => {
    router.push(`/product/${id}`);
  };

  return (
    // clickable wrapper navigates to product page; keeps inner button interactive
    <div
      role="link"
      tabIndex={0}
      onClick={handleNavigate}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleNavigate();
        }
      }}
      className={`w-full h-full bg-[#1C1C1C] rounded-lg shadow-lg overflow-hidden flex flex-col ${className} cursor-pointer`}
    >
      {/* fixed image area */}
      <div className="w-full h-40 md:h-44 lg:h-48 overflow-hidden">
        <img src={src} alt={label} className="w-full h-full object-cover" />
      </div>

      <div className="p-4 flex-1 flex flex-col gap-3">
        <h3 className="font-semibold text-lg text-white truncate">{label}</h3>

        <p className="text-gray-400 text-base sm:text-lg font-bold">
          ${formattedPrice}
        </p>

        <div className="mt-auto">
          <button
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              onAddToCart?.(id);
            }}
            className="bg-[#ab03e3] hover:bg-[#9002c7] text-white py-3 rounded-md font-bold w-full text-center"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}