"use client";

import {
  Badge,
  Box,
  Button,
  Card,
  Flex,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";

import { Product } from "@/types/product";

interface Props {
  product: Product;
}

export default function FeaturedProductCard({ product }: Props) {
  return (
    <Card
      withBorder
      radius="md"
      p="md"
      style={{
        border: "1px solid #E9ECEF",
        background: "#fff",
      }}
    >
      <Flex
        gap={20}
        align="stretch"
      >
        {/* ---------------- Left Image ---------------- */}

        <Box
          style={{
            width: 180,
            minWidth: 180,
            border: "1px solid #E5E7EB",
            borderRadius: 6,
            padding: 12,
            position: "relative",
            background: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Badge
            color="green"
            radius="xl"
            size="sm"
            style={{
              position: "absolute",
              top: 10,
              left: 10,
            }}
          >
            100 IN STOCK
          </Badge>

          <Image
            src={product.image}
            alt={product.title}
            w={150}
            h={150}
            fit="contain"
          />
        </Box>

        {/* ---------------- Right Content ---------------- */}

        <Flex
          direction="column"
          justify="space-between"
          style={{
            flex: 1,
            minHeight: 180,
          }}
        >
          <Stack gap={8}>
            <Title order={3} fw={700}>
              {product.id}-{Math.floor(product.price * 100)}
            </Title>

            <Text
              c="dimmed"
              size="sm"
              lineClamp={2}
            >
              {product.title}
            </Text>

            <Group gap={6}>
              <Text size="sm" c="dimmed">
                Condition:
              </Text>

              <Text size="sm" fw={600} c="green">
                RP
              </Text>

              <Text c="gray">|</Text>

              <Text size="sm" c="dimmed">
                Fleet:
              </Text>

              <Text size="sm" fw={600} c="green">
                AR
              </Text>
            </Group>

            <Text size="lg">🇺🇸</Text>

            <Text size="sm" c="dimmed">
              Stock Loc: {product.category}
            </Text>
          </Stack>

          {/* Bottom Row */}

          <Group justify="space-between" align="center" mt="md">
            <Group gap={4}>
              <Text
                fw={700}
                size="30px"
                c="green"
              >
                ${product.price}
              </Text>

              <Text
                size="sm"
                mt={10}
              >
                USD
              </Text>
            </Group>

            <Button
              variant="outline"
              color="green"
              radius="xl"
              size="sm"
            >
              Add to RFQ
            </Button>
          </Group>
        </Flex>
      </Flex>
    </Card>
  );
}