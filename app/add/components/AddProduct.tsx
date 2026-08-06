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
  Text,
  TextInput,
  Title,
} from "@mantine/core";

import { addProduct } from "@/lib/api";

export default function AddProduct() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    price: 0,
    category: "",
    image: "",
  });

  const formIsValid =
    form.title.trim().length > 0 &&
    form.price > 0 &&
    form.category.trim().length > 0 &&
    form.image.trim().length > 0;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!formIsValid || loading) {
      return;
    }

    setLoading(true);

    try {
      await addProduct(form);
      router.push("/catalog");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container size="sm" py="xl">
      <Breadcrumbs mb="lg">
        <Anchor href="/" c="dimmed">
          Home
        </Anchor>
        <Anchor href="/catalog" c="dimmed">
          Catalog
        </Anchor>
        <Text c="bold" fw={500}>
          Add Product
        </Text>
      </Breadcrumbs>

      <Paper p="xl" radius="md" shadow="xs" withBorder>
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

            <Button type="submit" color="green" loading={loading} disabled={!formIsValid || loading}>
              Add Product
            </Button>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
}
