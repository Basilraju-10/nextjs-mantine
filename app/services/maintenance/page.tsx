import Layout from "@/components/Layout";

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
  IconSettings,
} from "@tabler/icons-react";

export default function MaintenancePage() {
  const features = [
    "Scheduled aircraft maintenance services",
    "Preventive maintenance programs",
    "Certified maintenance technicians",
    "Comprehensive inspection reports",
    "Worldwide maintenance support",
  ];

  return (
    <Layout>
      <Container size="lg" py={60}>
        <Paper
          withBorder
          shadow="sm"
          radius="lg"
          p="xl"
        >
          <Stack gap="xl">
            <Group gap="md">
              <ThemeIcon
                size={56}
                radius="xl"
                color="green"
                variant="light"
              >
                <IconSettings size={28} />
              </ThemeIcon>

              <div>
                <Title order={2}>
                  Aircraft Maintenance
                </Title>

                <Text c="dimmed">
                  Reliable maintenance solutions to keep your aircraft operating
                  safely and efficiently.
                </Text>
              </div>
            </Group>

            <Text>
              Our maintenance services are designed to maximize aircraft
              reliability and minimize downtime. From routine inspections to
              preventive maintenance, our experienced team ensures every
              component meets industry standards and regulatory requirements.
            </Text>

            <Stack gap="sm">
              {features.map((feature) => (
                <Group key={feature} gap="sm">
                  <ThemeIcon
                    color="green"
                    variant="light"
                    radius="xl"
                  >
                    <IconCheck size={14} />
                  </ThemeIcon>

                  <Text>{feature}</Text>
                </Group>
              ))}
            </Stack>

            <Group>
              <Button color="green">
                Schedule Maintenance
              </Button>

              <Button
                color="green"
                variant="light"
              >
                Learn More
              </Button>
            </Group>
          </Stack>
        </Paper>
      </Container>
    </Layout>
  );
}