// src/app/men/page.tsx
import { sampleProducts } from "@/lib/data";
import ProductGrid from "@/components/ProductGrid";

export default function MenPage() {
  const menProducts = sampleProducts.filter((product) => product.category === "men");

  return (
    <div className="mt-20">
      <ProductGrid title="Men's Collection" products={menProducts} />
    </div>
  );
}
