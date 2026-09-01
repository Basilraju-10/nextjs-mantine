"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { notifications } from "@mantine/notifications";

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
  clearCart: () => void;
  totalItems: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load cart state from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem("gfa_cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart", e);
      }
    }
    setIsLoaded(true);
  }, []);

  // Sync cart changes to localStorage after initial load
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("gfa_cart", JSON.stringify(cart));
    }
  }, [cart, isLoaded]);

  // Add item locally & trigger POST request to FakeStoreAPI
  const addToCart = async (product: Omit<CartItem, "quantity">) => {
    // 1. Update React local state
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });

    // 2. Show Mantine Notification
    notifications.show({
      title: "Added to Cart!",
      message: `${product.title} has been added to your shopping cart.`,
      color: "green",
    });

    // 3. POST to FakeStoreAPI
    try {
      const response = await fetch("https://fakestoreapi.com/carts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: 1,
          date: new Date().toISOString().split("T")[0],
          products: [{ productId: Number(product.id), quantity: 1 }],
        }),
      });

      const data = await response.json();
      console.log("FakeStoreAPI POST Response:", data);
    } catch (error) {
      console.error("API POST request failed:", error);
    }
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, totalItems }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};