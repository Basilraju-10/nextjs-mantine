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

  const updateForm = (
    field: keyof typeof form,
    value: string | number
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

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
    <Container size="md" py="xl">
      
        <Breadcrumbs
          mb="md"
          separator="›"
          styles={{
            separator: {
              color: "#6C757D",
            },
          }}
        >
        <Anchor href="/" c="dimmed">
          Home
        </Anchor>
        <Anchor href="/catalog" c="dimmed">
          Catalog
        </Anchor>
        <Text>Add Product</Text>
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
                updateForm("title", e.currentTarget.value)
              }
            />

            <NumberInput
              label="Price"
              value={form.price}
              onChange={(value) =>
                updateForm("price", Number(value))
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
                updateForm("category", value || "")
              }
            />

            <TextInput
              label="Image URL"
              value={form.image}
              onChange={(e) =>
                updateForm("image", e.currentTarget.value)
              }
            />

            <Button
              type="submit"
              color="green"  
              loading={loading}
              disabled={!formIsValid || loading}
            >
              Add Product
            </Button>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
}