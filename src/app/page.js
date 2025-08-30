// src/app/page.js (homepage)
import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="py-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <CategoryCard
          title="Women"
          image="/public/images/woman.jpg"
          link="/products/women"
        />
        <CategoryCard
          title="Children"
           image="/public/images/kid.jpg"
          link="/products/kids"
        />
      </section>
    </>
  );
}
