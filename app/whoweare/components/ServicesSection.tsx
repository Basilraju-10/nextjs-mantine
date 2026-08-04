"use client";

import {
    Box,
  Card,
  Container,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";

import {
  IconArrowsExchange,
  IconClipboardText,
  IconCpu,
  IconTool,
  IconTag,
  IconClock,
  IconShieldCheck,
  IconPackage,
} from "@tabler/icons-react";

const services = [
  {
    icon: IconArrowsExchange,
    title: "Exchange",
    description:
      "Flat exchange and Exchange plus cost models with fast turn-around.",
  },
  {
    icon: IconClipboardText,
    title: "Inventory Consignment Sales",
    description:
      "Save expedited freight costs on consignments.",
  },
  {
    icon: IconCpu,
    title: "Component Lease",
    description:
      "Reduce your downtime and avoid costly depreciation.",
  },
  {
    icon: IconTool,
    title: "Repair and Overhaul",
    description:
      "Repair for rotables, avionics and life limited parts.",
  },
  {
    icon: IconTag,
    title: "Surplus Part Purchase",
    description:
      "Sell off your surplus inventory with much value for money.",
  },
  {
    icon: IconClock,
    title: "AOG Desk",
    description:
      "Our AOG line is dedicated to serve our clientele around the globe 24×7.",
  },
  {
    icon: IconShieldCheck,
    title: "Quality Control",
    description:
      "At GFA, we don't just meet the highest quality standards, we set them.",
  },
  {
    icon: IconPackage,
    title: "Logistics",
    description:
      "Worldwide logistics support with fast and secure delivery.",
  },
];

export default function ServicesSection() {
  return (
    < Box bg="white" py={100}>
      <Container size="xl" py={100}>
        {/* Heading */}
        <Stack align="center" gap={8} mb={60}>
          <Title
            order={1}
          ta="center"
          style={{
            fontSize: 52,
            fontWeight: 700,
          }}
        >
          <Text component="span" inherit c="#00B060">
            Aviation Parts:
          </Text>{" "}
          Empowering Your Journey
        </Title>

        <Text ta="center" size="lg">
          Your Hub for Certified Parts, MRO, Engine Leasing & More
        </Text>
      </Stack>

      {/* Cards */}
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="xl">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <Card
              key={service.title}
              radius="md"
              shadow="sm"
              padding="xl"
              withBorder
              style={{
                minHeight: 260,
                background: "#F3FFF7",
              }}
            >
              <ThemeIcon
                variant="transparent"
                color="green"
                size={40}
                mb="lg"
              >
                <Icon size={28} />
              </ThemeIcon>

              <Title order={3} mb="md">
                {service.title}
              </Title>

              <Text
                c="dimmed"
                size="md"
                style={{ lineHeight: 1.8 }}
              >
                {service.description}
              </Text>
            </Card>
          );
        })}
      </SimpleGrid>
    </Container>
    </Box>
  );
}