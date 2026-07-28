"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  Button,
  Container,
  Grid,
  Group,
  Paper,
  SegmentedControl,
  Select,
  Stack,
  Text,
  Textarea,
  Title,
} from "@mantine/core";

import {
  IconSearch,
  IconClipboardText,
  IconUpload,
  IconTools,
} from "@tabler/icons-react";

export default function SearchLanding() {
  const router = useRouter();

  const [searchMode, setSearchMode] = useState("paste");
  const [partNumbers, setPartNumbers] = useState("");
  const [condition, setCondition] = useState<string | null>(null);
  const [location, setLocation] = useState<string | null>(null);

  function handleSearch() {
    router.push("/catalog");
  }

  return (
    <Container size="lg" py={50}>
      <Stack gap={40}>
        {/* Heading */}

        <Stack gap={4} ta="center">
          <Title order={1} fw={700}>
            Aircraft Parts Search
          </Title>

          <Text c="dimmed" size="lg">
            Search thousands of aircraft parts from our inventory.
          </Text>
        </Stack>

        {/* Search Type */}

        <Group justify="center">
          <SegmentedControl
          fullWidth
            radius="md"
            size="md"
            value={searchMode}
            onChange={setSearchMode}
            styles={{
  label: {
    height: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}}
data={[
  {
    value: "upload",
    label: (
      <Stack gap={2} align="center">
        <IconUpload size={18} />
        <Text size="sm" fw={600}>
          Upload Parts
        </Text>
      </Stack>
    ),
  },
  {
    value: "paste",
    label: (
      <Stack gap={2} align="center">
        <IconClipboardText size={18} />
        <Text size="sm" fw={600}>
          Paste Parts
        </Text>
      </Stack>
    ),
  },
  {
    value: "catalog",
    label: (
      <Stack gap={2} align="center">
        <IconTools size={18} />
        <Text size="sm" fw={600}>
          MRO Search
        </Text>
      </Stack>
    ),
  },
]}
          />
        </Group>

        {/* Form */}

        <Paper
          withBorder
          shadow="sm"
          radius="md"
          p="xl"
        >
          <Stack gap="lg">
            <div>
              <Title order={4}>
                Paste Part Numbers
              </Title>

              <Text size="sm" c="dimmed" mt={4}>
                Enter up to 20 part numbers separated by commas.
              </Text>
            </div>

            <Textarea
              minRows={8}
              placeholder="e.g. A320-1234, B737-5678, A380-9012..."
              value={partNumbers}
              onChange={(e) =>
                setPartNumbers(e.currentTarget.value)
              }
            />

            <Text size="sm" c="dimmed">
              {partNumbers.trim() === ""
                ? "0 part number(s) entered"
                : `${partNumbers
                    .split(",")
                    .filter((item) => item.trim() !== "").length} part number(s) entered`}
            </Text>

            <Grid>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Select
                  placeholder="Condition"
                  value={condition}
                  onChange={setCondition}
                  data={[
                    "New",
                    "Serviceable",
                    "Overhauled",
                    "As Removed",
                  ]}
                />
              </Grid.Col>

              <Grid.Col span={{ base: 12, md: 6 }}>
                <Select
                  placeholder="Preferred Location"
                  value={location}
                  onChange={setLocation}
                  data={[
                    "USA",
                    "Canada",
                    "Europe",
                    "Middle East",
                    "Asia",
                  ]}
                />
              </Grid.Col>
            </Grid>
          </Stack>
        </Paper>

        {/* Search Button */}

        <Button
          size="lg"
          radius="md"
          color="green"
          fullWidth
          leftSection={<IconSearch size={20} />}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Stack>
    </Container>
  );
}