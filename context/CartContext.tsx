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
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
  totalItems: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

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

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("gfa_cart", JSON.stringify(cart));
    }
  }, [cart, isLoaded]);

  const addToCart = async (product: Omit<CartItem, "quantity">) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => String(item.id) === String(product.id));
      if (existingItem) {
        return prevCart.map((item) =>
          String(item.id) === String(product.id)
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, id: String(product.id), quantity: 1 }];
    });

    notifications.show({
      title: "Added to Cart!",
      message: `${product.title} has been added to your shopping cart.`,
      color: "green",
    });

    try {
      await fetch("https://fakestoreapi.com/carts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: 1,
          date: new Date().toISOString().split("T")[0],
          products: [{ productId: Number(product.id), quantity: 1 }],
        }),
      });
    } catch (error) {
      console.error("Failed to post cart item directly:", error);
    }
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => String(item.id) !== String(id)));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (String(item.id) === String(id)) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, totalItems }}
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