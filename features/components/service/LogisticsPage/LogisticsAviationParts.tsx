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
  IconClock,
  IconFileCheck,
  IconShield,
  IconTruck,
  IconWorld,
} from "@tabler/icons-react";

const services = [
  {
    icon: IconTruck,
    title: "End-to-End Shipping",
    description:
      "Complete door-to-door delivery services including heavy freight forwarding, dedicated courier runs, and specialized handling for aircraft engines.",
  },
  {
    icon: IconWorld,
    title: "Global Network Integration",
    description:
      "We coordinate across international air hubs, customs checkpoints, and local depots to keep your supply chain moving seamlessly across borders.",
  },
  {
    icon: IconShield,
    title: "Secured Air Cargo",
    description:
      "Highly secure transport protocols with temperature-controlled trucks, shock-absorbent engine stands, and real-time GPS asset tracking.",
  },
  {
    icon: IconFileCheck,
    title: "Customs Clearance",
    description:
      "Expert customs brokers ensure rapid processing of import/export declarations, minimizing delays in shipping critical aviation components.",
  },
  {
    icon: IconClock,
    title: "Time-Critical Courier",
    description:
      "For AOG and emergency spares, we offer hand-carry courier services on first-flight-out departures to get your parts delivered in hours.",
  },
  {
    icon: IconAward,
    title: "Regulatory Compliance",
    description:
      "Strict adherence to IATA dangerous goods guidelines, FAA hazard regulations, and international transport compliance rules.",
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