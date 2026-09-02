"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { notifications } from "@mantine/notifications";
import axios from "axios";

export interface CartItem {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
  totalItems: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("gfa_cart");
    if (saved) setCart(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("gfa_cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = async (product: Omit<CartItem, "quantity">) => {
    setCart((items) => {
      const exists = items.some((item) => item.id === product.id);

      return exists
        ? items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...items, { ...product, quantity: 1 }];
    });

    notifications.show({
      title: "Added to Cart!",
      message: `${product.title} has been added to your cart.`,
      color: "green",
    });

    try {
      await axios.post("https://fakestoreapi.com/carts", {
        userId: 1,
        date: new Date().toISOString().split("T")[0],
        products: [{ productId: Number(product.id), quantity: 1 }],
      });
    } catch (error) {
      console.error("Cart API error:", error);
    }
  };

  const removeFromCart = (id: string) =>
    setCart((items) => items.filter((item) => item.id !== id));

  const updateQuantity = (id: string, delta: number) =>
    setCart((items) =>
      items
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter((item) => item.quantity > 0)
    );

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
};
