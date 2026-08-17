"use client";

import {
  Box,
  Button,
  Card,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";

import {
} from "@tabler/icons-react";

const services = [
  {
    title: "Repair and overhaul basics: a beginners guide",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
    text: "Press Release",
    date:"24-05-2026",

  },
  {
    title: "DIY vs professional R&O: what's best for you",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
    text: "Press Release",
    date:"24-05-2026",
  },
  {
    title: "Optimizing aircraft exchange workflows",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
    text: "Press Release",
    date:"24-05-2026",
  }
];

export default function LatestNews() {
  return (
    <Box bg="white">
      <Container size="xl" py={100}>
        <Stack align="center" gap={8} mb={60}>
          <Text ta="center" size="sm" c="dimmed">
            OUR BLOG AND NEWS
          </Text>

          <Title
            order={1}
            ta="center"
            style={{
              fontSize: 30,
              fontWeight: 600,
            }}
          >
            <Text component="span" inherit c="#00552F">
              Latest
            </Text>{" "}
            News & Events 
          </Title>
        </Stack>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
          {services.map((service) => {

            return (
              <Card
                key={service.title}
                className="latest-news-card"
                padding="xl"
                radius={0}
                shadow={undefined}
                withBorder={false}
                style={{
                  minHeight: 260,
                  background: "#edf4ed",
                  borderRadius: 0,
                  boxShadow: "none",
                  border: "none",
                }}
>
                <Title order={3} mb="md" size="md" c="#00552F">
                  {service.title}
                </Title>

                <Text
                  c="dimmed"
                  size="sm"
                  style={{ lineHeight: 1.8 }}
                >
                  {service.description}
                </Text>
                <br />
                <Text
                  c="#00552F"
                  size="sm"
                  style={{ lineHeight: 1.8 }}
                >
                  {service.text}
                </Text>
                <Text
                  c="dimmed"
                  size="sm"
                  style={{ lineHeight: 1.8 }}
                >
                  {service.date}
                </Text> 
              </Card>
              
            );
          })}
        </SimpleGrid>

  <Box ta="center" mt={50}>
  <Button
    variant="outline"
    color="#006B2E" 
    radius="xl"
    size="md"
    styles={{
      root: {
        width: 160,
        height: 46,
        borderWidth: 1.5,
      },
    }}
  >
    View All News
  </Button>
  </Box>
      </Container>
    </Box>
  );
}