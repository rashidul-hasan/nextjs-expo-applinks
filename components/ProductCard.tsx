// components/ProductCard.tsx
"use client";

import Link from "next/link";

type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
};

export function ProductCard({ product }: { product: Product }) {
    console.log('ProductCard', product)
  return (
    <Link 
      href={`/products/${product.id}`} 
      className="group block bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border"
    >
      <div className="aspect-square w-full bg-gray-100 flex items-center justify-center p-4">
        <img
          src={product.image}
          alt={product.title}
          className="object-contain max-h-48 transition-transform group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">
          {product.category}
        </span>
        <h3 className="mt-1 font-semibold text-gray-900 line-clamp-2">
          {product.title}
        </h3>
        <p className="mt-2 text-lg font-bold text-green-600">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </Link>
  );
}