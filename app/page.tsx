// app/page.tsx

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic'; 

import { ProductCard } from "@/components/ProductCard";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export default async function HomePage() {
  let products: Product[] = [];

  try {
    const res = await fetch("https://fakestoreapi.com/products?limit=12", {
      // Optional: Enable caching (great for perf!)
      // next: { revalidate: 3600 }, // ISR: revalidate every hour
    });

    if (!res.ok) throw new Error("Failed to fetch products");
    products = await res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    // Fallback: empty array
  }

  return (
    <div>
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Discover Amazing Products
        </h1>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          Handpicked items at great prices. 
          <span className="hidden sm:inline"> 
            {" "}If you have our app installed, links will open directly in it!
          </span>
        </p>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">Loading products...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* Optional: Smart Banner hint for Android users */}
      <div 
        id="app-hint" 
        className="mt-12 p-4 bg-blue-50 border border-blue-200 rounded-lg text-blue-800 max-w-2xl mx-auto"
      >
        <p className="font-medium flex items-center">
          <span className="mr-2">📱</span>
          <span>
            On Android? Tap any product link above — if you have our app installed, it will open instantly!
          </span>
        </p>
      </div>
    </div>
  );
}