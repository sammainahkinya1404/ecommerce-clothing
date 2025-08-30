// src/components/CategoryCard.js
export default function CategoryCard({ title, image, link }) {
  return (
    
      <a href={link}
      className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
    >
      <div className="relative h-80 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800">
          New Collection
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed">
          {title === "Women" 
            ? "Elegant dresses, tops, and accessories that blend traditional Kenyan aesthetics with contemporary style."
            : "Comfortable, vibrant clothing for kids that celebrates Kenyan culture while keeping them stylish and happy."
          }
        </p>
        <div className="flex items-center text-orange-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
          Shop {title}
          <span className="ml-2">→</span>
        </div>
      </div>
    </a>
  );
}