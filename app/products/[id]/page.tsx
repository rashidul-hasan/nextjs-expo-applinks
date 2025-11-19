// 'use client'
import { notFound } from "next/navigation";
import Link from "next/link";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  let {id} = await params;
  // id = Number(id)
  console.log('id in details', id)
  // if (isNaN(id) || id <= 0) {
  //   notFound();
  // }

  let product: Product | null = null;

  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      if (res.status === 404) notFound();
      throw new Error("Failed to fetch product");
    }
    product = await res.json();
  } catch (error) {
    console.error("Error fetching product:", error);
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto">
      <nav className="mb-6">
        <Link 
          href="/" 
          className="text-indigo-600 hover:text-indigo-800 flex items-center"
        >
          ← Back to Products
        </Link>
      </nav>

      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 p-6 md:p-8 flex items-center justify-center bg-gray-50">
            <img
              src={product.image}
              alt={product.title}
              className="max-w-full h-auto max-h-96 object-contain"
            />
          </div>

          <div className="md:w-1/2 p-6 md:p-8">
            <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
              {product.category}
            </span>

            <h1 className="mt-2 text-2xl md:text-3xl font-bold text-gray-900">
              {product.title}
            </h1>

            <div className="mt-3 flex items-center">
              <span className="flex text-yellow-400">
                {"★".repeat(Math.floor(product.rating.rate))}
                {"☆".repeat(5 - Math.floor(product.rating.rate))}
              </span>
              <span className="ml-2 text-gray-600">
                {product.rating.rate} ({product.rating.count} reviews)
              </span>
            </div>

            <p className="mt-6 text-3xl font-bold text-green-600">
              ${product.price.toFixed(2)}
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              {product.description}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              {/* <button
                onClick={() => alert(`Added "${product.title}" to cart!`)}
                className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                🛒 Add to Cart
              </button>
              <button className="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-3 px-6 rounded-lg">
                ❤️ Wishlist
              </button> */}
            </div>

            {/* 🔗 Critical for App Links: same URL structure as Expo */}
            {/* Android will intercept this if app is installed */}
            <div className="mt-8 pt-6 border-t text-sm text-gray-500">
              <p>
                🔗 This page is also available in our mobile app.  
                On Android, links like{" "}
                <code className="bg-gray-100 px-1 rounded">
                  https://yourstore.com/product/{product.id}
                </code>{" "}
                open directly in the app if installed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}