"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  Anchor,
  Breadcrumbs,
  Button,
  Container,
  NumberInput,
  Paper,
  Select,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";

import Layout from "@/components/Layout";
import { addProduct } from "@/lib/api";

export default function AddPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    title: "",
    price: 0,
    category: "",
    image: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await addProduct(form);

    alert("Product Added Successfully");

    router.push("/");
  }

  return (
    <Layout>
      <Container size="sm" py="xl">

        <Breadcrumbs mb="lg">
        <Anchor href="/">Home</Anchor>
          <Anchor href="/catalog">Catalog</Anchor>
          <Anchor c="green">Add Product</Anchor>
        </Breadcrumbs>

        <Paper
          p="xl"
          radius="md"
          shadow="xs"
          withBorder
        >
          <Title order={2} mb="xl">
            Add Product
          </Title>

          <form onSubmit={handleSubmit}>
            <Stack>

              <TextInput
                label="Product Title"
                value={form.title}
                onChange={(e) =>
                  setForm({
                    ...form,
                    title: e.currentTarget.value,
                  })
                }
              />

              <NumberInput
                label="Price"
                value={form.price}
                onChange={(value) =>
                  setForm({
                    ...form,
                    price: Number(value),
                  })
                }
              />

              <Select
                label="Category"
                data={[
                  "Electronics",
                  "Jewelery",
                  "Men's Clothing",
                  "Women's Clothing",
                ]}
                value={form.category}
                onChange={(value) =>
                  setForm({
                    ...form,
                    category: value || "",
                  })
                }
              />

              <TextInput
                label="Image URL"
                value={form.image}
                onChange={(e) =>
                  setForm({
                    ...form,
                    image: e.currentTarget.value,
                  })
                }
              />

              <Button
                type="submit"
                color="green"
              >
                Add Product
              </Button>

            </Stack>
          </form>

        </Paper>

      </Container>
    </Layout>
  );
}