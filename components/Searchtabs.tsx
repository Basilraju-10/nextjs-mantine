"use client";

import {
  Group,
  Paper,
  Text,
  UnstyledButton,
} from "@mantine/core";

import {
  IconCircle,
  IconClipboardText,
  IconSearch,
  IconUpload,
} from "@tabler/icons-react";

type SearchTabsProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchTabs({
  value,
  onChange,
}: SearchTabsProps) {
  const tabs = [
    {
      value: "upload",
      label: "Upload Parts",
      icon: IconUpload,
    },
    {
      value: "paste",
      label: "Paste Parts",
      icon: IconClipboardText,
    },
    {
      value: "mro",
      label: "MRO Search",
      icon: IconSearch,
    },
  ];

  return (
    <Group justify="center" gap="xl">
      {tabs.map((tab) => {
        const ActiveIcon = tab.icon;
        const active = value === tab.value;

        return (
          <UnstyledButton
            key={tab.value}
            onClick={() => onChange(tab.value)}
          >
            <Paper
              radius="md"
              px="xl"
              py="md"
              shadow={active ? "md" : undefined}
              withBorder={active}
              bg={active ? "white" : "transparent"}
              style={{
                transition: "0.2s",
                minWidth: 180,
              }}
            >
              <Group gap={10} justify="center" wrap="nowrap">
                <IconCircle
                  size={16}
                  color={active ? "#0B7A3E" : "#868E96"}
                  fill={active ? "#0B7A3E" : "transparent"}
                />
 
                <ActiveIcon
                  size={17}
                  color={active ? "#0B7A3E" : "#495057"}
                />

                <Text
                  fw={600}
                  c={active ? "green" : "dark"}
                >
                  {tab.label}
                </Text>
              </Group>
            </Paper>
          </UnstyledButton>
        );
      })}
    </Group>
  );
}