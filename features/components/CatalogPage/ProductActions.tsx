"use client";

import { Button, Group } from "@mantine/core";
import { useCart } from "@/context/CartContext";

interface ProductActionsProps {
  product: {
    id: string | number;
    title: string;
    price: number;
    image: string;
    category: string;
  };
}

export default function ProductActions({ product }: ProductActionsProps) {
  const { addToCart } = useCart();

  return (
    <Group>
      <Button
        color="green"
        onClick={() =>
          addToCart({
            id: String(product.id),
            title: product.title,
            price: Number(product.price),
            image: product.image,
            category: product.category,
          })
        }
      >
        Add To Cart
      </Button>

      <Button component="a" href="/catalog" variant="outline" color="green">
        Back
      </Button>
    </Group>
  );
}