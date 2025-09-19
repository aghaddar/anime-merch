// src/components/ProductGrid.tsx
import ProductCard from "./ProductCard";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
}

interface ProductGridProps {
  title: string;
  products: Product[];
}

export default function ProductGrid({ title, products }: ProductGridProps) {
  return (
    <section className="px-6 py-12">
      {/* Section Title */}
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
        {title}
      </h2>

      {/* If no products, show a message */}
      {products.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
