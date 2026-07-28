"use client";

import {
  Box,
  Button,
  Divider,
  Group,
  Paper,
  Select,
  Slider,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";

import {
  IconFilter,
  IconSearch,
} from "@tabler/icons-react";

export default function Sidebar() {
  return (
    <Box
      className="
        w-full
        max-w-[255px]
        mx-auto
        md:sticky
        md:top-24
        md:self-start
        max-md:max-w-full
        max-md:mb-6
      "
    >
      <Paper
        p="xl"
        radius="md"
        shadow="xs"
        withBorder
      >
        <Stack gap="lg">

          {/* Header */}
          <Group gap="sm">
            <IconFilter size={20} />

            <Title order={3}>
              Filters
            </Title>
          </Group>

          <Divider />

          {/* Product Number */}
          <div>
            <Text fw={600} mb={8}>
              Product Number
            </Text>

            <TextInput
              placeholder="Search part no..."
              leftSection={
                <IconSearch size={16} />
              }
            />
          </div>


          {/* Condition */}
          <div>
            <Text fw={600} mb={8}>
              Condition
            </Text>

            <Select
              data={[
                "All",
                "New",
                "Used",
                "Refurbished",
              ]}
              defaultValue="All"
            />
          </div>


          {/* Price */}
          <div>
            <Text fw={600} mb={18}>
              Price Range
            </Text>

            <Slider
              defaultValue={70}
              color="green"
            />

            <Group
              mt="sm"
              justify="space-between"
            >
              <Text size="sm">
                $0
              </Text>

              <Text size="sm">
                $10,000+
              </Text>

            </Group>

          </div>


          {/* Reset */}
          <Button
            fullWidth
            variant="light"
          >
            Reset Filters
          </Button>

        </Stack>
      </Paper>
    </Box>
  );
}