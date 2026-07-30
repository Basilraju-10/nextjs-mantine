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
  IconHeadset,
} from "@tabler/icons-react";

export default function SupportPage() {
  const features = [
    "24/7 customer assistance",
    "Technical support from aviation experts",
    "Order tracking and status updates",
    "Fast response to service requests",
    "Global customer support",
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
                <IconHeadset size={28} />
              </ThemeIcon>

              <div>
                <Title order={2}>
                  Customer Support
                </Title>

                <Text c="dimmed">
                  Dedicated support for all your aircraft parts and service requirements.
                </Text>
              </div>
            </Group>

            <Text>
              Our support team is available to help you with product inquiries,
              quotations, order tracking, and technical assistance. We strive to
              provide fast and reliable support to customers worldwide.
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
                Contact Support
              </Button>

              <Button variant="light">
                View FAQs
              </Button>
            </Group>
          </Stack>
        </Paper>
      </Container>
    </Layout>
  );
}