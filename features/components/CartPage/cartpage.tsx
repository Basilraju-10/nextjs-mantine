"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ActionIcon, Anchor, Badge, Box, Breadcrumbs, Button, Container, Grid,
  Group, Image, Paper, Stack, Text, UnstyledButton
} from "@mantine/core";
import { IconShoppingCart, IconFileText, IconTrash, IconPlus, IconMinus } from "@tabler/icons-react";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("cart");
  const { cart, removeFromCart, updateQuantity, totalItems } = useCart();
  const cartTotal = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <Box bg="#F7F8F9" mih="100vh" py="xl">
      <Container fluid px="md">
        <Breadcrumbs mb="md" separator="›">
          <Anchor size="sm" c="dimmed" onClick={() => router.push("/")}>Home</Anchor>
          <Text size="sm" c="dark">Cart</Text>
        </Breadcrumbs>

        <Text fw={700} fz={28} mb="xl">Your Cart & RFQs</Text>

        <Paper radius="md" withBorder bg="white">
          {/* Tabs Header */}
          <Group gap={0} style={{ borderBottom: "1px solid #D5DCE0" }}>
            {[
              { id: "cart", label: `Shopping Cart (${totalItems})`, Icon: IconShoppingCart },
              { id: "rfq", label: "Active RFQs (0)", Icon: IconFileText },
            ].map(({ id, label, Icon }) => (
              <UnstyledButton
                key={id}
                onClick={() => setActiveTab(id)}
                p="md"
                style={{
                  borderBottom: activeTab === id ? "2px solid #0B7A3E" : "none",
                  borderRight: id === "cart" ? "1px solid #D5DCE0" : "none",
                }}
              >
                <Group gap="xs">
                  <Icon size={18} />
                  <Text size="md" fw={activeTab === id ? 600 : 400}>{label}</Text>
                </Group>
              </UnstyledButton>
            ))}
          </Group>

          {/* Content Area */}
          <Box p="lg">
            {activeTab === "rfq" || cart.length === 0 ? (
              <Stack align="center" justify="center" mih={200} gap="md">
                {activeTab === "cart" ? <IconShoppingCart size={48} c="dimmed" /> : <IconFileText size={48} c="dimmed" />}
                <Text size="lg" c="#344054">{activeTab === "cart" ? "Your cart is empty" : "No active RFQs"}</Text>
                <Button color="green" radius="md" onClick={() => router.push("/catalog")}>Browse Products</Button>
              </Stack>
            ) : (
              <Grid gutter="lg">
                {/* Cart Items List */}
                <Grid.Col span={{ base: 12, md: 8 }}>
                  <Stack gap="md">
                    {cart.map((item) => (
                      <Paper key={item.id} withBorder radius="md" p="md">
                        <Group justify="space-between">
                          <Group gap="md">
                            <Box bg="#F1F5F9" p="xs" style={{ borderRadius: 8 }}>
                              <Image src={item.image} alt={item.title} w={60} h={60} fit="contain" />
                            </Box>
                            <Box>
                              <Text fw={700} size="md" lineClamp={1}>{item.title}</Text>
                              <Text size="xs" c="dimmed">{item.category}</Text>
                              <Badge variant="light" color="gray" size="xs" mt={4}>COND: NE</Badge>
                            </Box>
                          </Group>

                          <Stack align="flex-end" gap="xs">
                            <Group gap="md">
                              <ActionIcon variant="subtle" color="red" onClick={() => removeFromCart(item.id)}>
                                <IconTrash size={18} />
                              </ActionIcon>
                              <Text fw={700} color="green" size="lg">
                                ${(item.price * item.quantity).toFixed(2)} <Text span size="xs" c="dimmed">USD</Text>
                              </Text>
                            </Group>

                            {/* + / - Controls */}
                            <Group gap={0} style={{ border: "1px solid #D5DCE0", borderRadius: 6 }}>
                              <ActionIcon variant="subtle" color="gray" size="sm" onClick={() => updateQuantity(item.id, -1)}>
                                <IconMinus size={12} />
                              </ActionIcon>
                              <Text size="sm" fw={600} px="xs">{item.quantity}</Text>
                              <ActionIcon variant="subtle" color="gray" size="sm" onClick={() => updateQuantity(item.id, 1)}>
                                <IconPlus size={12} />
                              </ActionIcon>
                            </Group>
                          </Stack>
                        </Group>
                      </Paper>
                    ))}
                  </Stack>
                </Grid.Col>

                {/* Order Summary Side Panel */}
                <Grid.Col span={{ base: 12, md: 4 }}>
                  <Paper withBorder radius="md" p="lg">
                    <Text fw={700} size="lg" mb="lg">Order Summary</Text>
                    <Group justify="space-between" mb="sm">
                      <Text size="sm" c="dimmed">Subtotal</Text>
                      <Text size="sm" fw={700}>${cartTotal.toFixed(2)} USD</Text>
                    </Group>
                    <Group justify="space-between" mb="lg">
                      <Text size="sm" c="dimmed">Shipping</Text>
                      <Text size="sm" c="dimmed">Calculated at checkout</Text>
                    </Group>
                    <Group justify="space-between" pt="md" mb="lg" style={{ borderTop: "1px solid #E5E7EB" }}>
                      <Text size="md" fw={700}>Total</Text>
                      <Text size="lg" fw={700} color="green">${cartTotal.toFixed(2)} USD</Text>
                    </Group>
                    <Button fullWidth color="green" size="md" radius="md">Proceed to Checkout</Button>
                  </Paper>
                </Grid.Col>
              </Grid>
            )}
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}