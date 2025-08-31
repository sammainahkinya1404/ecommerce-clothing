// src/app/page.js (homepage)
import Link from 'next/link';
import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-800">
              Shop by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our curated collections of authentic Kenyan fashion
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <CategoryCard
              title="Women"
              image="/images/Modern.jpeg"
              link="/products"
            />
            <CategoryCard
              title="Children"
              image="/images/CasualSet.jpeg"
              link="/products"
            />
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-700 to-red-700 bg-clip-text text-transparent">
              Why Choose Our Clothing?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every piece is crafted with love, tradition, and modern style in mind
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-4xl mb-4">🇰🇪</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Made in Kenya</h3>
              <p className="text-gray-600 leading-relaxed">Supporting local artisans and traditional craftsmanship</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Premium Quality</h3>
              <p className="text-gray-600 leading-relaxed">Carefully selected fabrics and attention to detail</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Sustainable</h3>
              <p className="text-gray-600 leading-relaxed">Eco-friendly practices and ethical production</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-4xl mb-4">💝</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Unique Designs</h3>
              <p className="text-gray-600 leading-relaxed">Exclusive patterns inspired by Kenyan culture</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Experience Authentic Kenyan Fashion
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join hundreds of satisfied customers who choose quality, authenticity, and style.
          </p>
          
          <Link href="/products"
            className="inline-block px-10 py-4 bg-white text-orange-600 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Start Shopping Today
          </Link>
        </div>
      </section>
    </>
  );
}