import {
  Button,
  Container,
  Group,
  Paper,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";

import {
  IconCheck,
  IconTool,
} from "@tabler/icons-react";
import Layout from "@/components/Layout";
export default function RepairPage() {
  return (
    <Layout>
    <Container size="md" py={60}>
      <Paper
        withBorder
        shadow="sm"
        radius="lg"
        p="xl"
      >
        <Stack gap="xl">
          <Group gap="sm">
            <ThemeIcon
              size={48}
              radius="xl"
              color="green"
              variant="light"
            >
              <IconTool size={24} />
            </ThemeIcon>

            <div>
              <Title order={2}>
                Aircraft Repair Services
              </Title>

              <Text c="dimmed">
                Fast, reliable, and certified repair solutions for a wide range
                of aircraft components.
              </Text>
            </div>
          </Group>

          <Text>
            Our repair team works with trusted aviation repair facilities to
            restore components to the required standards. We provide quick
            turnaround times, transparent communication, and quality assurance
            throughout the repair process.
          </Text>

         <Stack gap="sm">
  {[
    "Certified repair partners",
    "Fast turnaround time",
    "Detailed repair status updates",
    "Worldwide logistics support",
    "Quality-tested repaired parts",
  ].map((item) => (
    <Group key={item} gap="sm">
      <ThemeIcon color="green" size={22} radius="xl" variant="light">
        <IconCheck size={14} />
      </ThemeIcon>

      <Text>{item}</Text>
    </Group>
  ))}
</Stack>
          <Group>
            <Button color="green">
              Request a Repair
            </Button>

            <Button variant="light">
              Contact Our Team
            </Button>
          </Group>
        </Stack>
      </Paper>
    </Container>
    </Layout>
  );
}