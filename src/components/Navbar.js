import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
      {/* Logo */}
      <Link href="/" className="text-xl font-bold">
        Shee Clothing
      </Link>

      {/* Links */}
      <div className="flex flex-wrap items-center gap-3 sm:gap-6">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/cart">Cart</Link>
        <Link href="/checkout">Checkout</Link>
      </div>
    </nav>
  );
}
