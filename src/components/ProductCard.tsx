"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { sampleProducts } from "@/lib/data";

interface ProductCardProps {
  id: number | string;
  title?: string;
  name?: string;
  imageUrl?: string;
  image?: string;
  price?: number;
  rating?: number;
  reviews?: number;
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
  rating,
  reviews,
  category,
  className = "",
  onAddToCart,
}: ProductCardProps) {
  const label = title ?? name ?? "Product";
  const src = imageUrl ?? image ?? "/placeholder.png";
  const formattedPrice = typeof price === "number" ? price.toFixed(2) : "0.00";

  // Attempt to resolve rating/reviews from the sampleProducts data when not provided.
  const productFromData = sampleProducts.find((p) => String(p.id) === String(id));
  const effectiveRating = typeof rating === "number" && !isNaN(rating) ? rating : productFromData?.rating ?? 0;
  const effectiveReviews = typeof reviews === "number" && !isNaN(reviews) ? reviews : productFromData?.reviews ?? 0;

  // Use layout animations + a hover state to make the size/content reveal seamless.
  const [isHovered, setIsHovered] = useState(false);

  // Fixed card height to make the reveal predictable — we animate internals.
  const cardHeight = 360; // px

  const containerVariants = {
    offscreen: { opacity: 0, y: 20 },
    onscreen: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  };

  // We animate image scale, overlay opacity and details' maxHeight based on `isHovered`.
  // Layout on the container ensures the height change (when details expand) is animated smoothly.

  return (
    <Link href={`/product/${id}`} aria-label={`View product ${label}`}>
      <motion.article
  className={`w-full bg-surface rounded-lg overflow-hidden flex flex-col ${className} cursor-pointer`}
        variants={containerVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        layout
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        transition={{ layout: { type: 'spring', stiffness: 220, damping: 28 } }}
        style={{ height: cardHeight }}
      >
        {/* Image with zoom + quick view overlay */}
        {/* Image area: initially fills the card (100%), on hover shrinks to reveal details */}
        <motion.div
          className="relative w-full overflow-hidden"
          animate={{ height: isHovered ? "60%" : "100%" }}
          transition={{ type: "spring", stiffness: 180, damping: 20 }}
          style={{ willChange: "height" }}
        >
          <motion.div className="absolute inset-0" animate={{ scale: isHovered ? 1.06 : 1 }} transition={{ type: "spring", stiffness: 140, damping: 18 }} style={{ transformOrigin: "center" }}>
            <Image src={src} alt={label} fill sizes="(max-width: 768px) 100vw, 280px" className="object-cover" />
          </motion.div>

          {/* overlay */}
          <motion.div
            className="absolute inset-0 bg-black/30 flex items-center justify-center text-white text-sm font-semibold"
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.22, ease: [0.22, 0.8, 0.32, 1] }}
            style={{ willChange: "opacity" }}
          >
            Quick View
          </motion.div>
        </motion.div>

        <div className="p-4 flex-1 flex flex-col gap-3">
          <div className="flex items-center justify-between gap-3">
            {category ? (
              <span className="text-xs uppercase bg-surface/80 text-gray-300 px-2 py-1 rounded">{category}</span>
            ) : (
              <span />
            )}
          </div>

          <h3 className="font-semibold text-lg text-white truncate">{label}</h3>

          <motion.div
            className="mt-2 overflow-hidden"
            layout
            animate={{ opacity: isHovered ? 1 : 0, maxHeight: isHovered ? `${cardHeight * 0.4}px` : 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 28 }}
            aria-hidden={!isHovered}
            style={{ willChange: "max-height, opacity, transform" }}
          >
            <div className="flex items-center justify-between">
              <p className="text-gray-400 text-base sm:text-lg font-bold">${formattedPrice}</p>

              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={i < Math.round(effectiveRating) ? "text-yellow-400" : "text-gray-700"}>★</span>
                  ))}
                </div>
                <span className="text-gray-400">{effectiveRating ? effectiveRating.toFixed(1) : "0.0"}</span>
                {effectiveReviews ? <span className="text-gray-500 text-xs">• {effectiveReviews}</span> : null}
              </div>
            </div>

            <div className="mt-3">
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  onAddToCart?.(id);
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-[var(--primary-purple)] hover:bg-[var(--primary-purple-dark)] text-white py-3 rounded-[10px] font-bold w-full text-center"
              >
                Add to cart
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.article>
    </Link>
  );
}