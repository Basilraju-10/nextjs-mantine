"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  Button,
  Paper,
  Select,
  Stack,
  Text,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";

import { IconSearch } from "@tabler/icons-react";

export default function MROSearchForm() {
  const router = useRouter();

  const [partNumber, setPartNumber] = useState("");
  const [repairType, setRepairType] = useState<string | null>(null);
  const [notes, setNotes] = useState("");

  function handleSearch() {
    router.push("/catalog");
  }

  return (
    <>
      <Paper
        withBorder
        shadow="sm"
        radius="md"
        p="xl"
      >
        <Stack gap="lg">

          <div>
            <Title order={4}>
              MRO Search
            </Title>

            <Text
              size="sm"
              c="dimmed"
              mt={4}
            >
              Search repair capabilities for aircraft parts.
            </Text>
          </div>

          <TextInput
            label="Part Number"
            placeholder="Enter Part Number"
            value={partNumber}
            onChange={(e) =>
              setPartNumber(e.currentTarget.value)
            }
          />

          <Select
            label="Repair Type"
            placeholder="Select Repair Type"
            value={repairType}
            onChange={setRepairType}
            data={[
              "Repair",
              "Overhaul",
              "Inspection",
              "Exchange",
            ]}
          />

          <Textarea
            label="Repair Notes"
            placeholder="Enter additional repair information..."
            minRows={6}
            value={notes}
            onChange={(e) =>
              setNotes(e.currentTarget.value)
            }
          />

        </Stack>
      </Paper>

      <Button
        mt="xl"
        size="lg"
        radius="lg"
        color="green"
        fullWidth
        leftSection={<IconSearch size={20} />}
        onClick={handleSearch}
      >
        Search
      </Button>
    </>
  );
}