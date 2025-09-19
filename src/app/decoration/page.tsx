// src/app/decoration/page.tsx
import { sampleProducts } from "@/lib/data";
import ProductGrid from "@/components/ProductGrid";

export default function DecorationPage() {
  const decorationProducts = sampleProducts.filter((product) => product.category === "decoration");

  return (
    <div className="mt-20">
      <ProductGrid title="Home Decoration" products={decorationProducts} />
    </div>
  );
}
