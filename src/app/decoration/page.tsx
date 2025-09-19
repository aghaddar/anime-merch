import ProductGrid from '@/components/ProductGrid';
import React from 'react';


// Sample data (replace with your actual data fetching)
const products = [
  { id: '1', title: 'Anime Figure Collection', imageUrl: '/figure1.jpg', price: 49.99 },
  { id: '2', title: 'Manga Volume Set', imageUrl: '/manga1.jpg', price: 29.99 },
  // More products...
];

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Our Products</h1>
      <ProductGrid products={products} />
    </div>
  );
}