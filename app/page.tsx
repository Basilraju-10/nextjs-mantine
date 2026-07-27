"use client";

import { useEffect, useState } from "react";

import {
  Anchor,
  Breadcrumbs,
  Container,
  Grid,
  GridCol,
  Stack,
  Text,
  Title,
} from "@mantine/core";

import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import ProductListCard from "@/components/ProductListCard";
import SearchBar from "@/components/SearchBar";
import Sidebar from "@/components/Sidebar";

import { getProducts } from "@/lib/api";
import { Product } from "@/types/product";

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [view, setView] = useState<"grid" | "list">("grid");

  async function loadProducts() {
    const data = await getProducts();
    setProducts(data);
  }

  useEffect(() => {
    async function fetchProducts() {
      await loadProducts();
    }

    fetchProducts();
  }, []);

  const breadcrumbs = [
    { title: "Home", href: "#" },
    { title: "Catalog", href: "#" },
  ];

  return (
    <Layout>
      <Container size="xl" py="xl">

        {/* Breadcrumb */}

        <Breadcrumbs mb="sm">
          {breadcrumbs.map((item) => (
            <Anchor
              key={item.title}
              href={item.href}
              underline="never"
              c={item.title === "Catalog" ? "green" : "dimmed"}
              fw={500}
            >
              {item.title}
            </Anchor>
          ))}
        </Breadcrumbs>

        {/* Heading */}

        <Stack gap={2} mb={30}>
          <Title
            fw={700}
            style={{ fontSize: 42 }}
          >
            Parts Catalog
          </Title>

          <Text c="dimmed" size="md">
            Search thousands of available aircraft parts from our inventory.
          </Text>
        </Stack>

        {/* Main Layout */}

        <Grid gap={24}>

          {/* Sidebar */}

          <GridCol span={{ base: 12, md: 3 }}>
            <Sidebar />
          </GridCol>

          {/* Products */}

          <GridCol span={{ base: 12, md: 9 }}>

            <SearchBar
              totalProducts={products.length}
              view={view}
              setView={setView}
            />

            {view === "grid" ? (

              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}

              </div>

            ) : (

              <Stack gap="md">

                {products.map((product) => (
                  <ProductListCard
                    key={product.id}
                    product={product}
                  />
                ))}

              </Stack>

            )}

          </GridCol>

        </Grid>

      </Container>
    </Layout>
  );
}