"use client";

import Link from "next/link";

import {
  Badge,
  Card,
  Group,
  Image,
  Text,
  Title,
} from "@mantine/core";

import { Product } from "@/types/product";

interface Props {
  product: Product;
}

export default function ProductCard({
  product,
}: Props) {
  return (
    <Link href={`/product/${product.id}`}>

      <Card
        withBorder
        radius="md"
        shadow="xs"
        className="
        overflow-hidden
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
        cursor-pointer
        "
      >

        {/* Image */}

        <div className="relative">

          <Badge
            color="green"
            radius={0}
            className="
            absolute
            left-0
            top-0
            z-10
            rounded-none
            px-3
            "
          >
            100 IN STOCK
          </Badge>

          <Badge
            variant="light"
            color="gray"
            className="
            absolute
            right-3
            top-3
            z-10
            "
          >
            AR
          </Badge>

          <Image
            src={product.image}
            alt={product.title}
            h={220}
            fit="contain"
            className="bg-gray-100"
          />

        </div>

        {/* Content */}

        <div className="pt-5">

          <Title
            order={3}
            fw={700}
          >
            {product.id}-{Math.floor(product.price * 100)}
          </Title>

          <Text
            mt={8}
            c="dimmed"
            lineClamp={1}
            size="lg"
          >
            {product.title}
          </Text>

          <Group
            justify="space-between"
            mt="lg"
          >
            <Text
              fw={700}
              c="green"
            >
              ${product.price}
            </Text>

            <Badge
              variant="light"
              color="gray"
            >
              AR
            </Badge>

          </Group>

        </div>

      </Card>

    </Link>
  );
}