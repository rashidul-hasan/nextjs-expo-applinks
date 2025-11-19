// app/page.tsx
import { ProductList } from "@/components/ProductList";

export default function HomePage() {
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

      <ProductList />

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