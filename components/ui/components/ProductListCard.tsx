"use client";

import Link from "next/link";
import {
  Badge,
  Button,
  Divider,
  Group,
  Image,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconEye, IconMapPin, IconShoppingCart } from "@tabler/icons-react";
import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";

interface Props {
  product: Product;
}

export default function ProductListCard({ product }: Props) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: String(product.id),
      title: product.title,
      price: product.price,
      image: product.image,
      category: product.category,
    });
  };

  return (
    <Paper
      withBorder
      shadow="xs"
      radius="md"
      p="lg"
      className="transition-all duration-300 hover:shadow-lg"
    >
      <Group justify="space-between" align="center" wrap="nowrap">
        {/* Left Section */}
        <Group wrap="nowrap" align="flex-start">
          <Image
            src={product.image}
            alt={product.title}
            w={140}
            h={140}
            fit="contain"
          />

          <Stack gap={6}>
            <Group gap={8}>
              <Badge color="green">IN STOCK</Badge>
              <Badge variant="light">AR</Badge>
            </Group>

            <Text size="xs" c="dimmed">
              PART #{product.id}
            </Text>

            <Title order={4} lineClamp={2}>
              {product.title}
            </Title>

            <Text c="dimmed" size="sm">
              {product.category}
            </Text>

            <Group gap={4}>
              <IconMapPin size={15} />
              <Text size="sm">USA</Text>
            </Group>
          </Stack>
        </Group>

        {/* Right Section */}
        <Stack align="flex-end">
          <div>
            <Text size="xs" c="dimmed" ta="right">
              Price
            </Text>
            <Title color="green">${product.price.toFixed(2)}</Title>
          </div>

          <Divider w="100%" />

          <Group gap="xs">
            <Button
              component={Link}
              href={`/product/${product.id}`}
              leftSection={<IconEye size={18} />}
              variant="outline"
              color="green"
            >
              View
            </Button>

            <Button
              leftSection={<IconShoppingCart size={18} />}
              color="green"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </Group>
        </Stack>
      </Group>
    </Paper>
  );
}