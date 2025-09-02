
'use client';
import Image from 'next/image';// src/app/products/page.js
import Link from 'next/link';

import { useState, useEffect } from 'react';

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [mounted, setMounted] = useState(false);

  // Fix hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Sample product data - replace with your actual products
  const products = [
    // Women's Products
    {
      id: 1,
      name: "Traditional Wrap Dress",
      price: 2500,
      category: "women",
      image: "/images/TraditionalDress.jpeg",
      description: "Elegant wrap dress with traditional Kenyan patterns"
    },
    {
      id: 2,
      name: "Modern Kikoy Top",
      price: 1800,
      category: "women",
      image: "/images/Modern.jpeg",
      description: "Contemporary top featuring authentic Kikoy fabric"
    },
    {
      id: 3,
      name: "Ankara Maxi Dress",
      price: 3200,
      category: "women",
      image: "/images/Ankara.jpeg",
      description: "Stunning maxi dress in vibrant Ankara print"
    },
    {
      id: 4,
      name: "Casual Blouse",
      price: 2000,
      category: "women",
      image: "/images/Casual.jpeg",
      description: "Comfortable everyday blouse with subtle Kenyan accents"
    },
    // Children's Products
    {
      id: 5,
      name: "Kids Safari Shirt",
      price: 1200,
      category: "children",
      image: "/images/KidsSafari.jpeg",
      description: "Fun safari-themed shirt perfect for little adventurers"
    },
    {
      id: 6,
      name: "Traditional Kids Dress",
      price: 1500,
      category: "children",
      image: "/images/TraditionalDress.jpeg",
      description: "Beautiful traditional dress for special occasions"
    },
    {
      id: 7,
      name: "Casual Kids Set",
      price: 1800,
      category: "children",
      image: "/images/CasualSet.jpeg",
      description: "Comfortable two-piece set for everyday wear"
    },
    {
      id: 8,
      name: "Festival Outfit",
      price: 2200,
      category: "children",
      image: "/images/CasualSet.jpeg",
      description: "Colorful outfit perfect for cultural celebrations"
    }
  ];

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(product => product.category === activeFilter);

  // Don't render until mounted to prevent hydration issues
  if (!mounted) {
    return (
      <div className="min-h-screen bg-white">
        <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Our Collection</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">Loading...</p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header - Updated to match homepage style */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Our Collection
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Discover authentic Kenyan fashion for women and children
          </p>
        </div>
      </section>

    

      {/* Filter Tabs - Updated styling */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="flex justify-center space-x-2">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 transform hover:-translate-y-1 ${
                activeFilter === 'all'
                  ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 shadow-md'
              }`}
            >
              All Products
            </button>
            <button
              onClick={() => setActiveFilter('women')}
              className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 transform hover:-translate-y-1 ${
                activeFilter === 'women'
                  ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 shadow-md'
              }`}
            >
              Women
            </button>
            <button
              onClick={() => setActiveFilter('children')}
              className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 transform hover:-translate-y-1 ${
                activeFilter === 'children'
                  ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 shadow-md'
              }`}
            >
              Children
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid - Updated with better image handling */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Quick View Button */}
                  <button className="absolute top-4 right-4 bg-white bg-opacity-90 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gradient-to-r hover:from-orange-600 hover:to-red-600 hover:text-white shadow-lg">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-black transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold bg-gradient-to-r from-orange-700 to-red-700 bg-clip-text text-transparent">
                      KSh {product.price.toLocaleString()}
                    </span>
                    <button className="px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🛍️</div>
              <p className="text-xl text-gray-500">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section - Updated styling */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Be the first to know about new collections and exclusive offers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-4 rounded-xl text-black flex-1 shadow-lg"
            />
            <button className="px-8 py-4 bg-white text-orange-600 rounded-xl font-bold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}