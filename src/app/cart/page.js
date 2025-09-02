'use client';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 text-xl">
        🛒 Your cart is empty
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-6">Your Cart</h1>
      <div className="space-y-6">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center bg-white p-4 rounded-xl shadow">
            <div>
              <h2 className="font-bold text-lg">{item.name}</h2>
              <p className="text-gray-600">Qty: {item.qty}</p>
              <p className="text-orange-600 font-bold">KSh {item.price.toLocaleString()}</p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={clearCart}
        className="mt-8 px-6 py-3 bg-orange-600 text-white rounded-xl font-bold hover:shadow-lg"
      >
        Clear Cart
      </button>
    </div>
  );
}
