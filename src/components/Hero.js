// src/components/Hero.js
export default function Hero() {
  return (
    <section className="bg-pink-100 py-12 sm:py-16 px-4 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">
        Trendy Clothes for Women & Kids
      </h1>
      <p className="text-base sm:text-lg mb-6">
        Shop the latest fashion with comfort and style
      </p>
      <a
        href="/products"
        className="inline-block w-full sm:w-auto px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
      >
        Shop Now
      </a>
    </section>
  );
}
