"use client";

import {
  Card,
  Container,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";

import {
 
 
  IconAward,
  IconCertificate,
  IconEye,
  IconFileText,
  IconShieldCheck,
  IconTemperature,
} from "@tabler/icons-react";

const services = [
  {
    icon: IconFileText,
    title: "Quick Turnaround",
    description:
      "Access top-quality aviation parts and inventory at lower costs with fast turnaround times. GFA helps you find specific components quickly and ship them in record-breaking times.",
  },
  {
    icon: IconEye,
    title: "Environmentally Friendly",
    description:
      "Buying surplus components is an eco-friendly practice that reduces manufacturing waste, extends asset lifecycles, and promotes aviation sustainability.",
  },
  {
    icon: IconShieldCheck,
    title: "Support for Legacy Aircraft",
    description:
      "Discover hard-to-find components for mature or legacy fleets. GFA maintains an extensive stock of vintage and legacy spares to keep older models flying safely.",
  },
  {
    icon: IconTemperature,
    title: "Inventory Management",
    description:
      "GFA offers custom strategies to manage excess or surplus inventories, maximizing return on investments while ensuring parts traceability and full certification compliance.",
  },
  {
    icon: IconAward,
    title: "Long-term Relationships",
    description:
      "Establish long-term partnerships built on trust, quality, and reliability. We are committed to supporting our clients throughout their operations.",
  },
  {
    icon: IconCertificate,
    title: "Cost efficiency",
    description:
      "Acquire high-quality components at a fraction of standard OEM prices, optimizing your procurement budgets and keeping operating costs under control.",
  },
];
export default function AviationParts() {
  return (
   
      <Container size="xl" py={100}>
        {/* Heading */}
        <Stack align="center" gap={8} mb={60}>
           <Text ta="center" size="sm" c="dimmed">
          FEATURES AND BENEFITS
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
            Aviation Parts:
          </Text>{" "}
          Empowering Your Journey
        </Title>

       
      </Stack>

      {/* Cards */}
     <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
        {services.map((service) => {
          const Icon = service.icon;

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
              <ThemeIcon
                variant="transparent"
                color="green"
                size={40}
                mb="lg"
              >
                <Icon size={28} />
              </ThemeIcon>

              <Title order={3} mb="md" size="md"
              c="#00552F">
                {service.title}
              </Title>

              <Text
                c="dimmed"
                size="sm"
                style={{ lineHeight: 1.8 }}
              >
                {service.description}
              </Text>
            </Card>
          );
        })}
      </SimpleGrid>
    </Container>

  );
}