// src/components/Hero.js
export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-orange-600 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-red-600 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-600 rounded-full blur-xl"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center min-h-screen">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-orange-800 mb-6 shadow-lg">
            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
            Proudly Made in Kenya
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 bg-gradient-to-r from-orange-800 via-red-700 to-amber-700 bg-clip-text text-transparent">
            Authentic
            <br />
            <span className="text-4xl lg:text-6xl">Kenyan Fashion</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-700 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Discover beautiful, handcrafted clothing for women and children. 
            Each piece tells a story of tradition, quality, and modern style.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            
              <a href="/products"
              className="group px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Shop Collection
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
            
             <a href="#story"
              className="px-8 py-4 border-2 border-orange-600 text-orange-700 rounded-xl font-semibold text-lg hover:bg-orange-600 hover:text-white transition-all duration-300"
            >
              Our Story
            </a>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex items-center justify-center lg:justify-start gap-6 mt-12 text-sm text-gray-600">
            <div className="flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
              100% Authentic
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
              Quality Guaranteed
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
              Local Artisans
            </div>
          </div>
        </div>
        
        {/* Right Content - Hero Image */}
        <div className="lg:w-1/2 relative">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-red-400 rounded-3xl blur-lg opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
            <div className="relative bg-white rounded-3xl p-2 shadow-2xl">
              <img
                src="/images/Ankara.jpeg"
                alt="Kenyan Fashion Model"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white rounded-xl p-4 shadow-xl border border-orange-100">
                <div className="text-2xl font-bold text-orange-600">500+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-xl border border-red-100">
                <div className="text-2xl font-bold text-red-600">★★★★★</div>
                <div className="text-sm text-gray-600">Quality Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}