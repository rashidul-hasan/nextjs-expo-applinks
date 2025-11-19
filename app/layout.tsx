// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YourStore — Premium Products",
  description: "Discover amazing products. Open in app for the best experience!",
  // Essential for App Links: same domain must be used in Expo!
  // e.g., if Expo uses "yourstore.com", this must be deployed there.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen bg-gray-50">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-6">
            {children}
          </main>
          <footer className="bg-white border-t py-6 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} YourStore. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}

// Simple header
function Header() {
  return (
    <header className="bg-indigo-600 text-white py-4">
      <div className="container mx-auto px-4 flex items-center">
        <Link href={'/'}><div className="text-xl font-bold">🛍️ YourStore</div></Link>
        <nav className="ml-auto hidden md:block">
          <a href="/" className="ml-6 hover:underline">Home</a>
          <a href="/#categories" className="ml-6 hover:underline">Categories</a>
        </nav>
      </div>
    </header>
  );
}