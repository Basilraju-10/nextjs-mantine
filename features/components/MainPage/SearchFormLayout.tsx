"use client";

import { ReactNode } from "react";
import { Button, Paper } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

type SearchFormLayoutProps = {
  children: ReactNode;
  onSearch: () => void;
};

export default function SearchFormLayout({
  children,
  onSearch,
}: SearchFormLayoutProps) {
  return (
    <>
      <Paper
        withBorder
        shadow="sm"
        radius="md"
        p="xl"
      >
        {children}
      </Paper>

      <Button
        mt="xl"
        size="lg"
        radius="lg"
        color="green"
        fullWidth
        leftSection={<IconSearch size={20} />}
        onClick={onSearch}
      >
        Search
      </Button>
    </>
  );
}