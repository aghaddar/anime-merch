"use client";
import { useMemo, useState, useEffect } from "react";
import Link from "next/link";
import ProductCard from "../../components/ProductCard";
import { useSearchParams } from "next/navigation";
import { sampleProducts, type Product } from "../../lib/data";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const initialQ = searchParams?.get("query") ?? "";
  const [query, setQuery] = useState(initialQ);

  useEffect(() => {
    // update query if URL param changes (client navigation)
    const q = searchParams?.get("query") ?? "";
    setQuery(q);
  }, [searchParams]);

  const results = useMemo(() => {
    const q = (query ?? "").trim().toLowerCase();
    if (!q) return sampleProducts;
    return sampleProducts.filter((p: Product) => {
      return (
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    });
  }, [query]);

  return (
    <main className="min-h-screen bg-[#0F0F0F] text-white py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">Search Products</h1>

        <div className="mb-6">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or category..."
            className="w-full rounded-[10px] border border-[#3A3A3A] bg-[#1A1A1A] px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-[#B3B3B3]">Showing {results.length} result{results.length !== 1 ? "s" : ""}</p>
          {query && (
            <button
              className="text-sm text-blue-400 hover:text-blue-300"
              onClick={() => setQuery("")}
            >
              Clear
            </button>
          )}
        </div>

        {results.length === 0 ? (
          <div className="p-6 bg-[#1A1A1A] rounded-lg">No products found for "{query}"</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
            {results.map((p) => (
              <div key={p.id} className="h-full">
                <ProductCard
                  id={p.id}
                  name={p.name}
                  image={p.image}
                  price={p.price}
                  rating={p.rating}
                  category={p.category}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
