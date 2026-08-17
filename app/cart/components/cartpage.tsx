"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Group,
  Paper,
  Stack,
  Text,
  UnstyledButton,
} from "@mantine/core";

import {
  IconShoppingCart,
  IconFileText,
} from "@tabler/icons-react";

export default function CartPage() {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState("cart");

  return (
    <Box
      bg="#F7F8F9"
      mih="100vh"
      py="xl"
    >
      <Container fluid px="md">

        {/* Breadcrumbs */}
        <Breadcrumbs
          mb="md"
          separator="›"
          styles={{
            separator: {
              color: "#6C757D",
            },
          }}
        >
          <Text
            size="sm"
            c="dimmed"
            style={{ cursor: "pointer" }}
            onClick={() => router.push("/")}
          >
            Home
          </Text>

          <Text size="sm" c="dark">
            Cart
          </Text>
        </Breadcrumbs>

        {/* Page Title */}
        <Text
          fw={700}
          fz={28}
          mb="xl"
        >
          Your Cart & RFQs
        </Text>

        {/* Tabs */}
        <Paper
          radius="md"
          withBorder
          bg="white"
          style={{
            overflow: "hidden",
          }}
        >
          <Group
            gap={0}
            align="stretch"
            style={{
              borderBottom: "1px solid #D5DCE0",
            }}
          >

            {/* Shopping Cart Tab */}
            <UnstyledButton
              onClick={() => setActiveTab("cart")}
              style={{
                padding: "12px 16px",
                borderRight: "1px solid #D5DCE0",
                borderBottom:
                  activeTab === "cart"
                    ? "1px solid white"
                    : "none",
                marginBottom:
                  activeTab === "cart"
                    ? "-1px"
                    : "0",
              }}
            >
              <Group gap="sm">

                <IconShoppingCart size={18} />

                <Text
                  size="md"
                  fw={
                    activeTab === "cart"
                      ? 500
                      : 400
                  }
                >
                  Shopping Cart (0)
                </Text>

              </Group>
            </UnstyledButton>

            {/* Active RFQs Tab */}
            <UnstyledButton
              onClick={() => setActiveTab("rfq")}
              style={{
                padding: "12px 16px",
                borderBottom:
                  activeTab === "rfq"
                    ? "1px solid white"
                    : "none",
                marginBottom:
                  activeTab === "rfq"
                    ? "-1px"
                    : "0",
              }}
            >
              <Group gap="sm">

                <IconFileText size={18} />

                <Text
                  size="md"
                  fw={
                    activeTab === "rfq"
                      ? 500
                      : 400
                  }
                >
                  Active RFQs (0)
                </Text>

              </Group>
            </UnstyledButton>

          </Group>

          {/* Content */}
          <Box p="md">

            <Paper
              withBorder
              radius="md"
              bg="white"
              mih={210}
            >

              {activeTab === "cart" ? (

                /* Empty Cart */
                <Stack
                  align="center"
                  justify="center"
                  mih={210}
                  gap="md"
                >

                  <IconShoppingCart
                    size={52}
                    stroke={1.5}
                    color="#B8BEC2"
                  />

                  <Text
                    size="lg"
                    c="#344054"
                  >
                    Your cart is empty
                  </Text>

                  <Button
                    color="green"
                    radius="md"
                    onClick={() =>
                      router.push("/catalog")
                    }
                  >
                    Browse Products
                  </Button>

                </Stack>

              ) : (

                /* Empty RFQs */
                <Stack
                  align="center"
                  justify="center"
                  mih={210}
                  gap="md"
                >

                  <IconFileText
                    size={52}
                    stroke={1.5}
                    color="#B8BEC2"
                  />

                  <Text
                    size="lg"
                    c="#344054"
                  >
                    No active RFQs
                  </Text>

                  <Button
                    color="green"
                    radius="md"
                    onClick={() =>
                      router.push("/catalog")
                    }
                  >
                    Browse Products
                  </Button>

                </Stack>

              )}

            </Paper>

          </Box>

        </Paper>

      </Container>
    </Box>
  );
}