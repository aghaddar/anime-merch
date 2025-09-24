"use client";
import React, { useRef } from "react";
import ProductCard from "./ProductCard";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
}

interface ProductListProps {
  products: Product[];
  title?: string;
}

function ProductList({ products, title = "Featured Products" }: ProductListProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -400,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 400,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full py-8">
      <div className="flex items-center justify-between mb-6 px-4">
        <h2 className="text-3xl font-bold text-white">{title}</h2>

        <div className="flex gap-3">
          <button
            onClick={scrollLeft}
            aria-label="Scroll left"
            title="Scroll left"
            className="w-10 h-10 flex items-center justify-center bg-[#1F1F1F] rounded-full text-white shadow-sm transition-colors duration-200 hover:bg-[var(--primary-purple)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-purple)]/40"
          >
            <span className="text-lg select-none">‹</span>
          </button>

          <button
            onClick={scrollRight}
            aria-label="Scroll right"
            title="Scroll right"
            className="w-10 h-10 flex items-center justify-center bg-[#1F1F1F] rounded-full text-white shadow-sm transition-colors duration-200 hover:bg-[var(--primary-purple)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-purple)]/40"
          >
            <span className="text-lg select-none">›</span>
          </button>
        </div>
      </div>

      {/* wrapper is relative so we can position other UI if needed */}
      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto py-2 px-4 no-scrollbar"
          aria-label="Featured products"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-none w-[240px] sm:w-[260px] md:w-[280px] min-w-[240px] md:min-w-[280px] h-[420px]"
            >
              <ProductCard
                id={product.id}
                title={product.name}
                imageUrl={product.image}
                price={Number(product.price) || 0}
                className="h-full"
              />
            </div>
          ))}
        </div>

        {/* removed per-list ScrollProgressBar */}
      </div>

      <style jsx>{`
        :global(.no-scrollbar) {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        :global(.no-scrollbar::-webkit-scrollbar) {
          display: none;
        }
      `}</style>
    </div>
  );
}

export default ProductList;
