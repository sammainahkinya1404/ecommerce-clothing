// src/components/CategoryCard.js
"use client";
import Link from "next/link";
import Image from "next/image";

export default function CategoryCard({ title, image, link }) {
  return (
    <Link
      href={link}
      className="block group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
    >
      <div className="relative w-full h-64">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition duration-300"
        />
      </div>
      <div className="p-4 bg-white">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    </Link>
  );
}
