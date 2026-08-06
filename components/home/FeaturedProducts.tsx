"use client";

import { useEffect, useState } from "react";

import {
  Box,
  Button,
  Container,
  Group,
  SimpleGrid,
  Title,
} from "@mantine/core";

import FeaturedProductCard from "./FeaturedProductCard";

import { getProducts } from "@/lib/api";
import { Product } from "@/types/product";

const categories = [
  "All",
  "Rotable",
  "Expendables",
  "Consumables",
  "Avionics",
  "Engines & APUs",
  "Ground Support Units",
];

export default function FeaturedProducts() {
  const [active, setActive] = useState("All");
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const data = await getProducts();

      // Show first 4 products
      setProducts(data.slice(0, 4));
    }

    loadProducts();
  }, []);

  return (
    <Box bg="white" py={80}>
      <Container size="lg">
        <Title order={1} mb={35}>
          Featured{" "}
          <span style={{ color: "#08B54F" }}>
            Products
          </span>
        </Title>

        <Group gap="md" mb={40} wrap="wrap">
          {categories.map((category) => (
            <Button
              key={category}
              radius="xl"
              variant={active === category ? "filled" : "subtle"}
              color={active === category ? "green" : "dark"}
              onClick={() => setActive(category)}
            >
              {category}
            </Button>
          ))}
        </Group>

        <SimpleGrid cols={{ base: 1, lg: 2 }} spacing="xl">
          {products.map((product) => (
            <FeaturedProductCard
              key={product.id}
              product={product}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}