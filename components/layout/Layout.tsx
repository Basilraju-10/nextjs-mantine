"use client";

import { AppShell } from "@mantine/core";
import Navbar from "./Navbar";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppShell>
      <Navbar />

      <AppShell.Main p={0}>
        {children}
      </AppShell.Main>
    </AppShell>
  );
}