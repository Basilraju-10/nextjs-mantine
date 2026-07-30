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
  IconShieldCheck,
} from "@tabler/icons-react";

export default function QualityPage() {
  const features = [
    "Strict quality inspection process",
    "Certified aviation standards",
    "Reliable and tested components",
    "Detailed quality documentation",
    "Commitment to customer satisfaction",
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
                <IconShieldCheck size={28} />
              </ThemeIcon>

              <div>
                <Title order={2}>
                  Quality Assurance
                </Title>

                <Text c="dimmed">
                  Delivering reliable aircraft parts with strict quality
                  standards and inspection procedures.
                </Text>
              </div>
            </Group>


            <Text>
              Quality is our priority. Every component goes through careful
              evaluation and verification to ensure reliability, safety, and
              compliance with aviation requirements.
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

                  <Text>
                    {feature}
                  </Text>
                </Group>
              ))}
            </Stack>


            <Group>
              <Button color="green">
                Learn More
              </Button>

              <Button
                color="green"
                variant="light"
              >
                Contact Team
              </Button>
            </Group>

          </Stack>
        </Paper>
      </Container>
    </Layout>
  );
}