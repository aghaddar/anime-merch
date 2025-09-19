"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  id: number | string;
  title?: string;
  name?: string;
  imageUrl?: string;
  image?: string;
  price?: number;
  rating?: number;
  category?: string;
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
  rating = 0,
  category,
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
      {/* Use next/image for optimized loading */}
      <div className="relative w-full h-40 md:h-44 lg:h-48 overflow-hidden">
        <Image
          src={src}
          alt={label}
          fill
          sizes="(max-width: 768px) 100vw, 280px"
          className="object-cover"
          priority={false}
        />
      </div>

      <div className="p-4 flex-1 flex flex-col gap-3">
        <div className="flex items-center justify-between gap-3">
          {category ? (
            <span className="text-xs uppercase bg-[#151515] text-gray-300 px-2 py-1 rounded">
              {category}
            </span>
          ) : (
            <span />
          )}

          <div className="flex items-center gap-2 text-sm">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={
                    i < Math.round(rating)
                      ? "text-yellow-400"
                      : "text-gray-700"
                  }
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-gray-400">
              {rating ? rating.toFixed(1) : "0.0"}
            </span>
          </div>
        </div>

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