"use client";

import { useCart } from "../contexts/CartContext";
import { Link } from "@/navigation";
import { formatPrice } from "@/types/ecommerce";

export default function MiniCart() {
  const { cart, getTotalItems, getTotalPrice, removeItem } = useCart();
  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  if (totalItems === 0) {
    return (
      <Link
        href="/cart"
        className="relative px-3 py-2 text-gray-300 hover:text-white transition"
      >
        <span className="text-2xl">🛒</span>
      </Link>
    );
  }

  return (
    <div className="relative group">
      <Link
        href="/cart"
        className="relative px-3 py-2 text-gray-300 hover:text-white transition"
      >
        <span className="text-2xl">🛒</span>
        {totalItems > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
            {totalItems}
          </span>
        )}
      </Link>

      {/* Dropdown Preview */}
      <div className="absolute right-0 mt-2 w-80 bg-gray-900 border border-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition z-50">
        <div className="p-4">
          <h3 className="text-white font-bold mb-4">Shopping Cart ({totalItems})</h3>

          {/* Items */}
          <div className="space-y-3 max-h-64 overflow-y-auto mb-4">
            {cart.items.map((item) => (
              <div key={item.productId} className="flex justify-between items-start gap-2">
                <div className="flex-1">
                  <p className="text-white text-sm font-medium line-clamp-1">
                    {item.name}
                  </p>
                  <p className="text-gray-400 text-xs">
                    {item.quantity}x {formatPrice(item.price)}
                  </p>
                </div>
                <button
                  onClick={() => removeItem(item.productId)}
                  className="text-red-400 hover:text-red-300 text-sm"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="border-t border-gray-800 pt-3 mb-4">
            <div className="flex justify-between text-white font-bold">
              <span>Total:</span>
              <span>{formatPrice(totalPrice)}</span>
            </div>
          </div>

          {/* Buttons */}
          <Link
            href="/cart"
            className="block w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-center text-sm font-semibold"
          >
            View Cart
          </Link>
        </div>
      </div>
    </div>
  );
}
