"use client";

import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { CartProvider } from "@/context/CartContext";

import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider theme={{ primaryColor: "green" }}>
      <Notifications position="top-right" zIndex={1000} />
      <CartProvider>{children}</CartProvider>
    </MantineProvider>
  );
}