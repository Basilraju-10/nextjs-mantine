import { Container, Group, Paper, SimpleGrid, Stack, Text, ThemeIcon, Title } from "@mantine/core";
import { IconShieldCheck, IconSparkles, IconTargetArrow, IconUsers } from "@tabler/icons-react";
import Layout from "@/components/Layout";

export default function WhoWeArePage() {
  return (
    <Layout>
      <Container size="lg" py="xl">
        <Stack gap="xl">
          <Paper withBorder radius="lg" p="xl">
            <Stack gap="sm">
              <Title order={1} >
                Who We Are
              </Title>
              <Text size="lg" c="gray.7">
                We are a team of product and operations specialists committed to making
                sourcing, cataloging, and maintenance simpler for businesses that depend
                on the right solutions at the right time.
              </Text>
            </Stack>
          </Paper>

          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
            <Paper withBorder radius="lg" p="xl">
              <Stack gap="sm">
                <Group gap="sm">
                  <ThemeIcon size="lg" radius="xl" color="blue">
                    <IconTargetArrow size={20} />
                  </ThemeIcon>
                  <Title order={2} size="h3">
                    Our Mission
                  </Title>
                </Group>
                <Text c="gray.7">
                  To help organizations discover the right products faster, improve
                  visibility across their operations, and make informed decisions with
                  confidence.
                </Text>
              </Stack>
            </Paper>

            <Paper withBorder radius="lg" p="xl">
              <Stack gap="sm">
                <Group gap="sm">
                  <ThemeIcon size="lg" radius="xl" color="green">
                    <IconUsers size={20} />
                  </ThemeIcon>
                  <Title order={2} size="h3">
                    Our Team
                  </Title>
                </Group>
                <Text c="gray.7">
                  We bring together experts in product management, procurement, and
                  customer support so every experience is practical, responsive, and
                  dependable.
                </Text>
              </Stack>
            </Paper>
          </SimpleGrid>

          <Paper withBorder radius="lg" p="xl">
            <Stack gap="sm">
              <Group gap="sm">
                <ThemeIcon size="lg" radius="xl" color="orange">
                  <IconSparkles size={20} />
                </ThemeIcon>
                <Title order={2} size="h3">
                  What Sets Us Apart
                </Title>
              </Group>
              <Text c="gray.7">
                From streamlined search tools to dependable product information, we focus
                on creating clarity, reducing friction, and helping teams work more
                efficiently every day.
              </Text>
            </Stack>
          </Paper>

          <Paper withBorder radius="lg" p="xl">
            <Stack gap="xs">
              <Group gap="sm">
                <ThemeIcon size="lg" radius="xl" color="red">
                  <IconShieldCheck size={20} />
                </ThemeIcon>
                <Title order={2} size="h3">
                  Why Clients Trust Us
                </Title>
              </Group>
              <Text c="gray.7">• Reliable product data and organized catalog access</Text>
              <Text c="gray.7">• A clear, user-friendly experience for every workflow</Text>
              <Text c="gray.7">• A partner-focused approach built around long-term value</Text>
            </Stack>
          </Paper>
        </Stack>
      </Container>
    </Layout>
  );
}
