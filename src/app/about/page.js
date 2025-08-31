// src/app/about/page.js
export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Our Story
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
              Born from a passion for authentic Kenyan craftsmanship and a vision to share 
              our beautiful culture with the world through fashion.
            </p>
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Celebrating Kenyan Heritage
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our journey began with a simple belief: that fashion should tell a story. 
                Every piece in our collection is carefully crafted by skilled Kenyan artisans 
                who have inherited their craft through generations.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We work directly with local tailors and seamstresses across Kenya, 
                ensuring fair wages and supporting communities while preserving traditional 
                techniques that make each garment unique.
              </p>
              <div className="bg-gray-100 p-6 rounded-xl border-l-4 border-black">
                <p className="text-lg font-medium text-black">
    &quot;Fashion is not just about clothing - it&apos;s about culture, community, and creating opportunities.&quot;
                </p>
                <p className="text-sm text-gray-600 mt-2">- Our Founder</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-black rounded-3xl blur-lg opacity-10"></div>
              <img
                src="/images/Ankara.jpeg"
                alt="Kenyan Artisan at Work"
                className="relative w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
          
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center border">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Community First</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe in empowering local communities through fair trade practices 
                and sustainable partnerships with Kenyan artisans.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center border">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">👗</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Quality Craftsmanship</h3>
              <p className="text-gray-600 leading-relaxed">
                Every stitch tells a story. Our artisans use time-honored techniques 
                combined with modern design to create lasting, beautiful pieces.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center border">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Sustainable Fashion</h3>
              <p className="text-gray-600 leading-relaxed">
                We're committed to ethical production, using eco-friendly materials 
                and processes that respect both people and planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">From Concept to Closet</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              How we bring authentic Kenyan fashion to life
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-800">Design</h3>
              <p className="text-gray-600">
                Drawing inspiration from Kenyan culture and modern trends
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-800">Source</h3>
              <p className="text-gray-600">
                Selecting premium fabrics from trusted local suppliers
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-800">Craft</h3>
              <p className="text-gray-600">
                Hand-tailored by skilled artisans with attention to detail
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-800">Deliver</h3>
              <p className="text-gray-600">
                Bringing authentic Kenyan fashion directly to your doorstep
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Making a Difference</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <p className="text-gray-300">Local Artisans Supported</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">1000+</div>
                <p className="text-gray-300">Happy Customers</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">5</div>
                <p className="text-gray-300">Years of Excellence</p>
              </div>
            </div>
            <p className="text-xl mb-8 text-gray-300 leading-relaxed">
              Every purchase you make helps sustain traditional craftsmanship and 
              supports families across Kenya. Together, we're preserving culture 
              while building a sustainable future.
            </p>
            <a
              href="/products"
              className="inline-block px-10 py-4 bg-white text-black rounded-xl font-bold text-lg shadow-xl hover:bg-gray-200 transform hover:-translate-y-1 transition-all duration-300"
            >
              Shop Our Collection
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}