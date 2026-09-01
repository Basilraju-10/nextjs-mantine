"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ActionIcon,
  Anchor,
  Box,
  Breadcrumbs,
  Button,
  Container,
  Group,
  Image,
  Paper,
  Stack,
  Table,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { IconShoppingCart, IconFileText, IconTrash } from "@tabler/icons-react";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("cart");
  const { cart, removeFromCart, totalItems } = useCart();

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Box bg="#F7F8F9" mih="100vh" py="xl">
      <Container fluid px="md">
        <Breadcrumbs mb="md" separator="›">
          <Anchor size="sm" c="dimmed" style={{ cursor: "pointer" }} onClick={() => router.push("/")}>
            Home
          </Anchor>
          <Text size="sm" c="dark">Cart</Text>
        </Breadcrumbs>

        <Text fw={700} fz={28} mb="xl">
          Your Cart & RFQs
        </Text>

        <Paper radius="md" withBorder bg="white" style={{ overflow: "hidden" }}>
          <Group gap={0} align="stretch" style={{ borderBottom: "1px solid #D5DCE0" }}>
            <UnstyledButton
              onClick={() => setActiveTab("cart")}
              style={{
                padding: "12px 16px",
                borderRight: "1px solid #D5DCE0",
                borderBottom: activeTab === "cart" ? "1px solid white" : "none",
                marginBottom: activeTab === "cart" ? "-1px" : "0",
              }}
            >
              <Group gap="sm">
                <IconShoppingCart size={18} />
                <Text size="md" fw={activeTab === "cart" ? 500 : 400}>
                  Shopping Cart ({totalItems})
                </Text>
              </Group>
            </UnstyledButton>

            <UnstyledButton
              onClick={() => setActiveTab("rfq")}
              style={{
                padding: "12px 16px",
                borderBottom: activeTab === "rfq" ? "1px solid white" : "none",
                marginBottom: activeTab === "rfq" ? "-1px" : "0",
              }}
            >
              <Group gap="sm">
                <IconFileText size={18} />
                <Text size="md" fw={activeTab === "rfq" ? 500 : 400}>
                  Active RFQs (0)
                </Text>
              </Group>
            </UnstyledButton>
          </Group>

          <Box p="md">
            <Paper withBorder radius="md" bg="white" mih={210}>
              {activeTab === "cart" ? (
                cart.length === 0 ? (
                  <Stack align="center" justify="center" mih={210} gap="md">
                    <IconShoppingCart size={52} stroke={1.5} color="#B8BEC2" />
                    <Text size="lg" c="#344054">Your cart is empty</Text>
                    <Button color="green" radius="md" onClick={() => router.push("/catalog")}>
                      Browse Products
                    </Button>
                  </Stack>
                ) : (
                  <Box p="md">
                    <Table verticalSpacing="sm">
                      <Table.Thead>
                        <Table.Tr>
                          <Table.Th>Product</Table.Th>
                          <Table.Th>Price</Table.Th>
                          <Table.Th>Qty</Table.Th>
                          <Table.Th>Total</Table.Th>
                          <Table.Th></Table.Th>
                        </Table.Tr>
                      </Table.Thead>
                      <Table.Tbody>
                        {cart.map((item) => (
                          <Table.Tr key={item.id}>
                            <Table.Td>
                              <Group gap="sm">
                                <Image src={item.image} w={40} h={40} fit="contain" alt={item.title} />
                                <Box>
                                  <Text fw={500} size="sm">{item.title}</Text>
                                  <Text size="xs" c="dimmed">{item.category}</Text>
                                </Box>
                              </Group>
                            </Table.Td>
                            <Table.Td>${item.price.toFixed(2)}</Table.Td>
                            <Table.Td>{item.quantity}</Table.Td>
                            <Table.Td>${(item.price * item.quantity).toFixed(2)}</Table.Td>
                            <Table.Td>
                              <ActionIcon color="red" variant="subtle" onClick={() => removeFromCart(item.id)}>
                                <IconTrash size={18} />
                              </ActionIcon>
                            </Table.Td>
                          </Table.Tr>
                        ))}
                      </Table.Tbody>
                    </Table>

                    <Group justify="space-between" mt="xl" pt="md" style={{ borderTop: "1px solid #E5E7EB" }}>
                      <Text size="lg" fw={700}>Total: ${cartTotal.toFixed(2)}</Text>
                      <Button color="green" size="md">Proceed to Checkout</Button>
                    </Group>
                  </Box>
                )
              ) : (
                <Stack align="center" justify="center" mih={210} gap="md">
                  <IconFileText size={52} stroke={1.5} color="#B8BEC2" />
                  <Text size="lg" c="#344054">No active RFQs</Text>
                  <Button color="green" radius="md" onClick={() => router.push("/catalog")}>
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