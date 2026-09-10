"use client";

import Link from "next/link";

import {
  ActionIcon,
  Button,
  Group,
  Paper,
  Text,
  TextInput,
} from "@mantine/core";

import {
  IconFileText,
  IconLayoutGrid,
  IconList,
  IconSearch,
} from "@tabler/icons-react";

interface Props {
  totalProducts: number;
  view: "grid" | "list";
  setView: (view: "grid" | "list") => void;
}

export default function SearchBar({
  totalProducts,
  view,
  setView,
}: Props) {
  return (
    <Paper
      radius="md"
      shadow="xs"
      withBorder
      p="md"
      mb="lg"
    >
      <Group justify="space-between" wrap="nowrap">

        {/* Left */}

        <Group flex={1}>

          <TextInput
            className="w-[250px]"
            placeholder="Search catalog..."
            leftSection={<IconSearch size={18} />}
          />

          <Group gap={8}>

            <ActionIcon
              color="green"
              size="lg"
              radius="md"
              variant={view === "grid" ? "filled" : "light"}
              onClick={() => setView("grid")}
            >
              <IconLayoutGrid size={18} />
            </ActionIcon>

            <ActionIcon
              size="lg"
              radius="md"
              variant={view === "list" ? "filled" : "light"}
              onClick={() => setView("list")}
            >
              <IconList size={18} />
            </ActionIcon>

          </Group>

        </Group>

        {/* Right */}

        <Group gap="md">

          <Text fw={500}>
            Showing {totalProducts} results
          </Text>

          <Button
            leftSection={<IconFileText size={17} />}
            variant="light"
            color="gray"
          >
            Raise Bulk RFQ
          </Button>

          <Button
            component={Link}
            href="/add"
            color="green"
          >
            Add Product
          </Button>

        </Group>

      </Group>
    </Paper>
  );
}