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
      className="sticky top-24"
      w={255}
    >
      <Paper
        p="xl"
        radius="md"
        shadow="xs"
        withBorder
      >
        <Stack gap="lg">

          <Title
            order={3}
            className="flex items-center gap-2"
          >
            <IconFilter size={20} />
            Filters
          </Title>

          <Divider />

          <div>

            <Text fw={600} mb={8}>
              Product Number
            </Text>

            <TextInput
              placeholder="Search part no..."
              leftSection={<IconSearch size={16} />}
            />

          </div>

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
              <Text size="sm">$0</Text>

              <Text size="sm">$10,000+</Text>
            </Group>

          </div>

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