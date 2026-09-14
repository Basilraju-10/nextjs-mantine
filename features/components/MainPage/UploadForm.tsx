"use client";

import { useRouter } from "next/navigation";

import {
  Button,
  Divider,
  Group,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";

import {
  IconDownload,
  IconUpload,
} from "@tabler/icons-react";

import SearchFormLayout from "./SearchFormLayout";

export default function UploadForm() {
  const router = useRouter();

  function handleSearch() {
    router.push("/catalog");
  }

  return (
    <SearchFormLayout onSearch={handleSearch}>
      <Stack gap="xl">

        {/* Header */}

        <div>
          <Title order={4}>
            Upload Document
          </Title>

          <Text
            size="sm"
            c="dimmed"
            mt={4}
          >
            Upload an Excel or CSV file containing aircraft part numbers.
          </Text>
        </div>

        {/* Buttons */}

        <Group justify="space-between">
          <Button
            variant="light"
            leftSection={<IconUpload size={18} />}
          >
            Enter Parts
          </Button>

          <Button
            variant="subtle"
            leftSection={<IconDownload size={18} />}
          >
            Download Sample Template
          </Button>
        </Group>

        <Divider />

        {/* Upload Area */}

        <Paper
          withBorder
          radius="md"
          p={50}
          style={{
            borderStyle: "dashed",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          <Stack align="center" gap="sm">
            <IconUpload
              size={42}
              color="#0B7A3E"
            />

            <Title order={5}>
              Drag & Drop your file here
            </Title>

            <Text
              size="sm"
              c="dimmed"
            >
              or click to browse your computer
            </Text>

            <Text
              size="xs"
              c="dimmed"
            >
              Supported formats: .xlsx, .xls, .csv
            </Text>
          </Stack>
        </Paper>

      </Stack>
    </SearchFormLayout>
  );
}