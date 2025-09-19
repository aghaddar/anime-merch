"use client";

import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";
import { sampleProducts } from "@/lib/data";

export default function WomenPage() {
  const womenProducts = sampleProducts.filter(
    (product) => product.category === "clothing"
  );

  return (
    <div className="mt-10">
      <Navbar />
      <main className="px-4 sm:px-6 lg:px-8">
        <ProductGrid title="Women's Collection" products={womenProducts} />
      </main>
      <Footer />
    </div>
  );
}
