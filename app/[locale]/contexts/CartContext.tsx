"use client";

import { createContext, useContext, useState, useCallback, useEffect } from "react";
import { CartItem, Cart } from "@/types/ecommerce";

interface CartContextType {
  cart: Cart;
  addItem: (item: CartItem) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = "maxfood-cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Cart>({
    items: [],
    total: 0,
    tax: 0,
    shipping: 0,
  });

  // Load cart from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(CART_STORAGE_KEY);
    if (saved) {
      try {
        setCart(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load cart:", e);
      }
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const addItem = useCallback((item: CartItem) => {
    setCart((prev) => {
      const existingItem = prev.items.find((i) => i.productId === item.productId);

      if (existingItem) {
        return {
          ...prev,
          items: prev.items.map((i) =>
            i.productId === item.productId
              ? { ...i, quantity: i.quantity + item.quantity }
              : i
          ),
          updatedAt: new Date().toISOString(),
        };
      }

      return {
        ...prev,
        items: [...prev.items, item],
        updatedAt: new Date().toISOString(),
      };
    });
  }, []);

  const removeItem = useCallback((productId: string) => {
    setCart((prev) => ({
      ...prev,
      items: prev.items.filter((i) => i.productId !== productId),
      updatedAt: new Date().toISOString(),
    }));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }

    setCart((prev) => ({
      ...prev,
      items: prev.items.map((i) =>
        i.productId === productId ? { ...i, quantity } : i
      ),
      updatedAt: new Date().toISOString(),
    }));
  }, [removeItem]);

  const clearCart = useCallback(() => {
    setCart({
      items: [],
      total: 0,
      tax: 0,
      shipping: 0,
      updatedAt: new Date().toISOString(),
    });
  }, []);

  const getTotalItems = useCallback(() => {
    return cart.items.reduce((sum, item) => sum + item.quantity, 0);
  }, [cart]);

  const getTotalPrice = useCallback(() => {
    return cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cart]);

  const value: CartContextType = {
    cart,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
