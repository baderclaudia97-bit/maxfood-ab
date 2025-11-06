"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Locale } from "@/app/layout";
import { useCart } from "../contexts/CartContext";
import { formatPrice, calculateShipping } from "@/types/ecommerce";
import { Link } from "@/navigation";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function CartPage({ params }: PageProps) {
  const { locale } = await params;

  return (
    <CartPageClient locale={locale} />
  );
}

function CartPageClient({ locale }: { locale: Locale }) {
  const { cart, updateQuantity, removeItem, getTotalPrice } = useCart();
  const subtotal = getTotalPrice();
  const shipping = calculateShipping("standard");
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col">
        <Header locale={locale} />

        <main className="flex-grow flex items-center justify-center">
          <div className="text-center py-20">
            <span className="text-6xl mb-4 block">🛒</span>
            <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
            <p className="text-gray-400 mb-8">Add items to get started</p>
            <Link
              href="/products"
              className="px-8 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Continue Shopping
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header locale={locale} />

      <main className="flex-grow py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Items */}
            <div className="lg:col-span-2">
              <div className="bg-gray-900 rounded-lg border border-gray-800">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b border-gray-800">
                      <tr className="text-left">
                        <th className="p-4 text-gray-300">Product</th>
                        <th className="p-4 text-gray-300">Price</th>
                        <th className="p-4 text-gray-300">Quantity</th>
                        <th className="p-4 text-gray-300">Total</th>
                        <th className="p-4"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.items.map((item) => (
                        <tr key={item.productId} className="border-b border-gray-800">
                          <td className="p-4 text-white">{item.name}</td>
                          <td className="p-4 text-gray-300">{formatPrice(item.price)}</td>
                          <td className="p-4">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                                className="px-2 py-1 bg-gray-800 text-white rounded hover:bg-gray-700"
                              >
                                −
                              </button>
                              <span className="w-8 text-center">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                                className="px-2 py-1 bg-gray-800 text-white rounded hover:bg-gray-700"
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td className="p-4 text-white">
                            {formatPrice(item.price * item.quantity)}
                          </td>
                          <td className="p-4">
                            <button
                              onClick={() => removeItem(item.productId)}
                              className="text-red-400 hover:text-red-300"
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 h-fit">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Shipping</span>
                  <span>{formatPrice(shipping)}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Tax (10%)</span>
                  <span>{formatPrice(tax)}</span>
                </div>
                <div className="border-t border-gray-800 pt-4 flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>

              <button className="w-full px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-semibold mb-3">
                Proceed to Checkout
              </button>

              <Link
                href="/products"
                className="block w-full px-6 py-3 bg-gray-800 text-white rounded hover:bg-gray-700 transition font-semibold text-center"
              >
                Continue Shopping
              </Link>

              {/* Promo Code */}
              <div className="mt-6 pt-6 border-t border-gray-800">
                <label className="block text-sm font-semibold mb-2">Promo Code</label>
                <input
                  type="text"
                  placeholder="Enter code"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-blue-400"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
