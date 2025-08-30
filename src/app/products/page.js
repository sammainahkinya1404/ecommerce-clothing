// src/app/products/page.js
'use client';
import { useState } from 'react';

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  // Sample product data - replace with your actual products
  const products = [
    // Women's Products
    {
      id: 1,
      name: "Traditional Wrap Dress",
      price: 2500,
      category: "women",
      image: "/images/Traditional Wrap Dress.jpeg",
      description: "Elegant wrap dress with traditional Kenyan patterns"
    },
    {
      id: 2,
      name: "Modern Kikoy Top",
      price: 1800,
      category: "women",
      image: "/images/Modern Kikoy Top.jpeg",
      description: "Contemporary top featuring authentic Kikoy fabric"
    },
    {
      id: 3,
      name: "Ankara Maxi Dress",
      price: 3200,
      category: "women",
      image: "/images/Ankara Maxi Dress.jpeg",
      description: "Stunning maxi dress in vibrant Ankara print"
    },
    {
      id: 4,
      name: "Casual Blouse",
      price: 2000,
      category: "women",
      image: "/images/Casual Blouse.jpeg",
      description: "Comfortable everyday blouse with subtle Kenyan accents"
    },
    // Children's Products
    {
      id: 5,
      name: "Kids Safari Shirt",
      price: 1200,
      category: "children",
      image: "/images/Kids Safari Shirt.jpeg",
      description: "Fun safari-themed shirt perfect for little adventurers"
    },
    {
      id: 6,
      name: "Traditional Kids Dress",
      price: 1500,
      category: "children",
      image: "/images/Traditional Kids Dress.jpeg",
      description: "Beautiful traditional dress for special occasions"
    },
    {
      id: 7,
      name: "Casual Kids Set",
      price: 1800,
      category: "children",
      image: "/images/Casual Kids Set.jpeg",
      description: "Comfortable two-piece set for everyday wear"
    },
    {
      id: 8,
      name: "Festival Outfit",
      price: 2200,
      category: "children",
      image: "/images/Festival Outfit.jpeg",
      description: "Colorful outfit perfect for cultural celebrations"
    }
  ];

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(product => product.category === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Our Collection
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover authentic Kenyan fashion for women and children
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="flex justify-center space-x-1">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === 'all'
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Products
            </button>
            <button
              onClick={() => setActiveFilter('women')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === 'women'
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Women
            </button>
            <button
              onClick={() => setActiveFilter('children')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === 'children'
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Children
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  
                  {/* Quick View Button */}
                  <button className="absolute top-4 right-4 bg-white bg-opacity-90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black hover:text-white">
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
                    <span className="text-xl font-bold text-black">
                      KSh {product.price.toLocaleString()}
                    </span>
                    <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 text-sm font-medium">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-500">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Be the first to know about new collections and exclusive offers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg text-black flex-1"
            />
            <button className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}