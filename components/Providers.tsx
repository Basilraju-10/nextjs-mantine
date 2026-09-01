"use client";

import { MantineProvider, createTheme, MantineColorsTuple } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { CartProvider } from "@/context/CartContext";

import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

// 10-shade palette generated from your exact logo color #0B7A3E
const gfaGreen: MantineColorsTuple = [
  "#eaf6f0", // 0: light background tint
  "#cbe9d9", // 1
  "#96d3b3", // 2
  "#5ebc8a", // 3
  "#33a869", // 4
  "#0b7a3e", // 5: Base Brand Green (#0B7A3E)
  "#086b36", // 6: Hover state
  "#05542a", // 7
  "#033e1f", // 8
  "#012913", // 9
];

const theme = createTheme({
  colors: {
    // Overrides Mantine's built-in green everywhere
    green: gfaGreen,
  },
  primaryColor: "green",
  primaryShade: 5,
});

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider theme={theme}>
      <Notifications position="top-right" zIndex={1000} />
      <CartProvider>{children}</CartProvider>
    </MantineProvider>
  );
}