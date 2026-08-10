"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  Grid,
  Select,
  Stack,
  Text,
  Textarea,
  Title,
} from "@mantine/core";

import SearchFormLayout from "./SearchFormLayout";

export default function PasteForm() {
  const router = useRouter();

  const [partNumbers, setPartNumbers] = useState("");
  const [condition, setCondition] = useState<string | null>(null);
  const [location, setLocation] = useState<string | null>(null);

  function handleSearch() {
    router.push("/catalog");
  }

  return (
    <SearchFormLayout onSearch={handleSearch}>
      <Stack gap="lg">
        <div>
          <Title order={4}>
            Paste Part Numbers
          </Title>

          <Text
            size="sm"
            c="dimmed"
            mt={4}
          >
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
            : `${
                partNumbers
                  .split(",")
                  .filter(
                    (item) => item.trim() !== ""
                  ).length
              } part number(s) entered`}
        </Text>

        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Select
              label="Condition"
              placeholder="Select Condition"
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
              label="Preferred Location"
              placeholder="Select Location"
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
    </SearchFormLayout>
  );
}